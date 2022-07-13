import React from "react";
import "./PresentationSection.css";

import PresentationImage from "../assets/images/presentation-image.png"

function PresentationSection() {
    return (
        <section id="presentation-section">
            <div className="presentation-text">
                <h2>Descubra novos artistas e suas obras</h2>
                <p>Uma nova geração de jovens artistas surgem</p>
                <button>EXPLORAR</button>
                <div className="hits-wrapper">
                    <div className="hit">
                        <h4>+2 mil</h4>
                        <span>Artistas</span>
                    </div>
                    <div className="hit">
                        <h4>+7 mil</h4>
                        <span>Vendas</span>
                    </div>
                    <div className="hit">
                        <h4>+16 mil</h4>
                        <span>Avaliações</span>
                    </div>
                </div>
            </div>
            <img className="presentation-image" src={PresentationImage} alt="Imagem de arte"/>
        </section>
    )
}

export default PresentationSection;