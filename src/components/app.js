import React from 'react';
import Header from './Header';
import Section from './Section';

const hobbies = ['cantar', 'bailar', 'hacer natación', 'jugar con mi hijo', 'salir a caminar'];

const App = () => (
  <div>
    <Header />
    <Section hobbies={hobbies} />
  </div>
)

export default App
