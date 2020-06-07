import React from "react";


function Footer(){
    const year = new Date().getFullYear();
    return(
        <div className = "footer">
            <p>Made with ❤ by Nabeel Ahmed <br />Copyright ⓒ {year}<br /></p>
            
        </div>
    );
}

export default Footer;