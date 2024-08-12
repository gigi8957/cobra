const cobra = {
    x: 400,
    y: 260,
    tamanho: 10,
    vida: 3,
    cor: "#d02090",
    direcao: 0,

    desenhar(){
        canvasCtx.fillStyle = this.cor;
        canvasCtx.fillRect(this.x,this.y,this.tamanho,this.tamanho);
    },

    mover(){
        if (this.direcao == 0)
           this.x++
        if (this.direcao == 90)
           this.y++
        if (this.direcao == 180)
           this.x--
        if (this.direcao == 270)
           this.y--
        
    }

}
