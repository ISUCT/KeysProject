/**
 *
 * @author ксюша
 * @name qAll
 * @public
 */ 
Select firstname, lastname, middlename
, cath_name, phonenumber, corp_name
, rnumber, status 
From TEACHERKEY t1
, CATH t
, CORPUS t2
 Inner Join KEYSTATUS t3 on t3.keystatus_id = t1.keystatus_id
 Inner Join ROOM t4 on t2.corpus_id = t4.corpus_id
 and t4.room_id = t1.room_id
 Inner Join TEACHER t5 on t5.teacher_id = t1.teacher_id
 Where t5.lastname Like :paramTeacher