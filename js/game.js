class Game{
    constructor(){
        this.screen=""
        this.letters=[]
        this.fenshubox=""
        this.smbox=""
        this.fenshu=0
        this.sm=10
        this.areabox=""
        this.play=""
        this.fraction=100
    }
    //创建字符
    createLetter(){
        let ASCII,letter;
        do{
            ASCII = Math.floor(Math.random()*26+65);
            letter = String.fromCharCode(ASCII);
        }while(letterrepeat(letter,this.letters))

        let div = document.createElement("div");
        let left;
        do{
            left=Math.random()*(7.5-0.53*4)+0.53;
        }while(leftrepeat(left,this.letters));
        let top=Math.random()

        div.style=`background-image: url(img/A_Z/${letter}.png);left:${left}rem;top:${top}rem;`
        this.screen.appendChild(div);
        let src={}
        src['top']=top
        src['left']=left
        src['code']=div
        src['name']=letter
        src['speed']=Math.random()*0.05+0.05
        this.letters.push(src);
    }
    //下落
    createdown(){
        this.t=setInterval(()=>{
            for(let item of this.letters){
                if(item['top']>7.94){
                    this.remover(item['name'],0);
                    continue;
                }
                item['top']+=item['speed']
                item['code'].style.top=item['top']+"rem"
            }
            this.show()
        },100)
    }
    //移除
    remover(letter,type){  //传入字母
        for(let item of this.letters){
            if(item['name']==letter){
                let index=this.letters.indexOf(item);
                this.screen.removeChild(item['code']);
                this.letters.splice(index,1);
                this.createLetter();
                if(type==0){
                    this.sm--
                }else {
                    this.fenshu++
                }
            }
        }
    }

    pause(){
        clearInterval(this.t)
    }
    show(){
        if(this.sm<=0){
            clearInterval(this.t)
            this.areabox.style.display="block"
        }
        this.fenshubox.innerText=this.fenshu;
        this.smbox.innerText=this.sm;
        this.fraction.innerText=this.fenshu;
    }

    reset(){
        this.areabox.style.display="none"
        clearInterval(this.t)
        this.play.style="background:url(img/Play.png);background-size:contain;";
        for(let item of this.letters){
            this.screen.removeChild(item['code']);
        }
        this.letters=[]
        this.sm=10
        this.fenshu=0
        this.show()
    }

}
function leftrepeat(left,letters) {
    for(item of letters){
        if(Math.abs(item['left']-left)<0.53){
            return true
        }
    }
    return false
}

function letterrepeat(letter,letters) {
    for(item of letters){
        if(item['name']==letter){
            return true
        }
    }
    return false
}



