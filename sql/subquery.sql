SELECT * FROM classicmodels.payments order by amount desc;
use classicmodels;

select max(amount) from payments;
select customerNumber from payments where amount = (select max(amount) from payments);
select contactLastName , city from customers where customerNumber =(select customerNumber from payments where amount = (select max(amount) from payments));

select max(amount) from payments where amount < (select max(amount) from payments ) order by amount desc;

select contactLastName , city from customers
 where customerNumber = (select customerNumber from payments where 
amount = (select max(amount) from payments where amount < (select max(amount) from payments )));


select customerNumber from customers where country = "Australia";

select max(amount) from (select * from payments where customerNumber  IN (select customerNumber from customers where country = "Australia"))as maxSalary;
select * from payments where customerNumber  IN (select customerNumber from customers where country = "Australia") order by amount desc;   -- multi row subquery 

select * from (select * from payments where customerNumber  IN (select customerNumber from customers where country = "Australia")) as maxSal where amount > 45000;

select * from customers where country = "USA";

select employeeNumber ,reportsTo from employees;



