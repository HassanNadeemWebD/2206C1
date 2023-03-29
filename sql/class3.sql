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


use 2206C1;
create table customers(customerID int primary key auto_increment , customerName varchar(255), city varchar(255),contact varchar(20));
create table orders(orderID int primary key auto_increment, customerID int , orderDate date, orderAmount int,foreign key(customerID) references customers(customerIDorders));

insert into customers( customerName , city ,contact ) values ("Hamza" , "Karachi" , "0312565869"),("Hamza" , "Karachi" , "0312565869"),
("Ali" , "Lahore" , "0312565869"),("Akram" , "Karachi" , "0312565869");
select * from customers;
update customers set customerName = "Zubair" where customerID = 2;

insert into orders(customerID  , orderDate , orderAmount) values (3 , "2023-03-01",5603);
insert into orders(customerID  , orderDate , orderAmount) values (1 , "2023-03-01",5603);
insert into orders(customerID  , orderDate , orderAmount) values (2 , "2023-03-01",503);
insert into orders(customerID  , orderDate , orderAmount) values (1 , "2023-03-01",603),(4 , "2023-01-11",7603),(3 , "2020-02-01",17603);
select * from orders;
select * from customers where customerName like 'A%';
select * from customers where city like '%i';
select * from customers where customerName like '%A%';

select distinct city from customers;
select * from orders where orderAmount between 603 AND 5603; 
select * from orders where orderID IN (3,4,1); 




