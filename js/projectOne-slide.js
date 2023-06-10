// project1
const project1Img = document.querySelector('#project1Img');

let projectOnePrev = document.querySelector('#projectOnePrev')
let projectOneNext = document.querySelector('#projectOneNext')


let index = 0

let imgs = ['./images/project1/img1.jpg','./images/project1/img2.jpg','./images/project1/img3.jpg','./images/project1/img4.jpg'];

projectOneNext.addEventListener('click',function(){
    if(index<imgs.length - 1){
        index +=1;
        project1Img.src = imgs[index];
        console.log(project1Img.src)
        console.log('if is working')
    }else{
        index = 0;
        project1Img.src = imgs[index]
        console.log(project1Img.src)
        console.log('else is working')
    }
})

projectOnePrev.addEventListener('click',function(){
    if(index == 0){
        index = imgs.length - 1
        project1Img.src = imgs[index]
    }else{
        index -=1
        project1Img.src = imgs[index]
    }
})



// function next(e){
//     e.preventDefault()
//     let imgs = ['./images/project1/img2.jpg','./images/project1/img3.jpg','./images/project1/img1.jpg','./images/project1/img4.jpg'];
//     let firstSlide = project1Img.src === imgs[index]

//     if(firstSlide){
//         index + 1
//         project1Img.src = imgs[index];
//     }else{console.log(project1Img)}
    
// }

