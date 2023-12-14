/*import quotes from "./quote.js"*/

const boxes =  document.querySelectorAll(".js-box")
const today =  new Date (Date.now())
const dayNumber = today.getDate()

boxes.forEach(box =>{
    box.addEventListener('click', ()=>{
        const boxNumber = parseInt(box.textContent)
        if (boxNumber <= dayNumber){
            playSong()
            showImage(box)
            openModal(boxNumber)
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

const modal = document.querySelector('.js-modal')
const quote = document.querySelector('js-quote')
const author = document.querySelector('js-author')
const openModal = (index) =>{
    quote.textContent = quotes[index].quote
    author.textContent = quotes[index].author
    modal.showModal()
}