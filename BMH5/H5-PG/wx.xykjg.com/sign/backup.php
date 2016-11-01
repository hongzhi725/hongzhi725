<?php
require_once "jssdk.php";
$url = $_GET['url'];
if ($url=="") {
  $url = "undefined";
}
$jssdk = new JSSDK("wx30511ac1f81afc6c", "7aac6c35d3b8f3b2234cb38513767526",$url);
$signPackage = $jssdk->GetSignPackage();
$bmh5 = "{\"nonceStr\":\"".$signPackage["nonceStr"]. "\",\"timestamp\":\"".$signPackage["timestamp"]. "\",\"url\":\"".$url. "\",\"signature\":\"".$signPackage["signature"]. "\",\"appid\":\"".$signPackage["appId"]."\"}";
echo $bmh5;
?>