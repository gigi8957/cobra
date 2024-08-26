class objetoJogo{
    constructor(args){
        this.tamanho=15;
        this.x = Math.random()*(tela.largura-this.tamanho);
        this.y = Math.random()*(tela.altura-this.tamanho) + placar.altura;
        if (args.length >=1) this.tamanho = args[0];
        if (args.length >=2) this.x = args[1];
        if (args.length >=3) this.y = args[2];
    }
    colidir(obj){
        let distX=this.x-obj.x;
        let distY=this.y-obj.y;
        if (((distX >= 0) && (Math.abs(distX) < obj.tamanho)
            || (distX < 0) && (Math.abs(distX) < this.tamanho))
            &&
            ((distY >= 0) && (Math.abs(distY) < obj.tamanho)
            || (distY < 0) && (Math.abs(distY) < this.tamanho)))
            return true
        
        return false
            


    }

}