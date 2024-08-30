import React from "react"

function Info() {
    return (
        <main>
            <img src="./images/businessCard.png" className="main-image"/>
            <h1 className="name">Jeremy Tipton</h1>
            <h3 className="job">Frontend Developer</h3>
            <p className="website">Link: <a href="https://tiptonspiderj1.com/">My website</a></p>
            <div className="buttons">
                <a href="mailto:tiptonspiderj1@aol.com">
                    <button type="button" className="email">
                        <i className="fa-solid fa-envelope main-icon"></i>
                    Email</button>
                </a>
                <a href="https://www.linkedin.com/in/jeremytipton1/">
                    <button type="button" className="linkedin">
                        <i className="fa-brands fa-linkedin main-icon"></i>
                    LinkedIn</button>
                </a>
            </div>
        </main>
    )
}

export default Info