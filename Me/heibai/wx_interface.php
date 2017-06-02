<?php
/**
  * wechat php test
  */

//define your token;
define("TOKEN", "abcdefg");
$wechatObj = new wechatCallbackapiTest();
$wechatObj->valid();
if (isset($_GET['echostr'])) {
    $wechatObj->valid();
}else{
    $wechatObj->responseMsg();
}
class wechatCallbackapiTest
{
    public function valid()
    {
        $echoStr = $_GET["echostr"];

        //valid signature , option
        if($this->checkSignature()){
        	echo $echoStr;
        	exit;
        }
    }
    //天气功能
    private function Weather($object)
    {
        $keyword = trim($object->Content);
        //$keyword = ltrim($keyword2,"天气");
        include("weather2.php");
        $content = getWeatherInfo($keyword);
        // $result = $this->transmitText($object, count($content));
        $result = $this->transmitNews($object, $content);
        return $result;
    }
    private function transmitNews($object, $arr_item)
    {
        if(!is_array($arr_item))
            return;
        
        $itemTpl = "<item>
        <Title><![CDATA[%s]]></Title>
        <Description><![CDATA[%s]]></Description>
        <PicUrl><![CDATA[%s]]></PicUrl>
        <Url><![CDATA[%s]]></Url>
        </item>";
        $item_str = "";
        foreach ($arr_item as $item)
            $item_str .= sprintf($itemTpl, $item['Title'], $item['Description'], $item['PicUrl'], $item['Url']);
        
        $newsTpl = "<xml>
        <ToUserName><![CDATA[%s]]></ToUserName>
        <FromUserName><![CDATA[%s]]></FromUserName>
        <CreateTime>%s</CreateTime>
        <MsgType><![CDATA[news]]></MsgType>
        <Content><![CDATA[]]></Content>
        <ArticleCount>%s</ArticleCount>
        <Articles>
        $item_str</Articles>
        </xml>";

        $result = sprintf($newsTpl, $object->FromUserName, $object->ToUserName, time(), count($arr_item));
        return $result;
    }
    //天气功能函数结束;
    public function responseMsg()
    {
        function getxiaodou($msg){
        $url = 'http://xiao.douqq.com/bot/chata.php?chat='.$msg;  
        //$url = 'http://xiaodou.duapp.com/bot/chata.php?chat='.$msg;  
        $data = file_get_contents($url);
        $data = str_replace('<br />','\r\n',$data);
        return $data;
        }
		//get post data, May be due to the different environments
		$postStr = $GLOBALS["HTTP_RAW_POST_DATA"];
        if(!empty($postStr)){
            //解析数据
            $postObj = simplexml_load_string($postStr, 'SimpleXMLElement', LIBXML_NOCDATA);
            //发送消息方ID
            $fromUsername = $postObj->FromUserName;
            //接收消息方ID
            $toUsername = $postObj->ToUserName;
            //消息类型
            $form_MsgType = $postObj->MsgType;
            include("wx_tpl.php");
            /*$textTpl = "<xml>
							<ToUserName><![CDATA[%s]]></ToUserName>
							<FromUserName><![CDATA[%s]]></FromUserName>
							<CreateTime>%s</CreateTime>
							<MsgType><![CDATA[%s]]></MsgType>
							<Content><![CDATA[%s]]></Content>
							<FuncFlag>0</FuncFlag>
							</xml>";*/
            if($form_MsgType=="text"){
             //获取用户发送的文字内容
              $form_Content = trim($postObj->Content);
             //截取前1个字符，判断属于关键数字“几”
             //$form_Content = substr( $form_Content1,0,2);
                $x1 = "%**#".$form_Content;
             //菜单模式 
                /*
              if( $form_Content == "0" )
              {
                 //回复欢迎图文菜单
                  $resultStr="<xml>\n
                 <ToUserName><![CDATA[".$fromUsername."]]></ToUserName>\n
                 <FromUserName><![CDATA[".$toUsername."]]></FromUserName>\n
                 <CreateTime>".time()."</CreateTime>\n
                 <MsgType><![CDATA[news]]></MsgType>\n
                 <ArticleCount>9</ArticleCount>\n
                 <Articles>\n";
              
                 //添加封面图文消息
                  $resultStr.="<item>\n
                 <Title><![CDATA[★☆Touch 菜单模式☆★]]></Title> \n
                 <Description><![CDATA[]]></Description>\n
                 <PicUrl><![CDATA[]]></PicUrl>\n
                 <Url><![CDATA[]]></Url>\n
                 </item>\n";
              
                 //添加N条列表图文消息
                  $resultStr.="<item>\n
                 <Title><![CDATA[【1】本学期校历]]></Title> \n
                 <Description><![CDATA[]]></Description>\n
                 <PicUrl><![CDATA[http://lhz0725-lhz0725.stor.sinaapp.com/pic/Xiaoli_20142.jpg]]></PicUrl>\n
                 <Url><![CDATA[http://mp.weixin.qq.com/s?__biz=MzA4MzQ2ODQxNw==&mid=200052369&idx=1&sn=addbbc1ba435b144ebc7b60122328496#rd]]></Url>\n
                 </item>\n";
              
                  $resultStr.="<item>\n
                  <Title><![CDATA[【2】形势与政策：本周课程表]]></Title> \n
                  <Description><![CDATA[]]></Description>\n
                  <PicUrl><![CDATA[http://lhz0725-lhz0725.stor.sinaapp.com/pic/XSYZC_LOGO.jpg]]></PicUrl>\n
                  <Url><![CDATA[http://mp.weixin.qq.com/s?__biz=MzA4MzQ2ODQxNw==&mid=200053090&idx=1&sn=0d57cec8881ed8bbe49ca1044b3a8a11#rd]]></Url>\n
                  </item>\n";
                  
                  $resultStr.="<item>\n
                  <Title><![CDATA[【2】形势与政策：听课次数查询]]></Title> \n
                  <Description><![CDATA[]]></Description>\n
                  <PicUrl><![CDATA[http://lhz0725-lhz0725.stor.sinaapp.com/pic/XSYZC_LOGO.jpg]]></PicUrl>\n
                  <Url><![CDATA[http://tqa.bnuz.edu.cn:8088/#rd]]></Url>\n
                  </item>\n";
                  
                  $resultStr.="<item>\n
                 <Title><![CDATA[【3】微贴吧：分享你的心情！]]></Title> \n
                 <Description><![CDATA[]]></Description>\n
                 <PicUrl><![CDATA[http://lhz0725-lhz0725.stor.sinaapp.com/pic/WSQ_TITLE2.jpg]]></PicUrl>\n
                 <Url><![CDATA[http://wx.wsq.qq.com/205950641]]></Url>\n
                 </item>\n";
                  
                  $resultStr.="<item>\n
                 <Title><![CDATA[【4】游戏：只分享最有价值的游戏！]]></Title> \n
                 <Description><![CDATA[]]></Description>\n
                 <PicUrl><![CDATA[http://lhz0725-lhz0725.stor.sinaapp.com/pic/2048_title.jpg]]></PicUrl>\n
                 <Url><![CDATA[http://gabrielecirulli.github.io/2048/]]></Url>\n
                 </item>\n";
                  
                  $resultStr.="<item>\n
                 <Title><![CDATA[【5】福利：麦当劳4月电子优惠券]]></Title> \n
                 <Description><![CDATA[]]></Description>\n
                 <PicUrl><![CDATA[http://lhz0725-lhz0725.stor.sinaapp.com/pic/McDonald's_TITLE.jpg]]></PicUrl>\n
                 <Url><![CDATA[http://mp.weixin.qq.com/s?__biz=MzA4MzQ2ODQxNw==&mid=200054474&idx=1&sn=4a41613cab6b5c04f6bb6eb7ab6b9312#rd]]></Url>\n
                 </item>\n";
                /*  
                  $resultStr.="<item>\n
                 <Title><![CDATA[【6】北师剪影精品店]]></Title> \n
                 <Description><![CDATA[]]></Description>\n
                 <PicUrl><![CDATA[http://lhz0725-lhz0725.stor.sinaapp.com/BSJYJPD/BSJYJPD_LOGO.jpg]]></PicUrl>\n
                 <Url><![CDATA[http://wd.koudai.com/?userid=161498251]]></Url>\n
                 </item>\n";
                  
                  $resultStr.="<item>\n
                 <Title><![CDATA[【8】电台：主播淘雪带给您的灵魂共鸣]]></Title> \n
                 <Description><![CDATA[]]></Description>\n
                 <PicUrl><![CDATA[http://lhz0725-lhz0725.stor.sinaapp.com/pic/DT_LOGO.jpg]]></PicUrl>\n
                 <Url><![CDATA[http://mp.weixin.qq.com/s?__biz=MzA4MzQ2ODQxNw==&mid=200094917&idx=1&sn=8d990d32278f1e1e6ce3cfc4e385ff9f#rd]]></Url>\n
                 </item>\n";
                  
                  $resultStr.="<item>\n
                 <Title><![CDATA[【历史】查看剪影历史推送消息“请点我”]]></Title> \n
                 <Description><![CDATA[]]></Description>\n
                 <PicUrl><![CDATA[http://lhz0725-lhz0725.stor.sinaapp.com/pic/LOGO.jpg]]></PicUrl>\n
                 <Url><![CDATA[http://mp.weixin.qq.com/mp/getmasssendmsg?__biz=MzA4MzQ2ODQxNw==#wechat_webview_type=1&wechat_redirect]]></Url>\n
                 </item>\n";
                  
                  $resultStr.="</Articles>\n
                 <FuncFlag>0</FuncFlag>\n
                 </xml>";
                  
                 echo $resultStr;
                 exit;
                   
              }
              */
              //
              if( $form_Content == "1" )
              {
                  $msgType = "news";
                  $resultStr = "<xml>\n
                  <ToUserName><![CDATA[".$fromUsername."]]></ToUserName>\n
                  <FromUserName><![CDATA[".$toUsername."]]></FromUserName>\n
                  <CreateTime>".time()."</CreateTime>\n
                  <MsgType><![CDATA[news]]></MsgType>\n
                  <ArticleCount>3</ArticleCount>\n
                  <Articles>\n";
                  
                  //添加封面图文消息
                  $resultStr.="<item>\n
                  <Title><![CDATA[“北京师范大学珠海分校”校历]]></Title> \n
                  <Description><![CDATA[]]></Description>\n
                  <PicUrl><![CDATA[http://lhz0725-lhz0725.stor.sinaapp.com/pic/BNUZ-XMS.jpg]]></PicUrl>\n
                  <Url><![CDATA[]]></Url>\n
                  </item>\n";
                  
            /*      //添加第一个图文消息
                  $resultStr.="<item>\n
                  <Title><![CDATA[2013-2014学年第二学期、小学期校历（本学期）]]></Title> \n
                  <Description><![CDATA[]]></Description>\n
                  <PicUrl><![CDATA[http://lhz0725-lhz0725.stor.sinaapp.com/pic/Xiaoli_20142.jpg]]></PicUrl>\n
                  <Url><![CDATA[http://mp.weixin.qq.com/s?__biz=MzA4MzQ2ODQxNw==&mid=200052369&idx=1&sn=addbbc1ba435b144ebc7b60122328496#rd]]></Url>\n
                  </item>\n";
                  
            */
                  
                  //添加第个图文消息
                  $resultStr.="<item>\n
                  <Title><![CDATA[2014-2015学年第一学期校历（本学期）]]></Title> \n
                  <Description><![CDATA[]]></Description>\n
                  <PicUrl><![CDATA[http://lhz0725-lhz0725.stor.sinaapp.com/pic/Xiaoli_20142.jpg]]></PicUrl>\n
                  <Url><![CDATA[http://mp.weixin.qq.com/s?__biz=MzA4MzQ2ODQxNw==&mid=200115001&idx=1&sn=9afc40149ea07c4a78c2adbb9a9e679e#rd]]></Url>\n
                  </item>\n";
                  
                  //添加第个图文消息
                  $resultStr.="<item>\n
                  <Title><![CDATA[2014-2015学年第二学期、小学期校历]]></Title> \n
                  <Description><![CDATA[]]></Description>\n
                  <PicUrl><![CDATA[http://lhz0725-lhz0725.stor.sinaapp.com/pic/Xiaoli_20142.jpg]]></PicUrl>\n
                  <Url><![CDATA[http://mp.weixin.qq.com/s?__biz=MzA4MzQ2ODQxNw==&mid=200115001&idx=2&sn=a2315a5f9e4207c738e6596ebe8556cf#rd]]></Url>\n
                  </item>\n";
                   
                  $resultStr.="</Articles>\n
                  <FuncFlag>0</FuncFlag>\n
                  </xml>";
                   
                  echo $resultStr;
                  exit;
                   
              }
              //当回复“2”，发送内容。
              elseif( $form_Content == "2" )
              {
                  $msgType = "news";
                  $resultStr = "<xml>\n
                  <ToUserName><![CDATA[".$fromUsername."]]></ToUserName>\n
                  <FromUserName><![CDATA[".$toUsername."]]></FromUserName>\n
                  <CreateTime>".time()."</CreateTime>\n
                  <MsgType><![CDATA[news]]></MsgType>\n
                  <ArticleCount>3</ArticleCount>\n
                  <Articles>\n";
                  
                  //添加封面图文消息
                  $resultStr.="<item>\n
                  <Title><![CDATA[《形势与政策》课表与查询]]></Title> \n
                  <Description><![CDATA[]]></Description>\n
                  <PicUrl><![CDATA[http://lhz0725-lhz0725.stor.sinaapp.com/pic/XSYZC_LOGO.jpg]]></PicUrl>\n
                  <Url><![CDATA[]]></Url>\n
                  </item>\n";
                  
                  //添加第一个图文消息
                  $resultStr.="<item>\n
                  <Title><![CDATA[《形势与政策》本周课程表]]></Title> \n
                  <Description><![CDATA[]]></Description>\n
                  <PicUrl><![CDATA[http://lhz0725-lhz0725.stor.sinaapp.com/pic/XSYZC_LOGO.jpg]]></PicUrl>\n
                  <Url><![CDATA[http://mp.weixin.qq.com/s?__biz=MzA4MzQ2ODQxNw==&mid=200053090&idx=1&sn=0d57cec8881ed8bbe49ca1044b3a8a11#rd]]></Url>\n
                  </item>\n";
                  
                  //添加第二个图文消息
                  $resultStr.="<item>\n
                  <Title><![CDATA[《形势与政策》听课次数查询]]></Title> \n
                  <Description><![CDATA[]]></Description>\n
                  <PicUrl><![CDATA[http://lhz0725-lhz0725.stor.sinaapp.com/pic/XSYZC_LOGO.jpg]]></PicUrl>\n
                  <Url><![CDATA[http://tqa.bnuz.edu.cn:8088/#rd]]></Url>\n
                  </item>\n";
                   
                  $resultStr.="</Articles>\n
                  <FuncFlag>0</FuncFlag>\n
                  </xml>";
                   
                  echo $resultStr;
                  exit;
                   
              }
              //当回复“3”，发送内容。
              elseif( $form_Content == "3" )
              {
                 $msgType = "news";
                 $resultStr = "<xml>\n
                 <ToUserName><![CDATA[".$fromUsername."]]></ToUserName>\n
                 <FromUserName><![CDATA[".$toUsername."]]></FromUserName>\n
                 <CreateTime>".time()."</CreateTime>\n
                 <MsgType><![CDATA[news]]></MsgType>\n
                 <ArticleCount>1</ArticleCount>\n
                 <Articles>\n";
                   
                 //添加封面图文消息
                 $resultStr.="<item>\n
                 <Title><![CDATA[【3】剪影微社区：分享你的心情！]]></Title> \n
                 <Description><![CDATA[在这里，您可以与其他关注剪影的人们进行互动，畅所欲言，让我们一同分享发生在“我们”身边的故事吧！]]></Description>\n
                 <PicUrl><![CDATA[http://lhz0725-lhz0725.stor.sinaapp.com/pic/WSQ_TITLE2.jpg]]></PicUrl>\n
                 <Url><![CDATA[http://wx.wsq.qq.com/205950641]]></Url>\n
                 </item>\n";
                   
                 $resultStr.="</Articles>\n
                 <FuncFlag>0</FuncFlag>\n
                 </xml>";
                   
                 echo $resultStr;
                 exit;
                   
              }
              //当回复“4”，发送内容。
              elseif( $form_Content == "4" )
              {
                  $msgType = "news";
                  $resultStr = "<xml>\n
                  <ToUserName><![CDATA[".$fromUsername."]]></ToUserName>\n
                  <FromUserName><![CDATA[".$toUsername."]]></FromUserName>\n
                  <CreateTime>".time()."</CreateTime>\n
                  <MsgType><![CDATA[news]]></MsgType>\n
                  <ArticleCount>8</ArticleCount>\n
                  <Articles>\n";
                   
                  //添加封面图文消息
                  $resultStr.="<item>\n
                  <Title><![CDATA[剪影游戏：只为您找寻“最”有趣的游戏！]]></Title> \n
                  <Description><![CDATA[]]></Description>\n
                  <PicUrl><![CDATA[http://jianying0316-jianying0316.stor.vipsinaapp.com/games/games_TITLE.jpg]]></PicUrl>\n
                  <Url><![CDATA[]]></Url>\n
                  </item>\n";
                  //游戏规则：选择其中一个方向去滑动，每滑动一次，所有的数字方块都会往滑动的方向靠拢外，系统也会在空白的地方乱数出现一个数字方块，相同数字的方况在靠拢、相撞时会相加。系统给予的数字方块不是2就是4，玩家要想办法在这小小的16格范围中凑出“2048”这个数字方块。
                 
                  //添加第N个图文消息
                  $resultStr.="<item>\n
                  <Title><![CDATA[【强迫症患者】你以为你能调平？]]></Title> \n
                  <Description><![CDATA[]]></Description>\n
                  <PicUrl><![CDATA[http://jianying0316-jianying0316.stor.sinaapp.com/games/qpzhz/icon.png]]></PicUrl>\n
                  <Url><![CDATA[http://5.jianying0316.sinaapp.com/qpzhz/qpzhz.html?from=qpzhz]]></Url>\n
                  </item>\n";
                  
                  //添加第N个图文消息
                  $resultStr.="<item>\n
                  <Title><![CDATA[【疯狂手指】根本停不下来！]]></Title> \n
                  <Description><![CDATA[]]></Description>\n
                  <PicUrl><![CDATA[http://jianying0316-jianying0316.stor.vipsinaapp.com/games/clicks/DGxrr.jpg]]></PicUrl>\n
                  <Url><![CDATA[http://5.jianying0316.sinaapp.com/clicks/index.html?from=clicks]]></Url>\n
                  </item>\n";
                  
                  //添加第N个图文消息
                  $resultStr.="<item>\n
                  <Title><![CDATA[【围住神经猫】玩过之后我变神经了！]]></Title> \n
                  <Description><![CDATA[]]></Description>\n
                  <PicUrl><![CDATA[http://jianying0316-jianying0316.stor.vipsinaapp.com/games/sjm/icon.png]]></PicUrl>\n
                  <Url><![CDATA[http://5.jianying0316.sinaapp.com/sjm/index.html?from=sjm]]></Url>\n
                  </item>\n";
                  
                  //添加第N个图文消息
                  $resultStr.="<item>\n
                  <Title><![CDATA[【看你有多色】是否是色魔？就看她了！]]></Title> \n
                  <Description><![CDATA[]]></Description>\n
                  <PicUrl><![CDATA[http://jianying0316-jianying0316.stor.sinaapp.com/games/knyds/wxicon.png]]></PicUrl>\n
                  <Url><![CDATA[http://5.jianying0316.sinaapp.com/knyds/yanse2.htm]]></Url>\n
                  </item>\n";
                  
                  //添加第N个图文消息
                  $resultStr.="<item>\n
                  <Title><![CDATA[【灯泡终结者】能不能全点亮？就看你智商！]]></Title> \n
                  <Description><![CDATA[]]></Description>\n
                  <PicUrl><![CDATA[http://jianying0316-jianying0316.stor.sinaapp.com/games/zqddp/light103.png]]></PicUrl>\n
                  <Url><![CDATA[http://5.jianying0316.sinaapp.com/zqddp/zqddp.html?from=zqddp]]></Url>\n
                  </item>\n";
                  
                  //添加第N个图文消息
                  $resultStr.="<item>\n
                  <Title><![CDATA[【2048】英文优化版]]></Title> \n
                  <Description><![CDATA[]]></Description>\n
                  <PicUrl><![CDATA[http://lhz0725-lhz0725.stor.vipsinaapp.com/pic/2048_title.jpg]]></PicUrl>\n
                  <Url><![CDATA[http://5.jianying0316.sinaapp.com/2048/2048.html?from=2048]]></Url>\n
                  </item>\n";
                  
                  //添加第N个图文消息
                  $resultStr.="<item>\n
                  <Title><![CDATA[【2048】职场升级版]]></Title> \n
                  <Description><![CDATA[]]></Description>\n
                  <PicUrl><![CDATA[http://lhz0725-lhz0725.stor.sinaapp.com/pic/2048_title.jpg]]></PicUrl>\n
                  <Url><![CDATA[http://5.jianying0316.sinaapp.com/game2048zcsjb/game2048.html?from=game2048zcsjb]]></Url>\n
                  </item>\n";
                  
                  $resultStr.="</Articles>\n
                  <FuncFlag>0</FuncFlag>\n
                  </xml>";
                   
                  echo $resultStr;
                  exit;
                   
              }
                
                elseif( $form_Content == "游戏" )
              {
                  $msgType = "news";
                  $resultStr = "<xml>\n
                  <ToUserName><![CDATA[".$fromUsername."]]></ToUserName>\n
                  <FromUserName><![CDATA[".$toUsername."]]></FromUserName>\n
                  <CreateTime>".time()."</CreateTime>\n
                  <MsgType><![CDATA[news]]></MsgType>\n
                  <ArticleCount>8</ArticleCount>\n
                  <Articles>\n";
                   
                  //添加封面图文消息
                  $resultStr.="<item>\n
                  <Title><![CDATA[剪影游戏：只为您找寻“最”有趣的游戏！]]></Title> \n
                  <Description><![CDATA[]]></Description>\n
                  <PicUrl><![CDATA[http://jianying0316-jianying0316.stor.vipsinaapp.com/games/games_TITLE.jpg]]></PicUrl>\n
                  <Url><![CDATA[]]></Url>\n
                  </item>\n";
                  //游戏规则：选择其中一个方向去滑动，每滑动一次，所有的数字方块都会往滑动的方向靠拢外，系统也会在空白的地方乱数出现一个数字方块，相同数字的方况在靠拢、相撞时会相加。系统给予的数字方块不是2就是4，玩家要想办法在这小小的16格范围中凑出“2048”这个数字方块。
                 
                  //添加第N个图文消息
                  $resultStr.="<item>\n
                  <Title><![CDATA[【强迫症患者】你以为你能调平？]]></Title> \n
                  <Description><![CDATA[]]></Description>\n
                  <PicUrl><![CDATA[http://jianying0316-jianying0316.stor.sinaapp.com/games/qpzhz/icon.png]]></PicUrl>\n
                  <Url><![CDATA[http://5.jianying0316.sinaapp.com/qpzhz/qpzhz.html?from=qpzhz]]></Url>\n
                  </item>\n";
                  
                  //添加第N个图文消息
                  $resultStr.="<item>\n
                  <Title><![CDATA[【疯狂手指】根本停不下来！]]></Title> \n
                  <Description><![CDATA[]]></Description>\n
                  <PicUrl><![CDATA[http://jianying0316-jianying0316.stor.vipsinaapp.com/games/clicks/DGxrr.jpg]]></PicUrl>\n
                  <Url><![CDATA[http://5.jianying0316.sinaapp.com/clicks/index.html?from=clicks]]></Url>\n
                  </item>\n";
                  
                  //添加第N个图文消息
                  $resultStr.="<item>\n
                  <Title><![CDATA[【围住神经猫】玩过之后我变神经了！]]></Title> \n
                  <Description><![CDATA[]]></Description>\n
                  <PicUrl><![CDATA[http://jianying0316-jianying0316.stor.vipsinaapp.com/games/sjm/icon.png]]></PicUrl>\n
                  <Url><![CDATA[http://5.jianying0316.sinaapp.com/sjm/index.html?from=sjm]]></Url>\n
                  </item>\n";
                  
                  //添加第N个图文消息
                  $resultStr.="<item>\n
                  <Title><![CDATA[【看你有多色】是否是色魔？就看她了！]]></Title> \n
                  <Description><![CDATA[]]></Description>\n
                  <PicUrl><![CDATA[http://jianying0316-jianying0316.stor.sinaapp.com/games/knyds/wxicon.png]]></PicUrl>\n
                  <Url><![CDATA[http://5.jianying0316.sinaapp.com/knyds/yanse2.htm]]></Url>\n
                  </item>\n";
                  
                  //添加第N个图文消息
                  $resultStr.="<item>\n
                  <Title><![CDATA[【灯泡终结者】能不能全点亮？就看你智商！]]></Title> \n
                  <Description><![CDATA[]]></Description>\n
                  <PicUrl><![CDATA[http://jianying0316-jianying0316.stor.sinaapp.com/games/zqddp/light103.png]]></PicUrl>\n
                  <Url><![CDATA[http://5.jianying0316.sinaapp.com/zqddp/zqddp.html?from=zqddp]]></Url>\n
                  </item>\n";
                  
                  //添加第N个图文消息
                  $resultStr.="<item>\n
                  <Title><![CDATA[【2048】英文优化版]]></Title> \n
                  <Description><![CDATA[]]></Description>\n
                  <PicUrl><![CDATA[http://lhz0725-lhz0725.stor.vipsinaapp.com/pic/2048_title.jpg]]></PicUrl>\n
                  <Url><![CDATA[http://5.jianying0316.sinaapp.com/2048/2048.html?from=2048]]></Url>\n
                  </item>\n";
                  
                  //添加第N个图文消息
                  $resultStr.="<item>\n
                  <Title><![CDATA[【2048】职场升级版]]></Title> \n
                  <Description><![CDATA[]]></Description>\n
                  <PicUrl><![CDATA[http://lhz0725-lhz0725.stor.sinaapp.com/pic/2048_title.jpg]]></PicUrl>\n
                  <Url><![CDATA[http://5.jianying0316.sinaapp.com/game2048zcsjb/game2048.html?from=game2048zcsjb]]></Url>\n
                  </item>\n";
                  
                  $resultStr.="</Articles>\n
                  <FuncFlag>0</FuncFlag>\n
                  </xml>";
                   
                  echo $resultStr;
                  exit;
                   
              }
                
              //当回复“5”，发送内容。
              elseif( $form_Content == "5" )
              {
                 $msgType = "news";
                 $resultStr = "<xml>\n
                 <ToUserName><![CDATA[".$fromUsername."]]></ToUserName>\n
                 <FromUserName><![CDATA[".$toUsername."]]></FromUserName>\n
                 <CreateTime>".time()."</CreateTime>\n
                 <MsgType><![CDATA[news]]></MsgType>\n
                 <ArticleCount>1</ArticleCount>\n
                 <Articles>\n";
                   
                 //添加封面图文消息
                 $resultStr.="<item>\n
                 <Title><![CDATA[【福利】麦当劳4月电子优惠券：直接使用！]]></Title> \n
                 <Description><![CDATA[关于我们：剪影（ID:jianying-0316）您在北师珠每天必看的平台，无时无刻不为您着想，我们的宗旨：为您提供最新的咨询+便捷的服务！]]></Description>\n
                 <PicUrl><![CDATA[http://lhz0725-lhz0725.stor.sinaapp.com/pic/McDonald's_TITLE.jpg]]></PicUrl>\n
                 <Url><![CDATA[http://mp.weixin.qq.com/s?__biz=MzA4MzQ2ODQxNw==&mid=200054474&idx=1&sn=4a41613cab6b5c04f6bb6eb7ab6b9312#rd]]></Url>\n
                 </item>\n";
                   
                 $resultStr.="</Articles>\n
                 <FuncFlag>0</FuncFlag>\n
                 </xml>";
                   
                 echo $resultStr;
                 exit;
                   
              }
                elseif( $form_Content == "6" )
              {
                  $msgType = "text";
                  $contentStr = "※DIY·红点头像：\n※请点击☞☞<a href=\"http://5.jianying0316.sinaapp.com/make/index.php?openid=jianying-0316\">Touch Me</a>";
                  $resultStr = sprintf($textTpl, $fromUsername, $toUsername, time(), $msgType, $contentStr);
                  echo $resultStr;
                  
              }
                elseif( $form_Content == "头像" )
              {
                    $msgType = "news";
                 $resultStr = "<xml>\n
                 <ToUserName><![CDATA[".$fromUsername."]]></ToUserName>\n
                 <FromUserName><![CDATA[".$toUsername."]]></FromUserName>\n
                 <CreateTime>".time()."</CreateTime>\n
                 <MsgType><![CDATA[news]]></MsgType>\n
                 <ArticleCount>1</ArticleCount>\n
                 <Articles>\n";
                   
                 //添加封面图文消息
                 $resultStr.="<item>\n
                 <Title><![CDATA[【新】消息红点头像！超贱头像有木有！史上超强合集！附DIY教程！]]></Title> \n
                 <Description><![CDATA[最近一下爆火的坑好友头像，超调皮有木有？！不仅让那些强迫症患者屡屡中招，更让一群人与你主动聊天！剪影整合了30多张头像供大家下载！最后面更有惊喜哦！]]></Description>\n
                 <PicUrl><![CDATA[http://jianying0316-jianying0316.stor.sinaapp.com/normal/make/TITLE.jpg]]></PicUrl>\n
                 <Url><![CDATA[http://mp.weixin.qq.com/s?__biz=MzA4MzQ2ODQxNw==&mid=200316168&idx=1&sn=6d1763fa58c0ee8bcfc9cb017437c12a&scene=2&from=timeline&isappinstalled=0#rd]]></Url>\n
                 </item>\n";
                   
                 $resultStr.="</Articles>\n
                 <FuncFlag>0</FuncFlag>\n
                 </xml>";
                   
                 echo $resultStr;
                 exit;
                  
              }
                /* 
              elseif( $form_Content == "6" )
              {
                  $resultStr = sprintf($textTpl, $fromUsername, $toUsername, $time, "text", "该功能暂停使用，敬请期待！");
                  echo $resultStr;
                  exit;
                  
                  $msgType = "text";
                  $url = "http://apix.sinaapp.com/joke/?appkey=trialuser";
                  $output = file_get_contents($url);
                  $contentStr = json_decode($output, true);
                  $WWW = trim( $contentStr);
                  $out1 = rtrim( $WWW,'技术支持 方倍工作室' );
                  $outT = trim( $out1 );
                  $resultStr = sprintf($textTpl, $fromUsername, $toUsername, $time, $msgType, $outT."\n——“剪影” 技术支持");
                  echo $resultStr;
                  exit;*/
                  
                /*
                  $msgType = "news";
                 $resultStr = "<xml>\n
                 <ToUserName><![CDATA[".$fromUsername."]]></ToUserName>\n
                 <FromUserName><![CDATA[".$toUsername."]]></FromUserName>\n
                 <CreateTime>".time()."</CreateTime>\n
                 <MsgType><![CDATA[news]]></MsgType>\n
                 <ArticleCount>1</ArticleCount>\n
                 <Articles>\n";
                   
                 //添加封面图文消息
                 $resultStr.="<item>\n
                 <Title><![CDATA[“北师剪影精品店”]]></Title> \n
                 <Description><![CDATA[您的满意，我的放心。所有商品均为学生保证，质量第一，价格第二。欢迎入驻！服务学生，服务你我。]]></Description>\n
                 <PicUrl><![CDATA[http://lhz0725-lhz0725.stor.sinaapp.com/BSJYJPD/BSJYJPD_LOGO.jpg]]></PicUrl>\n
                 <Url><![CDATA[http://wd.koudai.com/?userid=161498251]]></Url>\n
                 </item>\n";
                   
                 $resultStr.="</Articles>\n
                 <FuncFlag>0</FuncFlag>\n
                 </xml>";
                   
                 echo $resultStr;
                 exit;
                 
              }*/
              elseif( $form_Content == "7")
              {
                  $msgType = "music";
                  $resultStr = "<xml>\n
                  <ToUserName><![CDATA[".$fromUsername."]]></ToUserName>\n
                  <FromUserName><![CDATA[".$toUsername."]]></FromUserName>\n
                  <CreateTime>".time()."</CreateTime>\n
                  <MsgType><![CDATA[music]]></MsgType>\n
                  <Music>";
                  
                   
                  //添加封面图文消息
                  $resultStr.="
                  <Title><![CDATA[还是要幸福]]></Title> \n
                  <Description><![CDATA[《一周推荐》\n送给曾青涩的你我]]></Description>\n
                  <MusicUrl><![CDATA[http://lhz0725-lhz0725.stor.sinaapp.com/music/Behappyanyway.mp3]]></MusicUrl>
                  <HQMusicUrl><![CDATA[http://lhz0725-lhz0725.stor.sinaapp.com/music/Behappyanyway.mp3]]></HQMusicUrl>
                  </Music>
                  <FuncFlag>0</FuncFlag>
                  </xml>";
                   
                  $resultStr.="</Articles>\n
                  <FuncFlag>0</FuncFlag>\n
                  </xml>";
                   
                  echo $resultStr;
                  exit;
                  /*
                  $msgType = "text";
                  $contentStr = "[玫瑰]感谢您的留言和建议！\n[玫瑰]我们会尽最大的努力,\n[玫瑰]完善我们的平台,\n[玫瑰]为您提供最好的服务！";
                  $resultStr = sprintf($textTpl, $fromUsername, $toUsername, time(), $msgType, $contentStr."\n[玫瑰]您还可以使用其他功能继续支持我们哦！\n[玫瑰]推荐【3】来这里分享你的事情吧！");
                  echo $resultStr;
                  exit;
                  */
              }
              //当回复“8”，发送最新电台音频文件。
              elseif( $form_Content == "8")
              {
                  $msgType = "text";
                  $contentStr = "请点击：\n<a href=\"http://www.xiami.com/song/1772582694#rd\">富瑶：心灵的旅行《在一起还是不在一起》 2014-05-30期</a>\n收听往期电台，请回复“电台”";
                  $resultStr = sprintf($textTpl, $fromUsername, $toUsername, time(), $msgType, $contentStr);
                  echo $resultStr;
                  
                  /*
                  $msgType = "music";
                  $resultStr = "<xml>\n
                  <ToUserName><![CDATA[".$fromUsername."]]></ToUserName>\n
                  <FromUserName><![CDATA[".$toUsername."]]></FromUserName>\n
                  <CreateTime>".time()."</CreateTime>\n
                  <MsgType><![CDATA[music]]></MsgType>\n
                  <Music>";
                  
                   
                 //添加封面图文消息
                 $resultStr.="
                 <Title><![CDATA[倾听那爱]]></Title> \n
                 <Description><![CDATA[主播：淘雪\n荔枝FM：318856]]></Description>\n
                 <MusicUrl><![CDATA[http://lhz0725-lhz0725.stor.sinaapp.com/music/20140328.mp3]]></MusicUrl>
                 <HQMusicUrl><![CDATA[http://lhz0725-lhz0725.stor.sinaapp.com/music/20140328.mp3]]></HQMusicUrl>
                 </Music>
                 <FuncFlag>0</FuncFlag>
                 </xml>";
                   
                 $resultStr.="</Articles>\n
                 <FuncFlag>0</FuncFlag>\n
                 </xml>";
                   
                 echo $resultStr2;
                 exit;
                 */
              }
                elseif( $form_Content == "电台")
                {
                    $msgType = "text";
$contentStr = "【心灵旅行】主播：富瑶
★2014-05-30期：
“在一起、还是不在一起”
<a href=\"http://www.xiami.com/song/1772582694#rd\">“Touch Me”</a> ";
                    $resultStr = sprintf($textTpl, $fromUsername, $toUsername, time(), $msgType, $contentStr);
                    echo $resultStr;
                }
                
                elseif( $form_Content == "电台淘雪")
                {
                    $msgType = "text";
$contentStr = "【倾听那爱】主播：淘雪
★2014-03-28期：
“当、那天已不在”
<a href=\"http://nj.lizhi.fm/m/IVVr2a_IOS#rd\">“Touch Me”</a> 
★2014-04-04期：
“听、那颗心在说”
<a href=\"http://nj.lizhi.fm/m/YRfu2a_IOS#rd\">“Touch Me”</a>
★2014-04-12期：
“你若安好 便是晴天”
<a href=\"http://nj.lizhi.fm/m/yMfyyq_IOS#rd\">“Touch Me”</a>
★2014-04-18期：
“致青春”
<a href=\"http://nj.lizhi.fm/m/imEvm2_IOS#rd\">“Touch Me”</a>
★2014-04-25期：
“当初说要等到你的人”
<a href=\"http://nj.lizhi.fm/m/fYnQFn_IOS#rd\">“Touch Me”</a>
【听、声】主播：影子
★2014-04-11期：
“遇见，分散”
<a href=\"http://nj.lizhi.fm/m/Q7fiyu_AND#rd\">“Touch Me”</a> ";
                    $resultStr = sprintf($textTpl, $fromUsername, $toUsername, time(), $msgType, $contentStr);
                    echo $resultStr;
                }
              
                //当回复"9"，发送历史推送。
              elseif( $form_Content == "9")
              {
                  $msgType = "news";
                  $resultStr = "<xml>\n
                  <ToUserName><![CDATA[".$fromUsername."]]></ToUserName>\n
                  <FromUserName><![CDATA[".$toUsername."]]></FromUserName>\n
                  <CreateTime>".time()."</CreateTime>\n
                  <MsgType><![CDATA[news]]></MsgType>\n
                  <ArticleCount>1</ArticleCount>\n
                  <Articles>\n";
                   
                  //添加封面图文消息
                  $resultStr.="<item>\n
                  <Title><![CDATA[【9】北师大：请假，考勤，课表等等]]></Title> \n
                  <Description><![CDATA[【北师大教务系统】\n查考勤，查课表，想请假？查通讯录？来这里，输入你的教务系统的学号和密码，即可马上查询！（PS：请假以后方便喽！）]]></Description>\n
                  <PicUrl><![CDATA[http://lhz0725-lhz0725.stor.sinaapp.com/pic/TMS_LOGO4.jpg]]></PicUrl>\n
                  <Url><![CDATA[http://tms.bnuz.edu.cn/tms/login/auth]]></Url>\n
                  </item>\n";
                    
                  $resultStr.="</Articles>\n
                  <FuncFlag>0</FuncFlag>\n
                  </xml>";
                   
                  echo $resultStr;
                  exit;
              }
                
                //当回复"历史"，发送历史推送。
              elseif( $form_Content == "历史")
              {
                  $msgType = "news";
                  $resultStr = "<xml>\n
                  <ToUserName><![CDATA[".$fromUsername."]]></ToUserName>\n
                  <FromUserName><![CDATA[".$toUsername."]]></FromUserName>\n
                  <CreateTime>".time()."</CreateTime>\n
                  <MsgType><![CDATA[news]]></MsgType>\n
                  <ArticleCount>1</ArticleCount>\n
                  <Articles>\n";
                   
                  //添加封面图文消息
                  $resultStr.="<item>\n
                  <Title><![CDATA[【历史】查看我们的历史推送“请点我”]]></Title> \n
                  <Description><![CDATA[关于我们：剪影（ID:jianying-0316）您在北师珠每天必看的平台，无时无刻不为您着想，我们的宗旨：为您提供最新的咨询+便捷的服务！]]></Description>\n
                  <PicUrl><![CDATA[http://lhz0725-lhz0725.stor.sinaapp.com/pic/Welcome-2014.03.16.jpg]]></PicUrl>\n
                  <Url><![CDATA[http://mp.weixin.qq.com/mp/getmasssendmsg?__biz=MzA4MzQ2ODQxNw==#wechat_webview_type=1&wechat_redirect]]></Url>\n
                  </item>\n";
                    
                  $resultStr.="</Articles>\n
                  <FuncFlag>0</FuncFlag>\n
                  </xml>";
                   
                  echo $resultStr;
                  exit;
              }
                //自主发展课堂页面，功能“30”
                elseif( $form_Content == "30" )
              {
                    $msgType = "news";
                    $resultStr = "<xml>\n
                    <ToUserName><![CDATA[".$fromUsername."]]></ToUserName>\n
                    <FromUserName><![CDATA[".$toUsername."]]></FromUserName>\n
                    <CreateTime>".time()."</CreateTime>\n
                    <MsgType><![CDATA[news]]></MsgType>\n
                    <ArticleCount>7</ArticleCount>\n
                    <Articles>\n";
                  
                    //添加封面图文消息
                    $resultStr.="<item>\n
                    <Title><![CDATA[【自主发展课堂】课程介绍及公告]]></Title> \n
                    <Description><![CDATA[]]></Description>\n
                    <PicUrl><![CDATA[http://lhz0725-lhz0725.stor.sinaapp.com/ZZFZKT_pic/ZZFZKT_LOGO2.jpg]]></PicUrl>\n
                    <Url><![CDATA[http://mp.weixin.qq.com/s?__biz=MzA4MzQ2ODQxNw==&mid=200081242&idx=1&sn=64a5c1a1b3e9c63192dd9981624f9273#rd]]></Url>\n
                    </item>\n";
                  
                    //添加第一个图文消息
                    $resultStr.="<item>\n
                    <Title><![CDATA[1.《爵士舞》]]></Title> \n
                    <Description><![CDATA[]]></Description>\n
                    <PicUrl><![CDATA[http://lhz0725-lhz0725.stor.sinaapp.com/ZZFZKT_pic/JSW_YCX.jpg]]></PicUrl>\n
                    <Url><![CDATA[http://mp.weixin.qq.com/s?__biz=MzA4MzQ2ODQxNw==&mid=200081242&idx=2&sn=0c3918c3699094879708098f706b4e20#rd]]></Url>\n
                    </item>\n";
                  
                    //添加第二个图文消息
                    $resultStr.="<item>\n
                    <Title><![CDATA[2.《形体舞蹈》]]></Title> \n
                    <Description><![CDATA[]]></Description>\n
                    <PicUrl><![CDATA[http://lhz0725-lhz0725.stor.sinaapp.com/ZZFZKT_pic/JSW_YCX.jpg]]></PicUrl>\n
                    <Url><![CDATA[http://mp.weixin.qq.com/s?__biz=MzA4MzQ2ODQxNw==&mid=200081242&idx=3&sn=7be8a89e9b62a2eeb8563b8b70f0daa2#rd]]></Url>\n
                    </item>\n";
                    
                    //添加第三个图文消息
                    $resultStr.="<item>\n
                    <Title><![CDATA[3.《电影公High课》]]></Title> \n
                    <Description><![CDATA[]]></Description>\n
                    <PicUrl><![CDATA[http://lhz0725-lhz0725.stor.sinaapp.com/ZZFZKT_pic/DYGHK_LOGO.jpg]]></PicUrl>\n
                    <Url><![CDATA[http://mp.weixin.qq.com/s?__biz=MzA4MzQ2ODQxNw==&mid=200081242&idx=4&sn=144372f6aacd0c4b1388f1750a85abf3#rd]]></Url>\n
                    </item>\n";
                    
                    //添加第四个图文消息
                    $resultStr.="<item>\n
                    <Title><![CDATA[4.《平面设计基础与探索者创艺分享》]]></Title> \n
                    <Description><![CDATA[]]></Description>\n
                    <PicUrl><![CDATA[http://lhz0725-lhz0725.stor.sinaapp.com/ZZFZKT_pic/PMSJ_LOGO.jpg]]></PicUrl>\n
                    <Url><![CDATA[http://mp.weixin.qq.com/s?__biz=MzA4MzQ2ODQxNw==&mid=200081242&idx=5&sn=e2fd6d226f186841ae92521bdf5cd9f1#rd]]></Url>\n
                    </item>\n";
                    
                    //添加第五个图文消息
                    $resultStr.="<item>\n
                    <Title><![CDATA[5.《埃及东方舞》]]></Title> \n
                    <Description><![CDATA[]]></Description>\n
                    <PicUrl><![CDATA[http://lhz0725-lhz0725.stor.sinaapp.com/ZZFZKT_pic/AJDFW_LOGO.jpg]]></PicUrl>\n
                    <Url><![CDATA[http://mp.weixin.qq.com/s?__biz=MzA4MzQ2ODQxNw==&mid=200081242&idx=6&sn=c9740a0711b3f6c4c4ea99f179624f5b#rd]]></Url>\n
                    </item>\n";
                    
                    //添加第六个图文消息
                    $resultStr.="<item>\n
                    <Title><![CDATA[6.《瑜伽基础》]]></Title> \n
                    <Description><![CDATA[]]></Description>\n
                    <PicUrl><![CDATA[http://lhz0725-lhz0725.stor.sinaapp.com/ZZFZKT_pic/YJJC_LOGO.jpg]]></PicUrl>\n
                    <Url><![CDATA[http://mp.weixin.qq.com/s?__biz=MzA4MzQ2ODQxNw==&mid=200081242&idx=7&sn=8f6eeb30ce5d2da81abcd9792bdf926d#rd]]></Url>\n
                    </item>\n";
                    
                    $resultStr.="</Articles>\n
                    <FuncFlag>0</FuncFlag>\n
                    </xml>";
                   
                    echo $resultStr;
                    exit;
                }
                //微店通道设计
                elseif( $form_Content == "JY"|| $form_Content =="jy")
                {
                  $msgType = "news";
                  $resultStr = "<xml>\n
                  <ToUserName><![CDATA[".$fromUsername."]]></ToUserName>\n
                  <FromUserName><![CDATA[".$toUsername."]]></FromUserName>\n
                  <CreateTime>".time()."</CreateTime>\n
                  <MsgType><![CDATA[news]]></MsgType>\n
                  <ArticleCount>1</ArticleCount>\n
                  <Articles>\n";
                   
                  //添加封面图文消息
                  $resultStr.="<item>\n
                  <Title><![CDATA[【开学季快乐】北师剪影精品店]]></Title> \n
                  <Description><![CDATA[敢拼价格，敢拼质量！学生提供的，只有精品！如果想加入北师剪影格子铺，请联系微信：497584772]]></Description>\n
                  <PicUrl><![CDATA[http://lhz0725-lhz0725.stor.sinaapp.com/WD/LOGO.jpg]]></PicUrl>\n
                  <Url><![CDATA[http://wd.koudai.com/s/161498251?wfr=c]]></Url>\n
                  </item>\n";
                    
                  $resultStr.="</Articles>\n
                  <FuncFlag>0</FuncFlag>\n
                  </xml>";
                   
                  echo $resultStr;
                  exit;
                }
                //树洞开发
                elseif( $form_Content =="树洞" )
                    {
$NNNN="@北师剪影 树洞查看与发布
1.点击：“<a href=\"http://fabuduan.com/mobile/weibo#rd\">Touch Me</a>”
2.公众微博昵称输入：“北师剪影”
3.选择下方“用微博账号登陆”并填上自己微博即可！
PS：电脑发布端，请登录网页：http://fabuduan.com/jianying-0316";
                        $resultStr = sprintf($textTpl, $fromUsername, $toUsername, $time, "text", "$NNNN");
                        echo $resultStr;
                        exit;
                    }
                //树洞功能：
                elseif( strpos($x1,"发树洞") > 0)
                {
                    // $msgType = "text";
                    // $contentStr = "请输入您想发布的树洞：";
                    // $resultStr = sprintf($textTpl, $fromUsername, $toUsername, time(), $msgType, $contentStr);
                    //  echo $resultStr;
                    $form_Content2 = ltrim($form_Content,"发树洞");
                    $strlen = strlen($form_Content2);
                    if($strlen > 22)
                    {
                    include('weibo/config.php');
                    include('weibo/saetv2.ex.class.php');
                    $c = new SaeTClientV2(WB_AKEY, WB_SKEY,'2.00zYpoYFL9IqYB664a097c1bo8PWLC');
                    $weiboResut = $c->update($form_Content2."\n【微信发布】");
                    //通知发布成功！
                    $msgType = "text";
                        
                    //$contentStr = "<a href=\"http://test0725.sinaapp.com/test/test.html#rd\">点我关注剪影</a>微博发布成功！";
                        //手机版微博地址：http://weibo.cn/jianying0316 ； 手机版华丽微博地址：http://m.weibo.cn/u/5095174197；
                    $contentStr = "成功发布至新浪微博“@北师剪影”——\n文字版：<a href=\"http://weibo.cn/jianying0316\">@北师剪影</a> \n--------------\n触屏版：<a href=\"http://m.weibo.cn/u/5095174197\">@北师剪影</a>";
                    //<a href=\"http://weibo.cn/jianying0316\">@北师剪影</a>
                    $resultStr = sprintf($textTpl, $fromUsername, $toUsername, time(), $msgType, $contentStr);
                    echo $resultStr;
                    }
                    else
                    {
                        $msgType = "text";
                        $contentStr = "您输入的消息太短！请至少输入8个字。";
                        $resultStr = sprintf($textTpl, $fromUsername, $toUsername, time(), $msgType, $contentStr);
                        echo $resultStr;
                    }
                    //树洞发布与查询 介绍：

                }
                //天气预报功能；
                elseif( strpos($x1,"天气") > 0)
                {
                    $result = $this->Weather($postObj);
                    echo $result;
                }
                
                elseif( $form_Content == "四六级" )
              {
                  $msgType = "text";
                  $contentStr = "※英语四、六级查询：\n※请点击☞☞<a href=\"http://9.lhz725.sinaapp.com/cet4/\">Touch Me</a>";
                  $resultStr = sprintf($textTpl, $fromUsername, $toUsername, time(), $msgType, $contentStr);
                  echo $resultStr;
                  
              }
                //
                elseif( $form_Content == "世界杯" )
              {
                    $msgType = "news";
                    $resultStr = "<xml>\n
                    <ToUserName><![CDATA[".$fromUsername."]]></ToUserName>\n
                    <FromUserName><![CDATA[".$toUsername."]]></FromUserName>\n
                    <CreateTime>".time()."</CreateTime>\n
                    <MsgType><![CDATA[news]]></MsgType>\n
                    <ArticleCount>6</ArticleCount>\n
                    <Articles>\n";
                  
                    //添加封面图文消息
                    $resultStr.="<item>\n
                    <Title><![CDATA[2014年巴西世界杯]]></Title> \n
                    <Description><![CDATA[]]></Description>\n
                    <PicUrl><![CDATA[http://lhz0725-lhz0725.stor.sinaapp.com/2014-Brasil/0_title.jpg]]></PicUrl>\n
                    <Url><![CDATA[http://mp.weixin.qq.com/s?__biz=MzA4MzQ2ODQxNw==&mid=200164575&idx=1&sn=b94e488d9825ad97c9725f83740cfe15#rd]]></Url>\n
                    </item>\n";
                  
                    //添加第一个图文消息
                    $resultStr.="<item>\n
                    <Title><![CDATA[【时间查询】\n点击进入世界杯时间查询]]></Title> \n
                    <Description><![CDATA[]]></Description>\n
                    <PicUrl><![CDATA[http://lhz0725-lhz0725.stor.sinaapp.com/2014-Brasil/01_title.jpg]]></PicUrl>\n
                    <Url><![CDATA[http://sports1.sina.cn/worldcup/timeline?vt=4#rd]]></Url>\n
                    </item>\n";
                  
                    //添加第二个图文消息
                    $resultStr.="<item>\n
                    <Title><![CDATA[【小组赛程】\n点击查看世界杯小组赛程]]></Title> \n
                    <Description><![CDATA[]]></Description>\n
                    <PicUrl><![CDATA[http://lhz0725-lhz0725.stor.sinaapp.com/2014-Brasil/02_title.jpg]]></PicUrl>\n
                    <Url><![CDATA[http://dp.sina.cn/dpool/sports/worldcup/match_group.php?vt=4#rd]]></Url>\n
                    </item>\n";
                    
                    //添加第三个图文消息
                    $resultStr.="<item>\n
                    <Title><![CDATA[【淘汰赛程】\n点击查看世界杯淘汰赛程]]></Title> \n
                    <Description><![CDATA[]]></Description>\n
                    <PicUrl><![CDATA[http://lhz0725-lhz0725.stor.sinaapp.com/2014-Brasil/03_title.jpg]]></PicUrl>\n
                    <Url><![CDATA[http://dp.sina.cn/dpool/sports/worldcup/match_obsolete.php?vt=4#rd]]></Url>\n
                    </item>\n";
                    
                    //添加第四个图文消息
                    $resultStr.="<item>\n
                    <Title><![CDATA[【电视转播】\n点击查看世界杯电视转播]]></Title> \n
                    <Description><![CDATA[]]></Description>\n
                    <PicUrl><![CDATA[http://lhz0725-lhz0725.stor.sinaapp.com/2014-Brasil/04_title.jpg]]></PicUrl>\n
                    <Url><![CDATA[http://dp.sina.cn/dpool/sports/worldcup/match_tv.php?vt=4#rd]]></Url>\n
                    </item>\n";
                    
                    //添加第五个图文消息
                    $resultStr.="<item>\n
                    <Title><![CDATA[【更多信息】\n点击查看世界杯更多信息]]></Title> \n
                    <Description><![CDATA[]]></Description>\n
                    <PicUrl><![CDATA[http://lhz0725-lhz0725.stor.sinaapp.com/2014-Brasil/05_title.jpg]]></PicUrl>\n
                    <Url><![CDATA[http://2014.sina.cn/#rd]]></Url>\n
                    </item>\n";
                    
                    $resultStr.="</Articles>\n
                    <FuncFlag>0</FuncFlag>\n
                    </xml>";
                   
                    echo $resultStr;
                    exit;
                }
                //2014级迎新专栏
                elseif( $form_Content == "2014" )
              {
                    $msgType = "news";
                    $resultStr = "<xml>\n
                    <ToUserName><![CDATA[".$fromUsername."]]></ToUserName>\n
                    <FromUserName><![CDATA[".$toUsername."]]></FromUserName>\n
                    <CreateTime>".time()."</CreateTime>\n
                    <MsgType><![CDATA[news]]></MsgType>\n
                    <ArticleCount>8</ArticleCount>\n
                    <Articles>\n";
                  
                    //添加封面图文消息
                    $resultStr.="<item>\n
                    <Title><![CDATA[【北师大】2014级迎新专栏]]></Title> \n
                    <Description><![CDATA[]]></Description>\n
                    <PicUrl><![CDATA[http://lhz0725-lhz0725.stor.sinaapp.com/2014-YXZL/2014TITLE.jpg]]></PicUrl>\n
                    <Url><![CDATA[]]></Url>\n
                    </item>\n";
                  
                    //添加第一个图文消息
                    $resultStr.="<item>\n
                    <Title><![CDATA[【北师大】2014级新生入学流程]]></Title> \n
                    <Description><![CDATA[]]></Description>\n
                    <PicUrl><![CDATA[http://lhz0725-lhz0725.stor.sinaapp.com/2014-YXZL/2014RXLC.jpg]]></PicUrl>\n
                    <Url><![CDATA[http://mp.weixin.qq.com/s?__biz=MzA4MzQ2ODQxNw==&mid=200295320&idx=1&sn=af90841aa378ee6177509a0682d45edf#rd]]></Url>\n
                    </item>\n";
                  
                    //添加第二个图文消息
                    $resultStr.="<item>\n
                    <Title><![CDATA[【北师大】2014级新生报到时间]]></Title> \n
                    <Description><![CDATA[]]></Description>\n
                    <PicUrl><![CDATA[http://lhz0725-lhz0725.stor.sinaapp.com/2014-YXZL/2014BDSJ.jpg]]></PicUrl>\n
                    <Url><![CDATA[http://mp.weixin.qq.com/s?__biz=MzA4MzQ2ODQxNw==&mid=200295320&idx=2&sn=90b8f838cd520ddf6da5d77235d89e92#rd]]></Url>\n
                    </item>\n";
                    
                    //添加第三个图文消息
                    $resultStr.="<item>\n
                    <Title><![CDATA[【北师大】新生入学注意事项特别提示]]></Title> \n
                    <Description><![CDATA[]]></Description>\n
                    <PicUrl><![CDATA[http://lhz0725-lhz0725.stor.sinaapp.com/2014-YXZL/2014XSRXZYSX.jpg]]></PicUrl>\n
                    <Url><![CDATA[http://mp.weixin.qq.com/s?__biz=MzA4MzQ2ODQxNw==&mid=200295320&idx=3&sn=78a9dfd06be0affdce6422e18a309533#rd]]></Url>\n
                    </item>\n";
                    
                    //添加第四个图文消息
                    $resultStr.="<item>\n
                    <Title><![CDATA[【北师大】各部门联系电话]]></Title> \n
                    <Description><![CDATA[]]></Description>\n
                    <PicUrl><![CDATA[http://lhz0725-lhz0725.stor.sinaapp.com/2014-YXZL/2014Tel.jpg]]></PicUrl>\n
                    <Url><![CDATA[http://mp.weixin.qq.com/s?__biz=MzA4MzQ2ODQxNw==&mid=200295320&idx=4&sn=da3068a1b11bc5d315b9b878301b269e#rd]]></Url>\n
                    </item>\n";
                    
                    //添加第五个图文消息
                    $resultStr.="<item>\n
                    <Title><![CDATA[【北师大】生活环境]]></Title> \n
                    <Description><![CDATA[]]></Description>\n
                    <PicUrl><![CDATA[http://lhz0725-lhz0725.stor.sinaapp.com/2014-YXZL/2014SHHJ.jpg]]></PicUrl>\n
                    <Url><![CDATA[http://mp.weixin.qq.com/s?__biz=MzA4MzQ2ODQxNw==&mid=200295320&idx=5&sn=b84f90fae249e9d6dd18884841b492fe#rd]]></Url>\n
                    </item>\n";
                    
                    //添加第五个图文消息
                    $resultStr.="<item>\n
                    <Title><![CDATA[【北师大】户口迁移公告]]></Title> \n
                    <Description><![CDATA[]]></Description>\n
                    <PicUrl><![CDATA[http://lhz0725-lhz0725.stor.sinaapp.com/2014-YXZL/2014HKQY.jpg]]></PicUrl>\n
                    <Url><![CDATA[http://mp.weixin.qq.com/s?__biz=MzA4MzQ2ODQxNw==&mid=200295320&idx=6&sn=dbe7efe661cd545fd8efb3a00f58ea94#rd]]></Url>\n
                    </item>\n";
                    
                    //添加第五个图文消息
                    $resultStr.="<item>\n
                    <Title><![CDATA[【北师大】接站指引]]></Title> \n
                    <Description><![CDATA[]]></Description>\n
                    <PicUrl><![CDATA[http://lhz0725-lhz0725.stor.sinaapp.com/2014-YXZL/2014JZZY.jpg]]></PicUrl>\n
                    <Url><![CDATA[http://mp.weixin.qq.com/s?__biz=MzA4MzQ2ODQxNw==&mid=200295320&idx=7&sn=dacb6f6c36a2994c959ce32f25696438#rd]]></Url>\n
                    </item>\n";
                    
                    $resultStr.="</Articles>\n
                    <FuncFlag>0</FuncFlag>\n
                    </xml>";
                   
                    echo $resultStr;
                    exit;
                }
                
              //---------------------------------------------------------分割线---------------------------------------------------------------
              //如果发送内容不是空白回复用户图文菜单消息
 	          elseif($form_Content == "菜单" )
              {
                  //图文回复文字
                  $msgType = "news";
                  $resultStr = "<xml>\n
                  <ToUserName><![CDATA[".$fromUsername."]]></ToUserName>\n
                  <FromUserName><![CDATA[".$toUsername."]]></FromUserName>\n
                  <CreateTime>".time()."</CreateTime>\n
                  <MsgType><![CDATA[news]]></MsgType>\n
                  <ArticleCount>6</ArticleCount>\n
                  <Articles>\n";
                
                  //添加封面图文消息
                  $resultStr.="<item>\n
                  <Title><![CDATA[【菜单列表】首先感谢您对剪影的支持！]]></Title> \n
                  <Description><![CDATA[]]></Description>\n
                  <PicUrl><![CDATA[http://lhz0725-lhz0725.stor.sinaapp.com/pic/CD_TITLE.jpg]]></PicUrl>\n
                  <Url><![CDATA[]]></Url>\n
                  </item>\n";
                
                  //添加1条列表图文消息
$N1="请输入【  】内的指令，使用相应功能：
【2014】2014级北师迎新专栏！
【1】北师大珠海分校 校历
【2】形势与政策：本周课程表与查询
【3】微社区：欲言又止？发吧！
【4】游戏：只分享最有趣的！
【5】福利：麦当劳本月电子优惠券
【6】DIY·红点萌头像！
【7】音乐：一周推荐，女神翻唱
【8】电台：2014-05-30期
【9】北师大：请假，考勤，课表查询！
【30】自主发展课堂：介绍与公告";
/*
★★任意回复与“小豆”罗伯特聊天★★
★★功能：笑话 翻译 天气 人品 等等★★
（教他说话，句式：问XXXX答XXXX）
*/
                
                  $resultStr.="<item>\n
                  <Title><![CDATA[$N1]]></Title>
                  <Description><![CDATA[]]></Description>\n
                  <PicUrl><![CDATA[]]></PicUrl>\n
                  <Url><![CDATA[]]></Url>\n
                  </item>\n";
                  
$N2="【四六级】全国英语四六级成绩查询"; 
                  
                  $resultStr.="<item>\n
                  <Title><![CDATA[$N2]]></Title>
                  <Description><![CDATA[]]></Description>\n
                  <PicUrl><![CDATA[]]></PicUrl>\n
                  <Url><![CDATA[http://9.lhz725.sinaapp.com/cet4/]]></Url>\n
                  </item>\n";
                  
$N3="【电台】查询往期电台
【电台淘雪】淘雪往期电台"; 
                  
                  $resultStr.="<item>\n
                  <Title><![CDATA[$N3]]></Title>
                  <Description><![CDATA[]]></Description>\n
                  <PicUrl><![CDATA[]]></PicUrl>\n
                  <Url><![CDATA[]]></Url>\n
                  </item>\n";
                  
$N4="【树洞】树洞查询与发布（详细模式）
【发树洞+(空格)+内容】树洞至@北师剪影（只发“文字”的最快方式！）"; 
                  
                  $resultStr.="<item>\n
                  <Title><![CDATA[$N4]]></Title>
                  <Description><![CDATA[]]></Description>\n
                  <PicUrl><![CDATA[]]></PicUrl>\n
                  <Url><![CDATA[]]></Url>\n
                  </item>\n";
                  
                  /*
                  $N5="┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓\n┣【JY】北师剪影精品店：开学特卖会 ┫\n┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛"; 
                  */
                  
                  $N5="【JY】北师剪影精品店";
                  
                  $resultStr.="<item>\n
                  <Title><![CDATA[$N5]]></Title>
                  <Description><![CDATA[]]></Description>\n
                  <PicUrl><![CDATA[]]></PicUrl>\n
                  <Url><![CDATA[http://wd.koudai.com/s/161498251?wfr=c]]></Url>\n
                  </item>\n";
                
                  $resultStr.="</Articles>\n
                  <FuncFlag>0</FuncFlag>\n
                  </xml>";
                
                  echo $resultStr;
                  exit;                                   
            }
            //---------------------------------------------------------分割线---------------------------------------------------------------
                elseif(!empty($form_Content))
                {
                    $msgType = "text";
                    
                    $resultStr = sprintf($textTpl, $fromUsername, $toUsername, $time, $msgType, $contentStr."[玫瑰]查看 “剪影” 功能列表\n[玫瑰]请回复 ☞☞ “ 菜单 ”");
                    echo $resultStr;
                    exit;
                    
                 /*
                    $msgType = "text";
                    //$contentStr = "Welcome to wechat world!";
                    $contentStr = urldecode(getxiaodou($form_Content));
                    //$contentStr1 = "\n——查看 “剪影” 功能列表\n——请回复 ☞☞☞☞ “ 菜单 ”\n——目前小豆支持：翻译 百科 笑话 计算器 天气 歌词 人品 快递查询等100多项功能等待你发现哦！");
                    $resultStr = sprintf($textTpl, $fromUsername, $toUsername, $time, $msgType, $contentStr."\n——查看 “剪影” 功能列表\n——请回复 ☞☞ “ 菜单 ”");
                    //——目前小豆支持：翻译 百科 笑话 计算器 天气 歌词 人品 快递查询等100多项功能等待你发现哦！
                	echo $resultStr;
                    exit;
                 */
                    
                }
            //否则提示输入
            else
            {
                $msgType = "text";
                $resultStr = sprintf($textTpl, $fromUsername, $toUsername, $time, $msgType, "请输入些什么吧……");
                echo $resultStr;
                exit;                                   
            }
          }
            if($form_MsgType=="event")
            {
            //获取事件类型
            $form_Event = $postObj->Event;
            //订阅事件
            if($form_Event=="subscribe")
            {
                //回复欢迎图文菜单
                $resultStr="<xml>\n
                <ToUserName><![CDATA[".$fromUsername."]]></ToUserName>\n
                <FromUserName><![CDATA[".$toUsername."]]></FromUserName>\n
                <CreateTime>".time()."</CreateTime>\n
                <MsgType><![CDATA[news]]></MsgType>\n
                <ArticleCount>3</ArticleCount>\n
                <Articles>\n";
              
                /*
                //添加封面图文消息
                $resultStr.="<item>\n
                <Title><![CDATA[※ 感谢您对“剪影”的关注与支持！]]></Title> \n
                <Description><![CDATA[]]></Description>\n
                <PicUrl><![CDATA[http://lhz0725-lhz0725.stor.sinaapp.com/pic/Welcome-2014.03.16.jpg]]></PicUrl>\n
                <Url><![CDATA[http://mp.weixin.qq.com/s?__biz=MzA4MzQ2ODQxNw==&mid=200047825&idx=1&sn=7b671ec11d9916e7366c4db92afcf90e#rd]]></Url>\n
                </item>\n";
                */
                
                //添加封面图文消息
                $resultStr.="<item>\n
                <Title><![CDATA[==> 点击进入：北师剪影开学特卖会]]></Title> \n
                <Description><![CDATA[]]></Description>\n
                <PicUrl><![CDATA[http://lhz0725-lhz0725.stor.sinaapp.com/WD/LOGO.jpg]]></PicUrl>\n
                <Url><![CDATA[http://wd.koudai.com/s/161498251?wfr=c]]></Url>\n
                </item>\n";
              
                /*      //添加N条列表图文消息
                $resultStr.="<item>\n
                <Title><![CDATA[“剪影”LOGO的含义：]]></Title> \n
                <Description><![CDATA[]]></Description>\n
                <PicUrl><![CDATA[http://lhz0725-lhz0725.stor.sinaapp.com/pic/LOGO.jpg]]></PicUrl>\n
                <Url><![CDATA[http://mp.weixin.qq.com/s?__biz=MzA4MzQ2ODQxNw==&mid=200047825&idx=2&sn=dd53a0fef834892a2a3a04efefc4bf75#rd]]></Url>\n
                </item>\n";
                */
$NNNN="请输入【  】内的指令，使用相应功能：
【1】北师大珠海分校 校历
【2】形势与政策：本周课程表与查询
【3】微社区：欲言又止？发吧！
【4】游戏：只分享最有趣的！
【5】福利：麦当劳本月电子优惠券
【6】DIY·红点萌头像！
【7】音乐：一周推荐，女神翻唱
【8】电台：2014-05-30期
【9】北师大：请假，考勤，课表查询！
【30】自主发展课堂：介绍与公告
【2014】2014级北师迎新专栏
【四六级】全国英语四六级成绩查询
【电台】查询往期电台
【树洞】树洞查询与发布（详细模式）
【发树洞+(空格)+内容】树洞至@北师剪影（只发“文字”的最快方式！）";
                
                //菜单列表
                $resultStr.="<item>\n
                <Title><![CDATA[$NNNN]]></Title> \n
                <Description><![CDATA[]]></Description>\n
                <PicUrl><![CDATA[]]></PicUrl>\n
                <Url><![CDATA[]]></Url>\n
                </item>\n";
             
$NNNN2="【JY】北师剪影精品店";                
                //菜单列表2
                $resultStr.="<item>\n
                <Title><![CDATA[$NNNN2]]></Title> \n
                <Description><![CDATA[]]></Description>\n
                <PicUrl><![CDATA[]]></PicUrl>\n
                <Url><![CDATA[http://wd.koudai.com/s/161498251?wfr=c]]></Url>\n
                </item>\n";
                
              /*
                $resultStr.="<item>\n
                <Title><![CDATA[关注我们，你能看到什么]]></Title> \n
                <Description><![CDATA[]]></Description>\n
                <PicUrl><![CDATA[http://lhz0725-lhz0725.stor.sinaapp.com/pic/Wenhao.jpg]]></PicUrl>\n
                <Url><![CDATA[http://mp.weixin.qq.com/s?__biz=MzA4MzQ2ODQxNw==&mid=200047825&idx=3&sn=5758cc81784fc8f2d8d042f277b5e91e#rd]]></Url>\n
                </item>\n";
              
               
                $resultStr.="<item>\n
                <Title><![CDATA[“剪影”菜单功能介绍：]]></Title> \n
                <Description><![CDATA[]]></Description>\n
                <PicUrl><![CDATA[http://lhz0725-lhz0725.stor.sinaapp.com/pic/The%20exclamation%20mark.jpg]]></PicUrl>\n
                <Url><![CDATA[http://mp.weixin.qq.com/s?__biz=MzA4MzQ2ODQxNw==&mid=200056336&idx=1&sn=148e0bf8698ca8bc44da4625e3f35aa3#rd]]></Url>\n
                </item>\n";
              */
                /*
              $resultStr.="<item>\n
              <Title><![CDATA[关于老贼]]></Title> \n
              <Description><![CDATA[]]></Description>\n
              <PicUrl><![CDATA[http://weixincourse-weixincourse.stor.sinaapp.com/lz.jpg]]></PicUrl>\n
              <Url><![CDATA[http://mp.weixin.qq.com/mp/appmsg/show?__biz=MjM5MTcyMDAyMQ==&appmsgid=10000054&itemidx=1]]></Url>\n
              </item>\n";
              
              $resultStr.="<item>\n
              <Title><![CDATA[联系老贼]]></Title> \n
              <Description><![CDATA[]]></Description>\n
              <PicUrl><![CDATA[http://weixincourse-weixincourse.stor.sinaapp.com/Snip20130403_19.jpg]]></PicUrl>\n
              <Url><![CDATA[http://mp.weixin.qq.com/mp/appmsg/show?__biz=MjM5MTcyMDAyMQ==&appmsgid=10000054&itemidx=1]]></Url>\n
              </item>\n";
              */
              
              $resultStr.="</Articles>\n
              <FuncFlag>0</FuncFlag>\n
              </xml>";
                        
              /*
              //回复欢迎文字消息
              $msgType = "text";
              $contentStr = "感谢您关注公众平台教程！[愉快]\n\n想学公众平台使用的朋友请输入“跟我学”！[玫瑰]";
              $resultStr = sprintf($textTpl, $fromUsername, $toUsername, time(), $msgType, $contentStr);
              */
              /*
              $s =new SaeStorage();
              $s->write('lhz0725','test.txt', $resultStr );
              */
              echo $resultStr;
              exit;
	      
            }
          
          }
        }
        else{
            echo "";
            exit;
        }
      	//extract post data
        /*
		if (!empty($postStr)){
                
              	$postObj = simplexml_load_string($postStr, 'SimpleXMLElement', LIBXML_NOCDATA);
                $fromUsername = $postObj->FromUserName;
                $toUsername = $postObj->ToUserName;
                $keyword = trim($postObj->Content);
                $time = time();
                $textTpl = "<xml>
							<ToUserName><![CDATA[%s]]></ToUserName>
							<FromUserName><![CDATA[%s]]></FromUserName>
							<CreateTime>%s</CreateTime>
							<MsgType><![CDATA[%s]]></MsgType>
							<Content><![CDATA[%s]]></Content>
							<FuncFlag>0</FuncFlag>
							</xml>";             
				if(!empty($keyword))
                {
              		$msgType = "text";
                    //$contentStr = "Welcome to wechat world!";
                    $contentStr = urldecode(getxiaodou($keyword));
                    $resultStr = sprintf($textTpl, $fromUsername, $toUsername, $time, $msgType, $contentStr);
                	echo $resultStr;
                    exit;
                }else{
                	echo "Input something...";
                    exit;
                }

        }else {
        	echo "";
        	exit;
        }
        */
    }
		
	private function checkSignature()
	{
        $signature = $_GET["signature"];
        $timestamp = $_GET["timestamp"];
        $nonce = $_GET["nonce"];	
        		
		$token = TOKEN;
		$tmpArr = array($token, $timestamp, $nonce);
		sort($tmpArr);
		$tmpStr = implode( $tmpArr );
		$tmpStr = sha1( $tmpStr );
		
		if( $tmpStr == $signature ){
			return true;
		}else{
			return false;
		}
	}
}

?>