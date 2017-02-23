/**
 * Created by w260886 on 2017/2/2.
 */
/**
 * Created by w260886 on 2017/2/2.
 */
$(function(){//加载网页请求头部
    $('#top_box').load('data/header.php');
	$('#footer').load('data/footer.php');

});
$('#main').on('input propertychange','input',function(){

    var uname= $('#uname').val();
    var upwd=$('#upwd').val();
    var umail=$('#umail').val();

    if(uname!="" && upwd!="" &&umail!=""){

        $('#btn-signUp').removeAttr('disabled');
    }else{
        $('#btn-signUp').attr('disabled',true);
    }

    // if(uname=='') {
    //     console.log(2);
    //     $('#uname').prev('.aaa').addClass('glyphicon-alert').removeClass('text-success').addClass('text-danger');
    // }else{
    //     $('#uname').prev('.aaa').removeClass('glyphicon-alert').addClass('glyphicon-ok').removeClass('text-danger').addClass('text-success');
    //     }
    // if(upwd=='') {
    //     console.log(3);
    //     $('#upwd').prev('.aaa').addClass('glyphicon-alert').removeClass('text-success').addClass('text-danger');
    // }else{
    //     $('#upwd').prev('.aaa').removeClass('glyphicon-alert').addClass('glyphicon-ok').removeClass('text-danger').addClass('text-success');
    // }
    // if(umail=='') {
    //     console.log(4);
    //     $('#umail').prev('.aaa').addClass('glyphicon-alert').removeClass('text-success').addClass('text-danger');
    // }else{
    //     console.log(5);
    //     $('#umail').prev('.aaa').removeClass('glyphicon-alert').addClass('glyphicon-ok').removeClass('text-danger').addClass('text-success');

});
$('#btn-clear').click(function(){

    $('input').val('');
});

$('#btn-signUp').click(function(){
    var uname = $('#uname').val();
    var upwd = $('#upwd').val();
    var umail = $('#umail').val();

    //发起异步POST请求，进行注册验证
    $.ajax({
        type: 'POST',
        url: 'login.php',
        data: {uname: uname, upwd: upwd,umail:umail},
        success: function(data){
            //console.log('开始处理响应消息');
            if(data.code<0){  //注册失败
                $('h4.modal-title').html('注册失败');
                $('div.modal-body').html(data.msg);
                $('button[data-dismiss=modal]').html('关闭');
            }else {           //注册成功


            }
        },
        error: function(){
            // var num=2;
            // $('h4.modal-title').html('错误！');
            // $('div.modal-body').html('响应消息有问题！请检查Network！请联系管理员'+3+"秒后跳转首页");
            // $('button[data-dismiss=modal]').html('跳转首页');
            // $('button[data-dismiss=modal]').click(function(){
            //     window.location.href='dl.html';;
            // });
            // var sin=setInterval(function(){
            //
            //     $('div.modal-body').html('响应消息有问题！请检查Network！请联系管理员'+num+"秒后跳转首页");
            //     --num;
            //     if(num==-1){
            //         window.location.href='dl.html';;
            //         clearInterval(sin);
            //     }
            // },1000);
            var num=2;
            $('h4.modal-title').html('注册成功');
            $('button[data-dismiss=modal]').html('跳转登录页面');
            $('div.modal-body').html(3+"秒后跳转登录页面");
            $('button[data-dismiss=modal]').click(function(){
                window.location.href='dl.html';
            });
            var sin =setInterval(function(){

                $('div.modal-body').html(num+"秒后跳转登录页面");
                --num;
                if(num==-1){
                    window.location.href='dl.html';
                    clearInterval(sin);
                }
            },1000);


         }
    });
});
