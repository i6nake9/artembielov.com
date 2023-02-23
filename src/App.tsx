import { useState } from 'react';

import Contact from './components/Contact';
import Main from './components/Main';
import Projects from './components/Projects';
import Sidenav from './components/Sidenav';

function App() {
  return (
    <div>
      <Sidenav />
      <Main />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
