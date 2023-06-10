// project1
const project3Img = document.querySelector('#project3Img');

let projectThreePrev = document.querySelector('#projectThreePrev')
let projectThreeNext = document.querySelector('#projectThreeNext')


let sliderCount = 0


projectThreeNext.addEventListener('click',function(){
    let imgs = ['./images/project3/img1.jpg','./images/project3/img2.jpg','./images/project3/img3.jpg','./images/project3/img4.jpg'];

    if(sliderCount<imgs.length - 1){
        sliderCount +=1;
        project3Img.src = imgs[sliderCount];
        console.log(project3Img.src)
        console.log('if is working')
    }else{
        sliderCount = 0;
        project3Img.src = imgs[sliderCount]
        console.log(project3Img.src)
        console.log('else is working')
    }
})

projectThreePrev.addEventListener('click',function(){
    let imgs = ['./images/project3/img1.jpg','./images/project3/img2.jpg','./images/project3/img3.jpg','./images/project3/img4.jpg'];

    if(sliderCount == 0){
        sliderCount = imgs.length - 1
        project3Img.src = imgs[sliderCount]
    }else{
        sliderCount -=1
        project3Img.src = imgs[sliderCount]
    }
})




