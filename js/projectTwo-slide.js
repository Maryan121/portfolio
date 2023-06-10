const project2Img = document.querySelector('#project2Img');

let projectTwoPrev = document.querySelector('#projectTwoPrev')
let projectTwoNext = document.querySelector('#projectTwoNext')


let count = 0

let images = ['./images/project2/img1.jpg','./images/project2/img2.jpg'];

projectTwoNext.addEventListener('click',function(){



    if(index == 0){
        index +=1;
        project2Img.src = images[1];
        // console.log(project2Img.src)
        // console.log('if is working')
    }else{
        index = 0;
        project2Img.src = images[index]
        // console.log(project1Img.src)
        // console.log('else is working')
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




