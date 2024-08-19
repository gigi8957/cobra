class Comida {
    arqImagem = "comida.png"
    constructor (valor, tamanho) {
        this.valor = valor;
        this.tamanho = tamanho;
        this.x = 50;
        this.y = 300;
        this.imagem = new Image()
        this.imagem.src = this.arqImagem
    }
    desenhar(){
        canvasCtx.drawImage (this.imagem, this.x, this.y, this.tamanho, this.tamanho);
    }
}
