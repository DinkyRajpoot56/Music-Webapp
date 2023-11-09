const music = new Audio('audio/1.mp3');
music.play();

const songs = [
    {
        id: "1",
        songName:`Cheap Thrills<br>
        <div class='subtitle'>Sia</div>`,
        poster:"img/a.jpg",
    },
    {
        id: "2",
        songName:`Tik Tok<br>
        <div class='subtitle'>Kesha</div>`,
        poster:"img/b.jpeg",
    },
    {
        id: "3",
        songName:`Never Say Naver<br>
        <div class='subtitle'>Justin Bieber</div>`,
        poster:"img/s.jpeg",
    },
    {
        id: "4",
        songName:`Work From Home<br>
        <div class='subtitle'>fifth Harmony</div>`,
        poster:"img/y.jpeg",
    },
    {
        id: "5",
        songName:`Dont Let Me Down<br>
        <div class='subtitle'>Chainsmokers</div>`,
        poster:"img/x.jpeg",
    },
    {
        id: "6",
        songName:`Firestone<br>
        <div class='subtitle'>Kygo</div>`,
        poster:"img/w.jpg",
    },
    {
        id: "7",
        songName:`Bad Blood<br>
        <div class='subtitle'>Taylor Swift</div>`,
        poster:"img/v.jpeg",
    },
    {
        id: "8",
        songName:`Shape of you<br>
        <div class='subtitle'>Ed Sheeren</div>`,
        poster:"img/u.jpeg",
    },
    {
        id: "9",
        songName:`On My Way<br>
        <div class='subtitle'>Alan Walker</div>`,
        poster:"img/t.jpeg",
    },
    {
        id: "10",
        songName:`Titanium<br>
        <div class='subtitle'>David Guetta</div>`,
        poster:"img/c.jpeg",
    },
    {
        id: "11",
        songName:`Perfect<br>
        <div class='subtitle'>Ed Sheeran</div>`,
        poster:"img/d.jpg",
    },
    {
        id: "12",
        songName:`Girl like you<br>
        <div class='subtitle'>Justin Bieber</div>`,
        poster:"img/e.jpg",
    },
    {
        id: "13",
        songName:`Baby<br>
        <div class='subtitle'>Justin Bieber</div>`,
        poster:"img/f.jpg",
    },
    {
        id: "14",
        songName:`Shake it off<br>
        <div class='subtitle'>Taylor Swift</div>`,
        poster:"img/g.jpeg",
    },
    


]
Array.from(document.getElementsByClassName('songItem')).forEach((e, i) =>{
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
});
 





let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementById('wave');
masterPlay.addEventListener('click', () =>{
    if(music.paused || music.currentTime <=0){
       music.play();
       wave.classList.add('active1');
       masterPlay.classList.remove('bi-play-fill');
       masterPlay.classList.add('bi-pause-fill');

    }
    else{
       music.pause();
       wave.classList.remove('active1');
       masterPlay.classList.add('bi-play-fill');
       masterPlay.classList.remove('bi-pause-fill');
    }
})

let index= 0;
let poster_master_play = document.getElementById('poster_master_play');
let title = document.getElementById('title');
Array.from(document.getElementsByClassName('playListPlay')).forEach((e) =>{
    e.addEventListener('click', ()=>{
        index = el.target.id;
        //console.log(index);
        music.src = 'audio/$(index).mp3';
        poster_master_play.src = 'img/${index}.jpeg';
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');

        let songTitles = songs.filter((els) =>{
            return els.id == index;
        });

        songTitles.forEach(elss =>{
            let {songName, poster} = elss;
            title.innerHTML = songName;
            poster_master_play.src = poster;
        })

    })
}) 




let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];

pop_song_right.addEventListener('click', ()=>{
   pop_song.scrollLeft +=330;
});
pop_song_left.addEventListener('click', ()=>{
    pop_song.scrollLeft -=330;
 });
let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let Artists_bx = document.getElementsByClassName('Artists_bx')[0];

pop_art_right.addEventListener('click', ()=>{
   Artists_bx.scrollLeft +=330;
});
pop_art_left.addEventListener('click', ()=>{
    Artists_bx.scrollLeft -=330;
});


