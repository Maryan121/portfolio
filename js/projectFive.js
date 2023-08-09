const project5Img = document.querySelector('#project5Img');

let projectFivePrev = document.querySelector('#projectFivePrev')
let projectFiveNext = document.querySelector('#projectFiveNext')


let coun = 0

let iimgs = ['./images/project5/lightTheme.jpg','./images/project5/img3.jpg','./images/project5/darkTheme.jpg','./images/project5/img4.jpg'];

projectFiveNext.addEventListener('click',function(){
    if(coun<iimgs.length - 1){
        coun +=1;
        project5Img.src = iimgs[coun];
    }else{
        coun = 0;
        project5Img.src = iimgs[coun]
    }
})

projectFivePrev.addEventListener('click',function(){
    if(coun == 0){
        coun = iimgs.length - 1
        project5Img.src = iimgs[coun]
    }else{
        coun -=1
        project5Img.src = iimgs[coun]
    }
})



