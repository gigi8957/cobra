const placar = {
    largura: 800,
    altura: 60,
    cor: "#6b8e23",
    pontos: 0,
    corTexto: "white",
    nomeJogo: "IFRJ GAME",

    desenhar(){
        canvasCtx.fillStyle = this.cor;
        canvasCtx.fillRect(0,0,this.largura,this.altura);
        canvasCtx.font = "25px Lucida Console";
        canvasCtx.textAlign = "center";
        canvasCtx.textBaseline = "middle";
        canvasCtx.fillStyle = this.corTexto;
        canvasCtx.fillText(this.nomeJogo,100,30);

    }

}
