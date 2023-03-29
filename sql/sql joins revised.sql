SELECT * FROM classicmodels.orders;
select customerNumber  , count(customerNumber) from  orders group by customerNumber;
select orders.customerNumber  ,contactLastName, count(orders.customerNumber) from  
orders inner join customers on orders.customerNumber =  customers.customerNumber group by orders.customerNumber;

select orders.orderNumber ,orders.customerNumber ,contactFirstName , city , sum(priceEach) as TotalPayment from orderdetails 
inner join orders on orders.orderNumber = orderdetails.orderNumber
inner join  customers on customers.customerNumber = orders.customerNumber
 group by orderNumber order by TotalPayment desc ;
 
 select emp.employeeNumber, emp.firstName , emp.reportsTo , mgr.firstName as ManagerName from employees emp  
inner join employees mgr on emp.reportsTo = mgr.employeeNumber;

select emp.employeeNumber, emp.lastName, emp.jobTitle, emp.reportsTo manager , mgr.lastName as managerName ,mgr.jobTitle   managerJobTitle 
from employees emp inner join employees mgr on emp.reportsTo = mgr.employeeNumber;
 
 