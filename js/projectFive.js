const project5Img = document.querySelector('#project5Img');

let projectFivePrev = document.querySelector('#projectFivePrev')
let projectFiveNext = document.querySelector('#projectFiveNext')


let coun = 0


projectFiveNext.addEventListener('click',function(){

    let images = ['./images/project5/img1.jpg','./images/project5/img2.jpg'];
    if(coun == 0){
        coun +=1;
        project5Img.src = images[1];
        
    }else{
        coun = 0;
        project5Img.src = images[coun]
    }
})

projectFourPrev.addEventListener('click',function(){
    let images = ['./images/project5/img1.jpg','./images/project5/img2.jpg'];
    if(coun == 0){
        coun = images.length - 1
        project5Img.src = images[coun]
    }else{
        coun -=1
        project5Img.src = images[coun]
    }
})




