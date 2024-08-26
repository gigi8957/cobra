function jogar(){
    tela.desenhar();
    placar.desenhar();
    cobra.desenhar();
    comida.desenhar();
    cobra.mover();
    if (comida.colidir(cobra)){
        placar.pontos+=comida.valor;
        comida = new Comida(comida.valor+5,30,400)
    }
    if(cobra.vida > 0)
       requestAnimationFrame(jogar);
    else{
        placar.nomeJogo="FIM DE JOGO";
        placar.desenhar();
    }


}
let comida = new Comida(10,30);
requestAnimationFrame(jogar)
document.addEventListener("keydown", (evento) => {
    if (evento.key == 6) cobra.direcao=0;
    if (evento.key == 2) cobra.direcao=90;
    if (evento.key == 4) cobra.direcao=180;
    if (evento.key == 8) cobra.direcao=270;
    console.log("Tecla Pressionada: " + evento.key);
})