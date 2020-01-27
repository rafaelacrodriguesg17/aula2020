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
                <h5 className="subtitulo-h5">First slide label</h5>
                <p className="paragrafo-p">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </div>
        </div>
        <div class="carousel-item">
            <img src={Imagem02}></img>
            <div class="carousel-caption d-none d-md-block">
                <h5 className="subtitulo-h5">Second slide label</h5>
                <p className="paragrafo-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
        </div>
        <div class="carousel-item">
            <img src={Imagem03}></img>
            <div class="carousel-caption d-none d-md-block">
                <h5 className="subtitulo-h5">Third slide label</h5>
                <p className="paragrafo-p">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </div>
        </div>
  
        <div>
            <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
        
    </div>
    )

}

$('.carousel').carousel({
    interval: 2000
})