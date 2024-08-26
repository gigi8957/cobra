const placar = {
    largura: 800,
    altura: 60,
    cor: "#6b8e23",
    pontos: 0,
    corTexto: "#2F4F4F",
    nomeJogo: "IFRJ GAME",

    desenhar(){
        canvasCtx.fillStyle = this.cor;
        canvasCtx.fillRect(0,0,this.largura,this.altura);
        canvasCtx.font = "26px Fantasy";
        canvasCtx.textAlign = "center";
        canvasCtx.textBaseline = "middle";
        canvasCtx.fillStyle = this.corTexto;
        canvasCtx.fillText(this.nomeJogo,100,30);
        canvasCtx.font = "16px Fantasy";
        canvasCtx.textAlign = "right";
        canvasCtx.fillText(cobra.vida+" vida(s)",780,15)
        canvasCtx.fillText(placar.pontos+" pts",780,45)

    }

}
