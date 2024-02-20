export default function HeroSection() {
    return (
        <section id="HeroSection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <p className="section--title">Hey, I'm Larry </p>
                    <h1 className="hero--section--title">
                        <span className="hero--section-title--color">Full Stack</span>{" "} 
                        <br />
                        Developer
                    </h1>
                    <p className="hero--section-description">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        <br /> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore, sunt repellat. Corrupti, labore iste.
                    </p>
                </div>
                <button className="btn btn-primary"> Get In Touch</button>
            </div>
            <div className="hero--section--img">
                <img src="./img/Larry.png" alt="Hero Section" />
            </div>
        </section>
    )
    
}