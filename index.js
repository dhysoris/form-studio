import { createProjects } from "./projects.js"









const main = document.querySelector("main")
const video = document.querySelector("video")
const videoSection = document.querySelector("#video")

createProjects()

main.addEventListener("scroll", () => {
    animateVideo()
})

const headerLeft = document.querySelector(".text__header__left")
const headerRight = document.querySelector(".text__header__right")

function animateVideo() {
    let {bottom} = videoSection.getBoundingClientRect()
    let scale = 1 - ((bottom - window.innerHeight) * 0.0005)
    scale = scale < .2 ? .2 : scale > 1 ? 1 : scale
    video.style.transform = `scale(${scale})`
    // console.log(scale)

    //Text Transformation

    let textTrans = bottom - window.innerHeight;
    textTrans = textTrans < 0 ? 0 : textTrans
    headerLeft.style.transform = `translateX(${-textTrans}px)`
    headerRight.style.transform = `translateX(${textTrans}px)`
    // console.log(textTrans)
} 