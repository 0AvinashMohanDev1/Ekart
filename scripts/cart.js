let data=JSON.parse(localStorage.getItem('webUserData'))||[];
let num=data[0].userNumberID;
let cart=document.getElementById('cart');
let bill=document.getElementById('total');
let coupan=document.getElementById('masai20');
let couponBtn=document.getElementById('coupon');
let totalQuantity=document.getElementById('qty');
// let discount=document.getElementById('discount');
display(data[num].userCartData);

function display(value){
    let totalCartValue=0;
    for(let i=0;i<value.length;i++){
        totalCartValue+=(value[i].quantity)*(value[i].price);
        console.log(value[i]);
    }
    // totalCartValue-=totalCartValue*(0.20);
    // discount.innerText=totalCartValue;
    couponBtn.addEventListener('click',(e)=>{
        e.preventDefault();
        if(coupan.value==='masai20'){
            totalCartValue-=totalCartValue*(0.20); 
        }
        console.log(totalCartValue);
        // location.reload();
        bill.innerText=totalCartValue;
    })
    totalQuantity.innerText=value.length;
    bill.innerText=totalCartValue;
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

    let rating=document.createElement('h3');
    rating.innerText=element.ratings+' ⭐';

    let details=document.createElement('p');
    details.innerText=element.details.substring(0,50);

    let add=document.createElement('h3');
    add.setAttribute('class','add');
    add.style.backgroundColor='#cecbb1'
    add.innerText='➕';

    let quantity=document.createElement('h2');
    quantity.setAttribute('class','add');
    quantity.innerText=element.quantity;
    
    let subs=document.createElement('h3');;
    subs.setAttribute('class','add');
    subs.style.backgroundColor='#cecbb1'
    subs.innerText='➖';

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

    addDiv.append(subs,quantity,add);

    let remove=document.createElement('button');
    remove.innerText='Remove';
    remove.setAttribute('id','remove');
    remove.style.borderWidth='5px';
    remove.style.borderColor='#cecbb1'
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


let newbutton=document.getElementById('newbutton');
newbutton.addEventListener('click',()=>{
    window.location.href='./adress.html'
})

