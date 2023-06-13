const project2Img = document.querySelector('#project2Img');

let projectTwoPrev = document.querySelector('#projectTwoPrev')
let projectTwoNext = document.querySelector('#projectTwoNext')


let count = 0

let images = ['./images/project2/img1.jpg','./images/project2/img2.jpg'];

projectTwoNext.addEventListener('click',function(){



    if(index == 0){
        index +=1;
        project2Img.src = images[1];
    }else{
        index = 0;
        project2Img.src = images[index]
    }
})

projectTwoPrev.addEventListener('click',function(){
    if(index == 0){
        index = images.length - 1
        project2Img.src = images[index]
    }else{
        index -=1
        project2Img.src = images[index]
    }
})




