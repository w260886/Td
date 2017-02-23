var uname=sessionStorage['loginUname'] ;
var uid=sessionStorage['loginUid'];
if(uname==null){
     location.href='dl.html';
}
$(function(){
    $('#top_box').load('data/header.php');
	$('#footer').load('data/footer.php');
	
});
$.ajax({
    type:'GET',
    url:'data/my_sourse.php',
    data:{uname:"w779988",uid:'2'},
    success:function (data) {
		
        var html='';
        if(data.code<0){
            
        }else{
            $.each(data,function (i,list) {
				
                html+=`
                <div class="container">
                     <div class="row" id="row1">
                        <h4>${list.unames},您好</h4>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;您有新的课程 <span>${list.cname}</span> 在 <span>${list.courseSite}</span> 于 <span>`;html+=new Date(parseInt(list.courseTime)); html+=`</span></p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;老师姓名：<span>${list.tname}</span></p>
                        <hr>
                         <a href="#">查看更多信息</a>
                     </div>
                 </div>
            `;
            });
            $('#main').html(html);
                
            if(sessionStorage['loginUname']!=null){
                $('#dla').empty();
                $('ul.nav.navbar-nav').append('<li class="active"><a  href="my_sourse.html">我的预约</a></li>');
                $('#dlb').attr('href','#');
                $('#dlb').html('退出登陆').addClass('.out');
            }//跳转个人资料.1 还没做/////////////
            $('#dlb').click(function(){
                sessionStorage.removeItem("loginUname");
                sessionStorage.removeItem("loginUid");
                location.href='index.html';
            });

        }
    },
    error:function(){}
});


