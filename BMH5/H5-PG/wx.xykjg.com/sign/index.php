<style type="text/css">
	.main{
		word-wrap: break-word;white-space: pre-wrap;
		font-size: 13px;
		/*font-family:"ms sans serif";*/
	}
</style>
<?php
require_once "jssdk.php";
$jssdk = new JSSDK("wx30511ac1f81afc6c", "7aac6c35d3b8f3b2234cb38513767526");
$signPackage = $jssdk->GetSignPackage();
$bmh5 = "{\"nonceStr\":\"".$signPackage["nonceStr"]. "\",\"timestamp\":\"".$signPackage["timestamp"]. "\",\"signature\":\"".$signPackage["signature"]. "\",\"appId\":\"".$signPackage["appId"]. "\"}";
echo "<div class='main'>".$bmh5."</div>";
?>