import React from "react";
import "./CollectionsSection.css"

import collectionImage1 from "../assets/images/collection-image-1.png";
import collectionImage2 from "../assets/images/collection-image-2.png";
import collectionImage3 from "../assets/images/collection-image-3.png";

function CollectionsSection() {
    const images = [collectionImage1, collectionImage2, collectionImage3];

    return (
        <section id="collections-section">
            <div className="collections-images">
                <img src={images[0]} alt="Imagem de mulher pintando"/>
                <img src={images[1]} alt="Arte que retrata um rosto feminino"/>
                <img src={images[2]} alt="Arte abstrata"/>
            </div>
            <div className="collections-text">
                <h3>Confira as ultimas coleções</h3>
                <button>VER MAIS</button>
            </div>
        </section>
    )
}

export default CollectionsSection;