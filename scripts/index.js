let slidecontainer = document.getElementsByClassName('container-1');

    let image =['https://images-static.nykaa.com/uploads/cf96cee1-979c-4f29-bc44-ae4df7986f37.jpg?tr=w-2400,cm-pad_resize' , 'https://images-static.nykaa.com/uploads/4fe68dac-23b0-4658-9a7a-196f0cb46f58.jpg?tr=w-2400,cm-pad_resize' , 'https://images-static.nykaa.com/uploads/5f6ab699-07d8-4e04-ac5c-66a64d9e1dce.png?tr=w-2400,cm-pad_resize' , 'https://images-static.nykaa.com/uploads/3ed8c266-9c08-4a91-85c8-fced58fe116a.gif?tr=w-2400,cm-pad_resize']

    let x ;
    let slideimg=document.createElement("img");
    let i=0;
    x=setInterval(function(){
        if(i==image.length){
            i=0;
        }
        slideimg.src =image[i++];
        slidecontainer.append(slideimg);
    },2000);