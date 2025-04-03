import './content.css'
import Logo from '/foto.jpg'
import Curriculum from '../../assets/Curriculum.pdf'


export function Content() {
    return (
        <section className="home" id='home'>
            <div className="home-img">
                <img src={Logo} alt="Foto de perfil" />
            </div>
            <div className="home-content">
                <h1>Hi it's <span>Alejandro</span></h1>
                <h3 className="typing-text">I'm a <span> </span></h3>
                <h2>I'm a Software Developer, I love to code and I'm passionate about the web.</h2>
                <a href={Curriculum} className="btn" download>Curriculum</a>
            </div>
        </section>
    )
}