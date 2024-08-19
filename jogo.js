function jogar(){
    tela.desenhar();
    placar.desenhar();
    cobra.desenhar();
    comida.desenhar();
    cobra.mover();
    requestAnimationFrame(jogar);

}
const comida = new Comida(10,30);
requestAnimationFrame(jogar)
document.addEventListener("keydown", (evento) => {
    if (evento.key == 6) cobra.direcao=0;
    if (evento.key == 2) cobra.direcao=90;
    if (evento.key == 4) cobra.direcao=180;
    if (evento.key == 8) cobra.direcao=270;
    console.log("Tecla Pressionada: " + evento.key);
})
