import React, {useEffect} from 'react';
import WOW from 'wow.js';

import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

function App() {

  useEffect(() => {
    new WOW().init();
  }, []);

  return (
    <div className="App">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
