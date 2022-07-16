import React from "react";
import "./ArtistsSection.css"

import Image1 from "../assets/images/artist-image-1.png";
import Image2 from "../assets/images/artist-image-2.png";
import Image3 from "../assets/images/artist-image-3.png";


function ArtistsSection() {
    const images = [Image1, Image2, Image3];
    const background = (image) => {return { backgroundImage: 'url(' + image + ')' } };

    return (
        <section id="artists-section">
            <h3>Artistas</h3>
            <div className="artists-container">
                <div className="artist-card" style={background(images[0])}>
                    <h4>Sabine Lowe</h4>
                    <p>Design e Fotógrafa</p>
                </div>
                <div className="artist-card" style={background(images[1])}>
                    <h4>Eleanor Pena</h4>
                    <p>Escritora e Design</p>
                </div>
                <div className="artist-card" style={background(images[2])}>
                    <h4>Leslie Alexander</h4>
                    <p>Diretora de arte</p>
                </div>
            </div>
        </section>
    )
}

export default ArtistsSection;