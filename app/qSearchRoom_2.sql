/**
 *
 * @author ксюша
 * @name qSearchRoom_2
 */ 
Select * 
From TEACHERKEY t1
 Where t1.datein >=(select * from TEACHER t2 )