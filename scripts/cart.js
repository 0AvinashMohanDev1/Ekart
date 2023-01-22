let data=JSON.parse(localStorage.getItem('webUserData'))||[];
let num=data[0].userNumberID;
console.log(data[num].userCartData);

cart=document.getElementById('cart');


function display(){
    cart.innerHtml=null;
    data[0].userNumberID.forEach((element,index)=>{

    })
}


