let userData=JSON.parse(localStorage.getItem("webUserData"))||[];
// userData=[];
// userData.unshift({userNumberID:-1});
// localStorage.setItem("webUserData",JSON.stringify(userData));
let loginForm=document.getElementById('loginForm');
let signupForm=document.getElementById('signupForm');
let printError=document.getElementById('alert');
console.log(userData)


loginForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    let tempData={
        name:loginForm.name.value,
        email:loginForm.email.value,
        password:loginForm.password.value,
        phoneNumber:loginForm.phoneNumber.value,
        age:loginForm.age.value,
        gender:loginForm.gender.value
    };
    let obj={
        // userProfileNumber:-1,
        id:loginForm.email.value,
        userPersonalData:tempData,
        userCartData:[]
    }

// for checkking
    let valid=false;
    for(let email in userData ){
        if(userData[email].id===tempData.email){
            valid=true;
        }
        console.log(userData);
    }

// for finding if password has right credentials or not.
    let ans=strongPassword(loginForm.password.value);


    if(ans=='length'||ans=='char'||valid){
        if(valid){
            alert('e-mail already registered!!!')
        }
        else if(ans=='length'){
            printError.innerText='weak password, please create a new strong password and length should be greater than 5 with number,special character, and latters ';
        }else{
            printError.innerText=('enter password containing number,special character, and latters');
        }

    }else{
        alert('good to go! you can sign up now!!!');
        userData.push(obj);
        localStorage.setItem("webUserData",JSON.stringify(userData));
        console.log(userData);
    }
    

    /*
// for deleting all the users data
    userData=[];
    userData.unshift({userNumberID:-1});
    localStorage.setItem("webUserData",JSON.stringify(userData));
*/
})



signupForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    let signupData={
        email:signupForm.signUpEmail.value,
        password:signupForm.signUpPassword.value
    }
    let userNumberID=0;
    let signupResult=false;
    for(let i=0;i<userData.length;i++){
        if(userData[i].id===signupData.email){
            if(userData[i].userPersonalData.password===signupData.password){
                signupResult=true;
                userData[0].userNumberID=i;
                localStorage.setItem("webUserData",JSON.stringify(userData));
                console.log(userData);
                break;
            }
        }
    }
    if(signupResult){
        userData[0].userProfileNumber=userNumberID;
        if(userData[userData[0].userNumberID].id==='admin@gmail.com'){
            alert(`welcome back admin!`);
            window.location.href='/admin/admin.html'
        }else{
            alert(`Welcome back ${userData[userData[0].userNumberID].userPersonalData.name}`);
            window.location.href='/index.html';
        }
        console.log(userData);
    }else{
        alert('wrong input')
        
    }
})
console.log(userData);
// console.log(userData[0].userNumberID);
function strongPassword(num){
    num=num.trim().split("");
    let size=[];
    size.push(...num);
    num=num.reduce((acc,item)=>{
        item=item.toLocaleLowerCase();
        acc[item]===undefined? acc[item]=1:"";
        return acc;
    },{})
    console.log(num);
    if(size.length<5){
        return 'length';
    }
    let special={
        '!':1,
        '@':1,
        '#':1,
        '$':1,
        '%':1,
        '^':1,
        '&':1,
        '*':1
    }
    let number={
        '1':1,
        '2':2,
        '3':3,
        '4':4,
        '5':5,
        '6':6,
        '7':7,
        '8':8,
        '9':9,
        '0':0
    }
    let latters={
        'q':1,
        'w':1,
        'e':1,
        'r':1,
        't':1,
        'y':1,
        'u':1,
        'i':1,
        'o':1,
        'p':1,
        'a':1,
        's':1,
        'd':1,
        'f':1,
        'g':1,
        'h':1,
        'j':1,
        'k':1,
        'l':1,
        'z':1,
        'x':1,
        'c':1,
        'v':1,
        'b':1,
        'n':1,
        'm':1
    }

let result1=false;
     for(let key in special){
        if(key in num){
            result1=true;
            break;
        }
     }
     
     let result2=false;
     for(key in number){
        if(number[key] in num){
            result2=true;
            break;
        }
     }
     let result3=false;
     for(let key in latters){
        if(key in num){
            result3=true;
            break;
        }
     }
    //    console.log(result1,result2,result3);
     if(result1&&result2&&result3){
        return 'true';
     }else{
        return 'char';
     }


}