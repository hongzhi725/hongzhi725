<?php
class JSSDK {
  private $appId;
  private $appSecret;
//private $urlnew;
	
  public function __construct($appId, $appSecret) {
    $this->appId = $appId;
    $this->appSecret = $appSecret;
//		$this->url = $urlnew;
//		$this->cardId = $cardId;
  }

  public function getSignPackage($url="") {
    $jsapiTicket = $this->getJsApiTicket();
//		$url='http://wx.xykjg.com/sign/test/index.php';
    // 注意 URL 一定要动态获取，不能 hardcode.
//  $protocol = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off' || $_SERVER['SERVER_PORT'] == 443) ? "https://" : "http://";
//		if ($url = "") {
//			$url = "$protocol$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
//		}
		
    $timestamp = time();
    $nonceStr = $this->createNonceStr();

    // 这里参数的顺序要按照 key 值 ASCII 码升序排序
    $string = "jsapi_ticket=$jsapiTicket&noncestr=$nonceStr&timestamp=$timestamp&url=$url";
		
    $signature = sha1($string);

    $signPackage = array(
      "appId"     => $this->appId,
      "nonceStr"  => $nonceStr,
      "timestamp" => $timestamp,
      "url"       => $url,
      "signature" => $signature,
      "rawString" => $string
    );
    return $signPackage; 
  }
  //微信卡券的签名
  public function getCardSign($card_id='',$code='',$card_type='',$location_id='') {
    $apiTicket = $this->getApiTicket();
//		$code="";
//		$card_type="GENERAL_COUPON";
//		$location_id="";
    $timestamp = time();
    $nonceStr = $this->createNonceStr();
	
		$arrdata = array("api_ticket" => $apiTicket,"card_id" => $card_id,"code" => $code,"card_type" => $card_type,"location_id" => $location_id,"noncestr" => $noncestr,"timestamp" => $timestamp );
    $sign = $this->getTicketSignature($arrdata);
//		$sign = $this->getSign($arrdata);
    if (!$sign)
            return false;
    $signPackage = array(
            "cardType"     => $card_type,
            "cardId"       => $card_id,
            "shopId"       => $location_id,         //location_id就是shopId
            "nonceStr"  	 => $noncestr,
            "timestamp" 	 => $timestamp,
            "cardSign" 	 	 => $sign
    );
    return $signPackage;
  }
	/**
	 * 获取微信卡券签名
	 * @param array $arrdata 签名数组
	 * @param string $method 签名方法
	 * @return boolean|string 签名值
	 */
	public function getTicketSignature($arrdata,$method="sha1") {
		if (!function_exists($method)) return false;
		$newArray = array();
		foreach($arrdata as $key => $value)
		{
			array_push($newArray,(string)$value);
		}
		sort($newArray,SORT_STRING);
		return $method(implode($newArray));
	}
	function getSign($card){
    sort($card,SORT_STRING);
    $sign = sha1(implode($card));
    if (!$sign)
        return false;
    return $sign;
	}
  private function createNonceStr($length = 16) {
    $chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    $str = "";
    for ($i = 0; $i < $length; $i++) {
      $str .= substr($chars, mt_rand(0, strlen($chars) - 1), 1);
    }
    return $str;
  }

  public function getJsApiTicket() {
    // jsapi_ticket 应该全局存储与更新，以下代码以写入到文件中做示例
    $data = json_decode(file_get_contents("./jsapi_ticket.json"));
    if ($data->expires_time < time()) {
      $accessToken = $this->getAccessToken();
      $url = "https://api.weixin.qq.com/cgi-bin/ticket/getticket?type=jsapi&access_token=$accessToken";
      $res = json_decode($this->httpGet($url));
      $ticket = $res->ticket;
      if ($ticket) {
      	$data->ticket = $ticket;
        $data->expires_time = time() + 7000;
				$fp=fopen("./jsapi_ticket.json", "w");
				fwrite($fp, json_encode($data));
				fclose($fp);
        //$this->set_php_file("jsapi_ticket.php", json_encode($data));
      }
    } else {
      $ticket = $data->ticket;
    }
    return $ticket;
  }
	public function getApiTicket() {
		// api_ticket 应该全局存储与更新，以下代码以写入到文件中做示例
    $data = json_decode(file_get_contents("./api_ticket.json"));
    if ($data->expires_time < time()) {
      $accessToken = $this->getAccessToken();
      $url = "https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token=$accessToken&type=wx_card";
      $res = json_decode($this->httpGet($url));
      $ticket = $res->ticket;
      if ($ticket) {
      	$data->ticket = $ticket;
        $data->expires_time = time() + 7000;
				$fp=fopen("./api_ticket.json", "w");
				fwrite($fp, json_encode($data));
				fclose($fp);
      }
    } else {
      $ticket = $data->ticket;
    }
    return $ticket;
  }
  public function getAccessToken() {
    // access_token 应该全局存储与更新，以下代码以写入到文件中做示例
    $data = json_decode(file_get_contents("./access_token.json"));
    if ($data->expires_time < time()) {
      // 如果是企业号用以下URL获取access_token
      // $url = "https://qyapi.weixin.qq.com/cgi-bin/gettoken?corpid=$this->appId&corpsecret=$this->appSecret";
      $url = "https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=$this->appId&secret=$this->appSecret";
      $res = json_decode($this->httpGet($url));
      $access_token = $res->access_token;
//    if ($access_token) {
//      $data->expire_time = time() + 7000;
//      $data->access_token = $access_token;
//      $this->set_php_file("access_token.php", json_encode($data));
//    }
			//文件写入json
			$data->access_token=$access_token;
			$data->expires_time=time()+7000;
			$fp=fopen("./access_token.json", "w");
			fwrite($fp, json_encode($data));
			fclose($fp);
    } else {
      $access_token = $data->access_token;
    }
    return $access_token;
  }

  private function httpGet($url) {
    $curl = curl_init();
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($curl, CURLOPT_TIMEOUT, 500);
    // 为保证第三方服务器与微信服务器之间数据传输的安全性，所有微信接口采用https方式调用，必须使用下面2行代码打开ssl安全校验。
    // 如果在部署过程中代码在此处验证失败，请到 http://curl.haxx.se/ca/cacert.pem 下载新的证书判别文件。
    curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, true);
    curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, true);
    curl_setopt($curl, CURLOPT_URL, $url);

    $res = curl_exec($curl);
    curl_close($curl);

    return $res;
  }

  private function get_php_file($filename) {
    return trim(substr(file_get_contents($filename), 15));
  }
  private function set_php_file($filename, $content) {
    $fp = fopen($filename, "w");
    fwrite($fp, "<?php exit();?>" . $content);
    fclose($fp);
  }
}

