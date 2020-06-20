<?php

$n = mt_rand(1,3);

if($n === 1){
  $message = 'UI/UXデザイナー見習いです';
}elseif($n === 2){
  $message = 'プログラミング勉強中です';
}else{
  $message = 'PHPの勉強中です';
}

 ?>

<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="utf-8">
  <title><?= $title; ?>麻雀計算機</title>
  <link rel="icon" href="favicon.ico">
  <meta name="description" content="麻雀の得点を計算するwebアプリケーションです">
  <link rel="stylesheet" href="css/styles.css">
</head>
<body>
<header>
</header>

<div class="wrapper">

</div>

<footer>
  <p>(c) dotinstall.com</p>
</footer>
</body>
</html>