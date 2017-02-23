<?php
header('Content-Type:application/json');
@$uname =$_REQUEST['uname'] or die("{code:-2,msg:'用户名为空'}");
@$upwd =$_REQUEST['upwd'] or die("{code:-3,msg:'密码为空'}");


require('init.php');

$sql="SELECT uid FROM td_user WHERE uname='$uname' and upwd='$upwd'";
$result=mysqli_query($conn,$sql);

$row=mysqli_fetch_row($result);

if($row===null){
    echo '{code:-4,msg:"用户密码错误"}';
}else{
    $uid=$row[0];
    $output=[
        'code'=>1,
        'msg'=>'登录成功！欢迎回来',
        'uid'=>$uid,
        'uname'=>$uname
    ];
    echo json_encode($output);
}

