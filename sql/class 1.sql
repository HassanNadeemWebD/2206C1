
-- drop database 2206C1;

use 2206C1;
create table users(userID int primary key auto_increment, userName varchar(255)  unique not null, contact varchar(12), city varchar(50));
insert into users(userID , userName , contact,city) values (1 , "Ali Raza" , 03482233981 , "Karachi");
select userId from users; 
insert into users( userName , contact,city) values ( "Shehryar" , 03482233981 , "Karachi"),( "Huzaifa" , "03123654256","Lahore");
select * from users;
alter table users modify column contact varchar(11);
alter table users add column country varchar(50);
alter table users add column email varchar(60);
alter table users drop column email ;

alter table users add column email varchar(60) after contact;
insert into users( userName , contact,city) values ( "Hassan" , 03482233981 , "Karachi"),("Rafay" , "03123654256","Lahore");
select * from users where userID = 7;
select userID , userName , city from users where userName = "Huzaifa";
select userID , userName , city from users where city = "Karachi";
update users set contact = "03122054431" where userName = "Ali Raza";
SET SQL_SAFE_UPDATES = 0;
delete  from users  where userName = "Ali Raza";
alter table users change column contact  userContact varchar(255);
ALTER TABLE TableName
RENAME COLUMN OldColumnName TO NewColumnName;

create table orders(orderID int primary key auto_increment, customerID int , orderDate date 
, amount int , billStatus varchar(10), foreign key(customerID) references users(userID) );


insert into orders(customerID  , orderDate 
, amount  , billStatus)  values (4 , "2023-03-05",5600 , "paid");
rename table users to customers;
alter table customers change column userID customerID int;
alter table customers change column userName customerName varchar(255);

insert into orders(customerID  , orderDate 
, amount  , billStatus)  values (8 , "2023-03-05",5600 , "paid");
