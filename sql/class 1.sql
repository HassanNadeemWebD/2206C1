create database 2206C1;
-- drop database 2206C1;
drop table users;
use 2206C1;
create table users(userID int primary key auto_increment, userName varchar(255)  unique not null, contact varchar(12), city varchar(50));
insert into users(userID , userName , contact,city) values (1 , "Ali Raza" , 03482233981 , "Karachi");
select userId from users; 
insert into users(userID , userName , contact,city) values (2 , "Hassan" , 03482233981 , "Karachi"),(2 , "Rafay" , "03123654256","Lahore");
select * from users;
alter table users modify column contact varchar(11);
alter table users add column country varchar(50);
alter table users add column email varchar(60);
alter table users drop column email ;

alter table users add column email varchar(60) after contact;
insert into users( userName , contact,city) values ( "Hassan" , 03482233981 , "Karachi"),("Rafay" , "03123654256","Lahore");
truncate users;



