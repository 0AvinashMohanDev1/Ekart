
let data=JSON.parse(localStorage.getItem('webUserData'))||[];

let profile=document.getElementsByClassName('content');

let edit=document.getElementById('edit');

let username=document.getElementById('name');
let email=document.getElementById('email');
let phone=document.getElementById('phone');
let age=document.getElementById('age');
let gender=document.getElementById('gender');
let logout=document.getElementById('logout');
let editForm=document.getElementById('editForm');
console.log(data);
// here the value of num is index value of logged in user
let num=data[0].userNumberID;
console.log(num);
username.innerText=data[num].userPersonalData.name;
phone.innerText=data[num].userPersonalData.phoneNumber;
email.innerText=data[num].userPersonalData.email;
age.innerText=data[num].userPersonalData.age;
gender.innerText=data[num].userPersonalData.gender;


editForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    let name=editForm.editName.value;
    let phone=editForm.editPhone.value;
    let email=editForm.editEmail.value;
    let age=editForm.editAge.value;
    let gender=editForm.editGender.value;
    if(data[0].userNumberID!==-1){
        if(name){
            data[num].userPersonalData.name=name;
        }
        if(phone){
            data[num].userPersonalData.phoneNumber=phone;
        }
        if(email){
            data[num].userPersonalData.email=email;
            data[num].id=email;
        }
        if(age){
            data[num].userPersonalData.age=age;
        }
        if(gender){
            data[num].userPersonalData.gender=gender;
        }
    }else{
        console.log('please login first');
    }
    console.log(name);
    localStorage.setItem('webUserData',JSON.stringify(data));
    location.reload();
})



logout.addEventListener('click',()=>{
    data[0].userNumberID=-1;
    localStorage.setItem('webUserData',JSON.stringify(data));
    location.reload();
})

function toggle(){
    var blur=document.getElementById('blur');
    blur.classList.toggle('active');
    var popup=document.getElementById('popup');
    popup.classList.toggle('active');
}