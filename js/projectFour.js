const project4Img = document.querySelector('#project4Img');

let projectFourPrev = document.querySelector('#projectFourPrev')
let projectFourNext = document.querySelector('#projectFourNext')


let counter = 0


projectFourNext.addEventListener('click',function(){

let images = ['./images/project4/img1.jpg','./images/project4/img2.jpg'];


    if(counter == 0){
        counter +=1;
        project4Img.src = images[1];
        
    }else{
        counter = 0;
        project4Img.src = images[counter]
    }
})

projectFourPrev.addEventListener('click',function(){
    let images = ['./images/project4/img1.jpg','./images/project4/img2.jpg'];
    if(counter == 0){
        counter = images.length - 1
        project4Img.src = images[counter]
    }else{
        counter -=1
        project4Img.src = images[counter]
    }
})




