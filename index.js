function insta(){
    window.open('https://www.instagram.com/mrsanabeans/')
}

 
 function face(){
    window.open('https://www.facebook.com/mrsanabeans')
 }

 
    let gif = document.getElementById('animate')
    gif.addEventListener('mouseenter', giphy)
    gif.addEventListener('mouseout', emote)

function giphy(){
    gif.innerHTML = '<img src="_icons/giphywave.gif">'
} 

function emote(){
    gif.innerHTML = '&#128522'
}