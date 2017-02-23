SET NAMES UTF8;
DROP DATABASE IF EXISTS TomData;
CREATE DATABASE TomData CHARSET=UTF8;
USE TomData;


CREATE TABLE td_user(
  uid INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(16),
  unames VARCHAR(16),   
  upwd VARCHAR(16),
  upower INT,           
  umail VARCHAR(21),
  uphone VARCHAR(16),
  teacherId INT,
  courseName VARCHAR(16)

);
/**id 登陆账号 名称 密码 权限 邮箱 手机号 绑定老师 **/
INSERT INTO td_user VALUES
(NULL, 'adminWang','管理员1号', '123456',10,'260886259@qq.com','13030303030',NULL,NULL),
(NULL, 'w779988','王民民', '456789',10,'260886259@qq.com','13030303030',3,'视唱练耳'),
(NULL, 'gg123666','张小强', '123456',0,'260886259@qq.com','13030303030',4,'声乐演唱');

//教师表
CREATE TABLE td_teacher(
  tid INT PRIMARY KEY AUTO_INCREMENT,
  tname VARCHAR(16),
  courseid INT
);
INSERT INTO td_teacher VALUES
(NULL,'帅老师',10),
(NULL,'帅老师',20),
(NULL,'帅老师',30),
(NULL,'黄老师',20),
(NULL,'黄老师',30),
(NULL,'龙老师',40),
(NULL,'龙老师',10),
(NULL,'花老师',60);


/**课程表**/
CREATE TABLE td_course(
  cid INT PRIMARY KEY AUTO_INCREMENT,
  cname VARCHAR(64)
);
INSERT INTO td_course VALUES
(10,'流行演唱'),
(20,'声乐演唱'),
(30,'视唱练耳'),
(40,'乐理'),
(50,'钢琴'),
(60,'音乐剧演唱');
//id  学生名字 老师名字 课程名字 日期时间 地点
CREATE TABLE td_user_course(
  ucid INT PRIMARY KEY AUTO_INCREMENT,
  userId VARCHAR(16),
  tname VARCHAR(16),
  cname VARCHAR(16),
  courseTime BIGINT,
  coursehour INt,
  courseSite VARCHAR(16),
  ack int,
  phone VARCHAR(16)
);
/**订单提交**/
/**订单编号 用户id 老师姓名 课程名字 预约课程时间 课程时长 课程地点 确认状态0/1 **/
INSERT INTO td_user_course VALUES
(NULL,2,'帅老师','流行演唱',1486441999298,1,'东南楼01-2c',1,'1355555555'),
(NULL,2,'帅老师','流行演唱',1486441999298,1,'西北楼02-6c',1,'1366666666'),
(NULL,3,'黄老师','视唱练耳',1486441999298,1,'知行楼09-2a',1,'1377777777'),
(NULL,3,'黄老师','视唱练耳',1486441999298,1,'学思楼09-2a',1,'1388888888');