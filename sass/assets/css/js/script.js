const boxes =  document.querySelectorAll(".js-box")
const today =  new Date (Date.now())
const dayNumber = today.getDate()

boxes.forEach(box =>{
    box.addEventListener('click', ()=>{
        const boxNumber = parseInt(box.textContent)
        if (boxNumber <= dayNumber){
            playSong()
            showImage(box)
        }
    })
})

const url =  "sass/assets/css/audios/opening-song.mp3"
const song = new Audio (url)
const playSong = () => {
    song.pause()
    song.currentTime = 0
    song.play()
}

const showImage = (boxToHide) =>{
    boxToHide.classList.add('hide')
}