import React from 'react';
import './styles.css'


function Header(){
    return (
        <>
       <header>
        <title>KnitterCritter</title>
        <nav>
            <a href="#">Home</a>
            <a href="#">Inspiration</a>
            <a href="#">Blog</a>
            <a href="#">Contact Me</a>
        </nav>
        <img href="http://localhost:5173/#"class="knit-logo" src="https://i.ibb.co/JrgyRMZ/Knit-Critters-logo.png"></img>
       </header>
        </>
    );
}

export default Header