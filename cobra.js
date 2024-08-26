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
      if ((this.x + this.tamanho > tela.largura)
           ||(this.x < 0)
           ||(this.y +this.tamanho > tela.altura+placar.altura)
           ||(this.y < 60)
      )
      this.morrer()
   },
   morrer(){
      this.vida--;
      if (this.vida == 2)
         this.cor = "orange"
      if (this.vida == 1)
         this.cor="red"
      this.x=400;
      this.y=260;

   }
    
      


 }


