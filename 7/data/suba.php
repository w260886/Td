<?php
header('Content-Type:application/json');
@$uname=$_REQUEST['uname'] or die("{code:-1,msg:'用户名为空'}");
@$userId=$_REQUEST['uid'] or die("{code:-2,msg:'用户id为空'}");

require('init.php');
$sql="SELECT unames,uphone,courseName FROM td_user WHERE uname='$uname' and uid='$userId'";
$r=mysqli_query($conn,$sql);
$ra=mysqli_fetch_all($r,MYSQLI_ASSOC);

$sql="SELECT tname FROM td_teacher WHERE tid in(SELECT teacherId FROM td_user WHERE uname='$uname' and uid='$userId')";
$tname=mysqli_query($conn,$sql);
$tname=mysqli_fetch_array($tname);
$ra[0]['tname']=$tname['tname'];




echo json_encode($ra);


