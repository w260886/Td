var uname=sessionStorage['loginUname'];
var uid=sessionStorage['loginUid'];
$('#datetimepicker').datetimepicker({
    language: 'zh-CN',
    format: 'yyyy-mm-dd hh:ii',
    autoclose:true
});
$('div.datetimepicker div.datetimepicker-dropdown-bottom-right div.dropdown-menu').css('top',0);

$.ajax({
    type:'GET',
    url:'data/suba.php',
    data:{uname:uname,uid:uid},
    success:function(data) {

        $('#unames').val(data[0].unames);
        $('#cname').val(data[0].courseName);
        $('#tname').val(data[0].tname);
        $('#uphone').val(data[0].uphone);

    }
});
$('#order-ack').click(function(){
    console.log(1);
    var unames=$('#unames').val();
    var cname=$('#cname').val();
    var tname=$('#tname').val();
    var courseTime=new Date($('#datetimepicker').val()).getTime();
    console.log(courseTime);
    var courseHour=$('#courseHour ').val();
    var uphone=$('#uphone').val();

    $.ajax({
        type:'POST',
        url:'data/subscribe.php',
        data:{uid:uid,tname:tname,cname:cname,courseTime:courseTime,courseHour:courseHour,uphone:uphone},
        success:function (data) {
            //清空�?�?.显示成功预约.
        },
        error:function(){
            alert('有问题');
        }
    });
})
