function Products(crickItem1,crickItem2,crickItem3,basketItem1,basketItem2,
    tennisItem1,tennisItem2, tennisItem3,shoes1,shoes2,shoes3,clothes1,clothes2,clothes3){
    this.categories = 
    [
        this.sports=
    {
        cricket: [crickItem1,crickItem2,crickItem3],
        Basketball: [basketItem1,basketItem2],
        tennis:[tennisItem1,tennisItem2, tennisItem3]
    },
     this.shoes= [shoes1,shoes2,shoes3],
     this.clothes= [clothes1,clothes2,clothes3]
    ]
}

function ShopInfo(shopName,shopAddress,contact1, contact2,email,crickItem1,crickItem2,crickItem3,basketItem1,basketItem2,
    tennisItem1,tennisItem2, tennisItem3,shoes1,shoes2,shoes3,clothes1,clothes2,clothes3){
this.Name = shopName,
this.Address = shopAddress,
this.shopContact = [contact1 ,contact2 ,email ],
this.shopProducts = new Products(crickItem1,crickItem2,crickItem3,basketItem1,basketItem2,
    tennisItem1,tennisItem2, tennisItem3,shoes1,shoes2,shoes3,clothes1,clothes2,clothes3)
}
let info = new ShopInfo("uzair","karachi","03123444","03143515","shop@gmail.com","bat","ball","wicket","Basket","ball","racket","ball","net","Nike", "Addidas","Asics","Trouser","Shirts","Caps" );
console.log(info)