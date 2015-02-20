<?php

$data = json_decode(file_get_contents("php://input"));

$adi = mysql_real_escape_string($data->ad);
$mail = mysql_real_escape_string($data->ml);
$yorum = mysql_real_escape_string($data->yrm);

$con = mysql_connect('94.73.146.243', 'sultanTest', 'sultanUser');
mysql_select_db('test', $con);

$qry_em = 'select count(*) as cnt from message where mail ="' . $mail . '"';
$qry_res = mysql_query($qry_em);
$res = mysql_fetch_assoc($qry_res);

if($res['cnt']==0){
$qry = 'INSERT INTO message (name,pass,email) values ("' . $adi . '","' . $mail . '","' . $yorum . '")';
$qry_res = mysql_query($qry);
if ($qry_res) {
    $arr = array('msg' => "Kayıt Yapılmıştır", 'error' => '');
    $jsn = json_encode($arr);
    print_r($jsn);
} else {
    $arr = array('msg' => "", 'error' => 'Kayıt eklenirken hata oluştu');
    $jsn = json_encode($arr);
    print_r($jsn);
}
}
else
{
     $arr = array('msg' => "", 'error' => 'Daha önce bu mail adresi kaydedilmiştir');
    $jsn = json_encode($arr);
    print_r($jsn);
}
?>