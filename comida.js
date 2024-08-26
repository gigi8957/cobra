<<<<<<< HEAD
class Comida extends objetoJogo{
    arqImagem = "comida.png"
    constructor (valor,...args) {
        super(args)
        this.valor = valor;
        this.imagem = new Image()
        this.imagem.src = this.arqImagem
    }
    desenhar(){
        canvasCtx.drawImage (this.imagem, this.x, this.y, this.tamanho, this.tamanho);
    }
}
=======
class Comida extends objetoJogo{
    arqImagem = "comida.png"
    constructor (valor,...args) {
        super(args)
        this.valor = valor;
        this.imagem = new Image()
        this.imagem.src = this.arqImagem
    }
    desenhar(){
        canvasCtx.drawImage (this.imagem, this.x, this.y, this.tamanho, this.tamanho);
    }
}
>>>>>>> b3ea94cc815dd0a7881d3c380bc09fd76d3d2aa8
