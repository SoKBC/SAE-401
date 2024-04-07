import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Accueil from './accueil.js';
import Header from './header.js';
import Footer from './footer.js';
import Equipe from './PageMenu/NousConnaitre.js'
import LoginForm from './PageMenu/LogIn.js';
import Forum from './PageMenu/forum.js';
import ActivitesCulturelles from './PageMenu/ActivitesCulturelles.js';
import Adherer from './PageMenu/Adherer.js';
import Promouvoir from './PageMenu/Promouvoir.js';
import Apprendre from './PageMenu/Apprendre.js';
import Divers from './PageMenu/Divers.js';
import Enseigner from './PageMenu/Enseigner.js';
import {navigation} from './menu';
import Carouselforum from './PageMenu/forum.js';



function App() {
  return (
    <div className="">
    <Router>
      <Header title="" sections={Header}/>
      <Routes>
        <Route index element={<Accueil/>}/>
        <Route path="/accueil" element={<Accueil/>}/>
        <Route path="/forum" element={<Forum />} />
        <Route path="/nousconnaitre" element={<Equipe />} />
        <Route path="/LogIn" element={<LoginForm />} />
        <Route path="/ActivitesCulturelles" element={<ActivitesCulturelles />} />
        <Route path="/Adherer" element={<Adherer />} />
        <Route path="/Promouvoir" element={<Promouvoir />} />
        <Route path="/Apprendre" element={<Apprendre />} />
        <Route path="/Divers" element={<Divers />} />
        <Route path="/Enseigner" element={<Enseigner />} />
        <Route path="/forum" element={<Carouselforum />} />
      </Routes>
    
      <Footer title="" sections={Footer}/>
    </Router>
    </div>
  );
}

export default App;