let slider=document.getElementById('container-1')

let arr = ['https://images-static.nykaa.com/uploads/cf96cee1-979c-4f29-bc44-ae4df7986f37.jpg?tr=w-2400,cm-pad_resize' , 'https://images-static.nykaa.com/uploads/4fe68dac-23b0-4658-9a7a-196f0cb46f58.jpg?tr=w-2400,cm-pad_resize' , 'https://images-static.nykaa.com/uploads/5f6ab699-07d8-4e04-ac5c-66a64d9e1dce.png?tr=w-2400,cm-pad_resize' , 'https://images-static.nykaa.com/uploads/3ed8c266-9c08-4a91-85c8-fced58fe116a.gif?tr=w-2400,cm-pad_resize'];
    var i = 0;
    setInterval(function () {
        slider.innerHTML = null;  
        if(i<arr.length){
            let image=arr[i];  
            // img.style.width = "500px";
            // img.style.height = "300px"
            // img.style.justifyContent = "center";  
            slider.innerHTML=`
            <img src=${image} alt="Banner-Nykaa" >
            `
            // console.log(i)
            i++;
            if(i==arr.length){
                i=0;
            }
        }

    }, 2500)
    // let search=document.getElementById("search");
    // search.addEventListener("input",()=>{
    //     container.innerHTML=null;
    //     let input=search.value.toLowerCase();
    //     let newData=productData.filter((el)=>{
    //         return el.Title.toLowerCase().includes(input);
    //     });
    //     console.log(newData);
    //     display(newData);
    // });