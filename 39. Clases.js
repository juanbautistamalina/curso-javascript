class Canal{
    constructor(canal, tipo, espectadores, url){
        this.canal = canal;
        this.tipo = tipo;
        this.espectadores = espectadores;
        this.url = url;
    }

    ir(){
        console.log(this.url);
    }

}


const canal = new Canal("chessbrah", "Chess", 320.000, "https://www.twitch.tv/chessbrah");
console.log(canal)
canal.ir();