import React from "react";
import "./Main.css"
import PresentationSection from "./PresentationSection";
import CollectionsSection from "./CollectionsSection";
import ArtistsSection from "./ArtistsSection";

function Main() {
    return (
        <main>
            <PresentationSection/>
            <CollectionsSection/>
            <ArtistsSection/>
        </main>
    )
}

export default Main;