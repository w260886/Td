<?php
header('Content-Type:application/json');
@$uname =$_REQUEST['uname'] or die("{code:-2,msg:'用户名为空'}");
@$uid =$_REQUEST['uid'] or die("{code:-3,msg:'用户id为空'}");

require('init.php');

$sql="SELECT unames FROM td_user WHERE uid='$uid'";
$r =mysqli_query($conn,$sql);
$unames=mysqli_fetch_row($r);


$sql="SELECT courseTime,courseSite FROM td_user_course WHERE userId='$uid'";
$r =mysqli_query($conn,$sql);
$list=mysqli_fetch_all($r, MYSQLI_ASSOC);


$sql="select tname from td_teacher where tid in (select teacherId from td_user_course where userId = '$uid')";
$r=mysqli_query($conn,$sql);
$tname=mysqli_fetch_all($r,MYSQLI_ASSOC);


$sql="select cname from td_course where cid in (select courseId from td_user_course where userId = '$uid')";
$r=mysqli_query($conn,$sql);
$courseName=mysqli_fetch_all($r,MYSQLI_ASSOC);

foreach($list as $i=>$l){
	$list[$i]['tname']=$tname[$i]['tname'];
	$list[$i]['cname']=$courseName[$i]['cname'];
	$list[$i]['unames']=$unames[0];
}
echo json_encode($list);