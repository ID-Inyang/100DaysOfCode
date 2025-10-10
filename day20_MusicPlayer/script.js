const audio = document.querySelector('audio');
const coverArt = document.querySelector('#cover-art');
const songTitle = document.querySelector('.song-title');
const artistName = document.querySelector('.artist-name');
const playPausebtn = document.querySelector('#play-pause-btn');
const prevBtn = document.querySelector('#prev-btn');
const nextBtn = document.querySelector('#next-btn');
const progressBar = document.querySelector('.progress-bar');

coverArt.classList.add('spin');

let songs = [
    {
    title: 'What If?',
    artist: 'BRID',
    src: 'music/Baronnation x brid (about time) album- what if - track 1.mp3',
    coverImage: 'img/about-time.jpg'
    },
    {
    title: 'Go Crazy Remix',
    artist: 'BRID',
    src: 'music/Brid ft Gani Yu & Tyree Richardson - Go crazy remix.mp3',
    coverImage: 'img/go-crazy-remix.png' 
    },
    {
    title: 'Pressure',
    artist: 'Mykel6aron',
    src: 'music/Pressure - (official audio )ft. Mykel6aron x Nakimi x I.D INYANG.mp3',
    coverImage: 'img/pressure.png'
    }
]

let firstSong = 1;
let paused = false;

function loadSong(index = firstSong) {
    audio.src = songs[index].src;
    coverArt.src = songs[index].coverImage;
    artistName.textContent = songs[index].artist;
    songTitle.textContent = songs[index].title;
    audio.play();
}

loadSong();

prevBtn.addEventListener('click', ()=>{
    loadSong(0);
})

playPausebtn.addEventListener('click', ()=>{
    if (paused === true) {
        audio.play();
        playPausebtn.textContent = '⏸️';
        
        coverArt.classList.add('spin');
        paused = false;
    } else if(paused === false) {
        audio.pause();
        playPausebtn.textContent = '▶️'; 
        coverArt.classList.remove('spin');
        paused = true;
    }
})

nextBtn.addEventListener('click', ()=>{
    loadSong(2);
})