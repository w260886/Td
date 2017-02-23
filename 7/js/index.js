$(function(){//加载网页请求头部

   
	$('#footer').load('data/footer.php');
});
console.log(1);
if(sessionStorage['loginUname']!=null){
    console.log(12);
    $('#dla').empty();
    $('ul.nav.navbar-nav').append('<li><a href="my_sourse.html">我的预约</a></li>');
    $('#dlb').attr('href','#');
   $('#dlb').html('退出登陆').addClass('.out');
}//跳转个人资料.1 还没做/////////////
$('#dlb').click(function(){
    sessionStorage.removeItem("loginUname");
    sessionStorage.removeItem("loginUid");
    location.href='index.html';
});