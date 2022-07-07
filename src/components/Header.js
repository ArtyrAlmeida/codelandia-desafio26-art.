import React from "react";
import "./Header.css"
import searchIcon from "../assets/icons/search-icon.png"

function Header() {
    return (
        <header>
            <div id="header-container">
                <h1>Art.</h1>
                <div id="header-input">
                    <input type="text" placeholder="Buscar"/>
                    <img src={searchIcon} alt="Ícone de busca"/>
                </div>
                <button>ENTRAR</button>
            </div>
        </header>
    );
}

export default Header;