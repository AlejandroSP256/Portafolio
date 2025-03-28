import { Navbar } from './componentes/navbar';
import { Content } from './componentes/content';
import './assets/css/App.css'
import { Contact } from './componentes/contact';

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Content />
      <hr />
      <Contact />
    </div>
  );
}