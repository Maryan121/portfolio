const project6Img = document.querySelector('#project6Img');

let projectSixPrev = document.querySelector('#projectSixPrev')
let projectSixNext = document.querySelector('#projectSixNext')


let c = 0


projectSixNext.addEventListener('click',function(){

let images = ['./images/project6/img1.jpg','./images/project6/img2.jpg'];


    if(c == 0){
        c +=1;
        project6Img.src = images[1];
        
    }else{
        c = 0;
        project6Img.src = images[c]
    }
})

projectSixPrev.addEventListener('click',function(){
    let images = ['./images/project6/img1.jpg','./images/project6/img2.jpg'];
    if(c == 0){
        c = images.length - 1
        project6Img.src = images[c]
    }else{
        c -=1
        project6Img.src = images[c]
    }
})




