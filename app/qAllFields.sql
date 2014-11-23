/**
 *
 * @author ксюша
 * @name qAllField
 */ 
Select * 
From ROOM t
, KEYSTATUS t2
, TEACHER t3
 Inner Join TEACHERKEY t1 on t3.teacher_id = t1.teacher
 and t2.keystatus_id = t1.keystatus
 and t1.room = t.room_id
