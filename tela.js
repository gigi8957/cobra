const tela = {
    largura: 800,
    altura: 400,
    cor: "green",

    desenhar(){
        canvasCtx.fillStyle = this.cor;
        canvasCtx.fillRect(0,60,this.largura,this.altura)
    }
}
