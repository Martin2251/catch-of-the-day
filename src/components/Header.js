import React from "react"

const Header = ({tagline}) => {
    return(
    <header className="top">
        <h1>catch
            <span className="ofThe">
                <span className="of">Of</span>
                <span className="the">The</span>
            </span>
            Day
        </h1>
    <h3 className="tagline">
        <span>{tagline}</span>
    </h3>
     </header>
    )
    
}

export default Header