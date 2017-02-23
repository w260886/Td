<?php
header('Content-Type:application/json');
@$userId=$_REQUEST['uid'] or die("{code:-1,msg:'用户id为空'}");
@$tname=$_REQUEST['tname'] or die("{code:-2,msg:'老师名字为空'}");
@$cname=$_REQUEST['cname'] or die("{code:-3,msg:'课程名字为空'}");
@$courseTime=$_REQUEST['courseTime'] or die("{code:-4,msg:'预约时间为空'}");
@$orderTime=time()*1000;
@$courseHour=$_REQUEST['courseHour']or die("{code:-5,msg:'课程时长为空'}");
@$uphone=$_REQUEST['uphone']or die("{code:-6,msg:'手机号码为空'}");
@$courseSite=null;
@$ack=0;


require('init.php');

$sql="INSERT INTO td_user_course VALUES(NULL,'$userId','$tname','$cname','$courseTime','$orderTime','$courseHour','$courseSite','$ack','$uphone')";
$r=mysqli_query($conn,$sql);

$c=mysqli_insert_id($conn);
$output=[
     'code'=>1,
     'msg'=>$courseTime
];
echo json_encode($output);