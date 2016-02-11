<?php
$timeout = 30;
$myurl = "http://www.bbc.com";
$curl = curl_init();
curl_setopt($curl, CURLOPT_URL, $myurl);
curl_setopt($curl, CURLOPT_TIMEOUT, $timeout);
curl_setopt($curl, CURLOPT_POST, 1);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
curl_setopt($curl, CURLOPT_COOKIESESSION, true);
curl_setopt($curl, CURLOPT_COOKIEJAR, 'cookie.txt');
$xml = curl_exec($curl);
curl_close ($curl);

echo $xml;