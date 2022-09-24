const instrument = document.querySelectorAll('.btn');
const container = document.querySelector('.container');

instrument.forEach((kit)=>{

    let aud = document.createElement('audio');
    container.appendChild(aud);
    aud.src = 'sounds/' +kit.textContent+'.mp3';

   let kitId = kit.id;
   var z=document.getElementById(kitId);
   z.addEventListener('click', ()=>{
    aud.play();
   })
   
   window.addEventListener('keydown',(e)=>{

    if(e.key===kit.textContent[0].toLowerCase()){
    aud.play();
    z.style.transform='scale(0.9)';
    setTimeout(() => {
    z.style.transform='scale(1)';
        
    }, 100);

    } 
})
  
})
