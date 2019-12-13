<?php
header('content-type:text/html; charset=utf-8');
require_once "jssdk.php";
$url = $_GET['url'];
$kind = $_GET['kind'];
$id = $_GET['id'];
if ($url == "") {
    $url = "undefined";
}
$appid="wx1376c9c0aa72ddeb";
$appsecret="785e37df82a5f7cb460c7a44ef018efc";
$jssdk = new JSSDK($appid,$appsecret);
$signPackage = $jssdk->GetSignPackage($url);
//微信范围
$nonceStr = "\"nonceStr\":\"" . $signPackage["nonceStr"] . "\",";
$timestamp = "\"timestamp\":\"" . $signPackage["timestamp"] . "\",";
$url = "\"url\":\"" . $url . "\",";
$signature = "\"signature\":\"" . $signPackage["signature"] . "\",";
$appid = "\"appid\":\"" . $signPackage["appId"] . "\"";
//分享范围
if ($kind == "") {
    //	$kind = "undefined";
    $bmh5 = "{" . $nonceStr . $timestamp . $url . $signature . $appid . "}";
} else {
    if ($kind == "sales" || $kind == "hr" || $kind == "mkt" || $kind == "H5PG") {
        //		$html = file_get_contents('bluemoon/'.$kind."/share.json");
        $html = file_get_contents("bluemoon/share.json");
        $data = json_decode($html, true);
        // 把JSON字符串转成PHP数组
        $title = "\"title\":\"" . $data[$kind][$id]['title'] . "\",";
        $describe = "\"describe\":\"" . $data[$kind][$id]['describe'] . "\",";
        $link = "\"link\":\"" . $data[$kind][$id]['link'] . "\",";
        $imgUrl = "\"imgUrl\":\"" . $data[$kind][$id]['imgUrl'] . "\"";
        $bmh5 = "{" . $nonceStr . $timestamp . $url . $signature . $appid . "," . $title . $describe . $link . $imgUrl . "}";
    }
	if ($kind == 'card') {
		$res = $jssdk->getCardSign($id);
		$cardId = "\"cardId\":\"" . $res["cardId"] . "\",";
		$cardtime = "\"cardtime\":\"" . $res["timestamp"] . "\",";
		$cardSign = "\"cardSign\":\"" . $res["cardSign"] . "\"";
		$bmh5 = "{" . $nonceStr . $timestamp . $url . $signature . $appid . "," . $cardId . $cardtime . $cardSign . "}";
		
	}
}
//echo "<div style=\"word-wrap: break-word; white-space: pre-wrap;\">".$bmh5."</pre>";
echo $bmh5;