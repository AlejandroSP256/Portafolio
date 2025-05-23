import './contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

export function Contact() {
    return (
        <footer id='contact'>
            <h3>Contact</h3>
            <div className="social-icons">
                <a href="https://linkedin.com/in/alejandrosp256" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
                <a href="https://github.com/AlejandroSP256" target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
                <a href="https://twitter.com/AlejandroSP256" target="_blank"><FontAwesomeIcon icon={faXTwitter} /></a>
                <a href="https://www.instagram.com/alejandev256/" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
                <a href="mailto:alejandrosp256@gmail.com" target="_blank"><FontAwesomeIcon icon={faEnvelope} /></a>
                <a href="https://wa.me/+18094015335" target="_blank"><FontAwesomeIcon icon={faWhatsapp} /></a>
            </div>
        </footer>
    )
}