let songindex=0;
let audioelement = new Audio(`songs/song1.mpeg`);
let playbtn=document.getElementById("playbutton");
let prevbtn=document.getElementById("prevbutton");
let forwbtn=document.getElementById("forwbutton");
let progressbar = document.getElementById("progressbar");
let playinggif=document.getElementById("playinggif");
let songitems=Array.from(document.getElementsByClassName("songitems"));
let defsongname=document.getElementById("defsongname");
let songs=[
{ songname:"inthaandham"},
{ songname:"sirivennela" },
{ songname:"nenu nuvv antu"},
{ songname:" i wanna fly"},
{ songname:"ni yedalo naku"},
{ songname:"saradaga kasepyna"},
{ songname:"appudo yeppudo"},
{ songname:"ee hrudayam"},
{ songname:"emaipothaney"},
{ songname:"ninnila" }
]


// play and pause
playbtn.addEventListener("click",()=>{
  if (audioelement.paused)
  {
    audioelement.play()
      defsongname.innerHTML=songs[songindex].songname;
    playbtn.classList.remove("fa-circle-play")
    playbtn.classList.add("fa-circle-pause")
    playinggif.style.opacity="1";


    songitems.forEach((element)=>{

    elementsindex=parseInt(element.id);
    if (elementsindex==songindex)
    {
      element.classList.remove("fa-circle-play");
      element.classList.add("fa-circle-pause");
    }
    })
  }
else{
  audioelement.pause()
  playbtn.classList.remove("fa-circle-pause");
  playbtn.classList.add("fa-circle-play");
  playinggif.style.opacity="0";



    songitems.forEach((element)=>{

    elementsindex=parseInt(element.id);
    if (elementsindex==songindex)
    {
      element.classList.remove("fa-circle-pause");
      element.classList.add("fa-circle-play");
    }
    })
 }
}
)

// seekbar update


audioelement.addEventListener("timeupdate",()=>{
  let progress=parseInt((audioelement.currentTime/audioelement.duration)*100);
  progressbar.value=progress;
  // changing to next song after complition
  if (audioelement.currentTime/audioelement.duration==1){
   if(songindex<9){

    songindex=songindex+1;
}
else{
  songindex=0;
}
    audioelement.src=`songs/song${songindex+1}.mpeg`;
    audioelement.play();
    defsongname.innerHTML=songs[songindex].songname;
    playinggif.style.opacity="1";




    muteall();

    songitems.forEach((element)=>{
    elementsindex=parseInt(element.id);
    if (elementsindex==songindex)
    {
      element.classList.remove("fa-circle-play");
      element.classList.add("fa-circle-pause");
    }
    })

  }
})

progressbar.addEventListener("change",()=>{
  audioelement.currentTime=progressbar.value*audioelement.duration/100;
})


// songs playing from the album

songitems.forEach((element)=>{
  element.addEventListener("click",()=>{
    muteall();
    element.classList.remove("fa-circle-play");
    element.classList.add("fa-circle-pause");
    songindex=parseInt(element.id);
    audioelement.src=`songs/song${songindex+1}.mpeg`;

      audioelement.play()
        defsongname.innerHTML=songs[songindex].songname;
      playbtn.classList.remove("fa-circle-play")
      playbtn.classList.add("fa-circle-pause")
      playinggif.style.opacity="1";



      })
})

// mute all the buttons function

function muteall(){
     songitems.forEach((element)=>{
    element.classList.remove("fa-circle-pause")
    element.classList.add("fa-circle-play")
  }
)}


// previos button working

prevbtn.addEventListener("click",()=>{

  if (songindex>0){
    songindex=songindex-1;
    audioelement.src=`songs/song${songindex+1}.mpeg`;
    audioelement.play();
      defsongname.innerHTML=songs[songindex].songname;
    playbtn.classList.remove("fa-circle-play")
    playbtn.classList.add("fa-circle-pause")
    playinggif.style.opacity="1";



   muteall();

    songitems.forEach((element)=>{
    elementsindex=parseInt(element.id);
    if (elementsindex==songindex)
    {
      element.classList.remove("fa-circle-play");
      element.classList.add("fa-circle-pause");
    }
    })
  }
  else{
    songindex=9;
    audioelement.src=`songs/song${songindex+1}.mpeg`;
    audioelement.play();
    defsongname.innerHTML=songs[songindex].songname;
    playbtn.classList.remove("fa-circle-play")
    playbtn.classList.add("fa-circle-pause")
    playinggif.style.opacity="1";
    muteall();
    songitems.forEach((element)=>{

    elementsindex=parseInt(element.id);
    if (elementsindex==songindex)
    {
      element.classList.remove("fa-circle-play");
      element.classList.add("fa-circle-pause");
    }
    })




  }
})

// forward button working

forwbtn.addEventListener("click",()=>{

  if (songindex<9){
    songindex=songindex+1;
    audioelement.src=`songs/song${songindex+1}.mpeg`;
    audioelement.play();
    defsongname.innerHTML=songs[songindex].songname;
    playbtn.classList.remove("fa-circle-play")
    playbtn.classList.add("fa-circle-pause")
    playinggif.style.opacity="1";


 // muting all play buttons and changing the current song mode by matching index
    muteall();
    songitems.forEach((element)=>{

    elementsindex=parseInt(element.id);
    if (elementsindex==songindex)
    {
      element.classList.remove("fa-circle-play");
      element.classList.add("fa-circle-pause");
    }
    })
  }
  else{
    songindex=0;
    audioelement.src=`songs/song${songindex+1}.mpeg`;
      defsongname.innerHTML=songs[songindex].songname;
    audioelement.play();
    playbtn.classList.remove("fa-circle-play")
    playbtn.classList.add("fa-circle-pause")
    playinggif.style.opacity="1";




    muteall();
    songitems.forEach((element)=>{

    elementsindex=parseInt(element.id);
    if (elementsindex==songindex)
    {
      element.classList.remove("fa-circle-play");
      element.classList.add("fa-circle-pause");
    }
    })

  }
})



// after song completion
// const mediaQuery=window.matchMedia('(max-width:400px)')
// if (mediaQuery.matches){
//
//   document.getElementById("maincontainer").classList.remove("container");
//     document.getElementById("maincontainer").classList.add("subcontainer");
// }
