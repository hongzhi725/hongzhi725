<?php
require('./jssdk.php');

$appid="wx1376c9c0aa72ddeb";
$appsecret="785e37df82a5f7cb460c7a44ef018efc";
$wx = new JSSDK($appid,$appsecret);
echo $wx->getAccessToken($url);
?>