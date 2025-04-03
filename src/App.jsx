import './assets/css/App.css'
import { Navbar } from './componentes/navbar/navbar';
import { Content } from './componentes/content/content';
import { Contact } from './componentes/contact/contact';
import { Skills } from './componentes/skills/skills';

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Content />
      <h3 className='skills-title'>Skills</h3>
      <Skills />
      <hr />
      <Contact />
    </div>
  );
}