window.onload = function () {

    let game = new Game();
    game.screen=document.querySelector(".game");
    game.areabox=document.querySelector(".areabox");
    game.fenshubox=document.querySelector("#fenshu");
    game.smbox=document.querySelector("#sm");
    game.fraction=document.querySelector(".fraction");
    game.play=document.querySelector("#play");
    let reset=document.querySelector(".areabox button");
    let sound=document.querySelector("#sound");
    let audio=document.querySelector("audio");
    let key=document.querySelector(".key");
    let num=6;
    let num1=0;
    let flag=false;
    let num2=0;
    for(let i=0;i<num;i++){
        game.createLetter();
    }
    key.onclick=function (e) {
        if(e.target.className!="key"&&flag==true){
            let text=e.target.innerText;
            game.remover(text,1)
        }
    }
    key.ontouchstart=function (e) {
        if(e.target.className!="key"&&flag==true){
            e.target.classList.add("hot")
        }
    }
    key.ontouchend=function (e) {
        if(e.target.className!="key"&&flag==true){
            e.target.classList.remover("hot")
        }
    }
    play.onclick=function () {
        if(num1%2==0){
            play.style="background:url(img/Pause.png);background-size:contain;";
            game.createdown()
            flag=true
        }else {
            play.style="background:url(img/Play.png);background-size:contain;";
           game.pause()
            flag=false
        }
        num1++
    }
    reset.onclick=function(){
        game.reset();
        for(let i=0;i<num;i++){
            game.createLetter();
        }
        num1=num2=0
    }
    sound.onclick=function(){
        if(num2%2==0){
            sound.style="background:url(img/Apause.png);background-size:contain;";
            audio.src=""
        }else {
            sound.style="background:url(img/Aplay.png);background-size:contain;";
            audio.src="bgMusic.mp3"
        }
        num2++
    }









}