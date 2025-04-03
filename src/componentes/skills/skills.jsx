import './skills.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faCss } from '@fortawesome/free-brands-svg-icons';
import { faJs } from '@fortawesome/free-brands-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faNodeJs } from '@fortawesome/free-brands-svg-icons';
import { faGitAlt } from '@fortawesome/free-brands-svg-icons';
import { faFigma } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { faAngular } from '@fortawesome/free-brands-svg-icons';


const Skill = ({ icon, name }) => (
    <li>
        <div>
            <FontAwesomeIcon icon={icon} fontSize={'5rem'} />
        </div>
        <span>{name}</span>
    </li>
)

export function Skills() {
    return (
        <section className="skills" id="skills">
            <div className="skills-container">
                <ul>
                    <Skill icon={faHtml5} name="HTML" />
                    <Skill icon={faCss} name="CSS" />
                    <Skill icon={faJs} name="JavaScript" />
                    <Skill icon={faReact} name="React" />
                    <Skill icon={faAngular} name="Angular" />
                    <Skill icon={faNodeJs} name="Node.js" />
                    <Skill icon={faDatabase} name="SQL" />
                    <Skill icon={faGitAlt} name="Git" />
                    <Skill icon={faFigma} name="Figma" />
                </ul>
            </div>
        </section>
    );
}