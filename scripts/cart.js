let data=JSON.parse(localStorage.getItem('webUserData'))||[];
let num=data[0].userNumberID;
let cart=document.getElementById('cart');
let bill=document.getElementById('pay');
let coupan=document.getElementById('masai20');
let couponBtn=document.getElementById('coupan');

display(data[num].userCartData);

function display(value){
    let totalCartValue=0;
    for(let i=0;i<value.length;i++){
        totalCartValue+=(value[i].quantity)*(value[i].price);
        console.log(value[i]);
    }
    totalCartValue-=totalCartValue*(0.20);
    couponBtn.addEventListener('click',(e)=>{
        e.preventDefault();
        if(coupan.value==='masai20'){
            totalCartValue-=totalCartValue*(0.20); 
        }
        console.log(totalCartValue);
        // location.reload();
        bill.innerText=totalCartValue;
    })
    
    bill.innerText=totalCartValue;
    // console.log(totalCartValue,value.length);
   cart.innerHTML=null;
   value.forEach((element,index) => {
    let card=document.createElement('div');
    card.setAttribute('id','card');

    let image=document.createElement('img');
    image.src=element.image;

    let name=document.createElement('h3');
    name.innerText=element.name;

    let price=document.createElement('h3');
    price.innerText=element.price;

    let rating=document.createElement('p');
    rating.innerText=element.rating;

    let details=document.createElement('p');
    details.innerText=element.details;

    let add=document.createElement('h2');
    add.innerText='+';
    let quantity=document.createElement('p');
    quantity.innerText=element.quantity;
    let subs=document.createElement('h2');;
    subs.innerText='-';

    add.addEventListener('click',()=>{
       element.quantity++;
       quantity.innerText=element.quantity;
        localStorage.setItem('webUserData',JSON.stringify(data));
        location.reload();
       console.log(data);
    })
  
    subs.addEventListener('click',()=>{
        element.quantity--;
        if(element.quantity<1){
            element.quantity=1;
        }
        quantity.innerText=element.quantity;
     //    data[num].userCartData=value; 
         localStorage.setItem('webUserData',JSON.stringify(data));
         location.reload();
        console.log(data);
     })

    let addDiv=document.createElement('dive');
    addDiv.setAttribute('id','addsubs');

    addDiv.append(add,quantity,subs);

    let remove=document.createElement('button');
    remove.innerText='Remove';
    remove.addEventListener('click',()=>{
        value.splice(index,1);
        data[num].userCartData=value;
        localStorage.setItem('webUserData',JSON.stringify(data));
        location.reload();
        console.log(data);
    })

    card.append(image,name,price,rating,details,addDiv,remove);
    cart.append(card);
   });
}




