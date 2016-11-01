<?php
header('content-type:text/html; charset=utf-8');
require_once "jssdk.php";
$url = $_GET['url'];
$kind = $_GET['kind'];
$id = $_GET['id'];
if ($url == "") {
    $url = "undefined";
}
$jssdk = new JSSDK("wx30511ac1f81afc6c", "7aac6c35d3b8f3b2234cb38513767526", $url);
$signPackage = $jssdk->GetSignPackage();
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
    if ($kind == "sales" || $kind == "hr" || $kind == "mkt") {
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
}
//echo "<div style=\"word-wrap: break-word; white-space: pre-wrap;\">".$bmh5."</pre>";
echo $bmh5;