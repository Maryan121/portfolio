const project2Img = document.querySelector('#project2Img');

let projectTwoPrev = document.querySelector('#projectTwoPrev')
let projectTwoNext = document.querySelector('#projectTwoNext')


let count = 0

let images = ['./images/project2/img1.jpg','./images/project2/img2.jpg','./images/project2/img3.jpg','./images/project2/img4.jpg'];

projectTwoNext.addEventListener('click',function(){
    if(count<images.length - 1){
        count +=1;
        project2Img.src = images[count];
    }else{
        count = 0;
        project2Img.src = images[count]
    }
})

projectTwoPrev.addEventListener('click',function(){
    if(count == 0){
        count = images.length - 1
        project2Img.src = images[count]
    }else{
        count -=1
        project2Img.src = images[count]
    }
})




