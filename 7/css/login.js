/**
 * Created by w260886 on 2017/2/2.
 */
$(function(){//加载网页请求头部
    $('#top_box').load('data/header.php');

});
var loginUname=null;
var loginUpwd=null;
$('#main').on('input propertychange','input',function(){

    var uname= $('#uname').val();
    var upwd=$('#upwd').val();
    if(uname!="" && upwd!=""){
        $('#btn-login').removeAttr('disabled');
    }else{
        $('#btn-login').attr('disabled',true);
    }
});


$('#btn-login').click(function(){
    var uname = $('#uname').val();
    var upwd = $('#upwd').val();
    //发起异步POST请求，进行登录验证
    $.ajax({
        type: 'POST',
        url: 'login.php',
        data: {uname: uname, upwd: upwd},
        success: function(data){
            //console.log('开始处理响应消息');
            if(data.code<0){  //登录失败
                $('p.att').html(data.msg);
            }else {           //登录成功
                sessionStorage['loginUname'] = data.uname;
                sessionStorage['loginUid'] = data.uid;
                location.href('index.html');
            }
        },
        error: function(){
            alert('响应消息有问题！请检查Network！');
        }
    });
});
