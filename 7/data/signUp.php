<?php
header('Content-Type:application/json');
@$uname =$_REQUEST['uname'] or die({code:-2,msg:'用户名为空'});
@$unames =$_REQUEST['unames'] /*or die("{code:-3,msg:'昵称为空'}")*/;
if($unames==null){
    $unames=" ";
}
@$upwd =$_REQUEST['upwd'] or die({code:-4,msg:'密码为空'});
@$umail =$_REQUEST['umail'] or die({code:-5,msg:'邮箱为空'});
@$uphone =$_REQUEST['uphone'] /*or die("{code:-6,msg:'手机为空'}")*/;
if($uphone==null){
    $uphone=" ";
}
require('1_init.php');

$sql=INSERT INTO td_user VALUES(NULL, '$uname','$unames', '$upwd',0,'$umail','$uphone');
$result=mysqli_query($conn,$sql);
$output=[
   'code'=>1,
   'msg'=>'注册成功'
];
echo json_encode($output);
