import React from 'react';
import './carousel.css';
// import {Container} from './style'
import Imagem01 from '../../imagens/moto.jpg';


export default function Carousel(){
    
    return(
        <div className="carousel">
        <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner"/>
                <div class="carousel-item active"/>
                <img src={Imagem01}></img>
            <div class="carousel-caption d-none d-md-block">
                <h5 className="subtitulo-h5"> 10 Picolés </h5>
                <p className="paragrafo-p">Tudo por R$6,00. Venha aproveitar!</p>
            </div>
        </div>
        <div class="carousel-item">
            <img src={Imagem02}></img>
            <div class="carousel-caption d-none d-md-block">
                <h5 className="subtitulo-h5"> Sorvetes </h5>
                <p className="paragrafo-p"> Dois sorvetes por R$15,00. Venha conferir! </p>
            </div>
        </div>
        <div class="carousel-item">
            <img src={Imagem03}></img>
            <div class="carousel-caption d-none d-md-block">
                <h5 className="subtitulo-h5"> Quarta da alegria </h5>
                <p className="paragrafo-p"> Toda quarta-feira uma promoção + entrega. Fique atento em nossas redes sociais! </p>
            </div>
        </div>
  
        <div>
            <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Anterior</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Próximo</span>
            </a>
        </div>
        
    </div>
    )

}

$('.carousel').carousel({
    interval: 2000
})