import './App.css';
import Nav from './Nav';
import Home from './Home';
import Podcast from './Podcast';
import MoviesTable from './Movies';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Podcast" element={<Podcast />} />
        <Route path="/Movies" element={<MoviesTable />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// import { useState } from 'react';
// function GoButton(props: any) {
//   return (
//     <div>
//       <button onClick={props.onClick}>Go!</button>
//       <br />
//     </div>
//   );
// }
// function AmountOfGo(props: any) {
//   return <label>{props.show}</label>;
// }

// function App() {
//   const [count, setCount] = useState(0);
//   const incrementGo = () => setCount(count + 1); //pointer to a function
//   return (
//     <div>
//       <Welcome />
//       <GoButton onClick={incrementGo} />
//       <AmountOfGo show={count} />
//     </div>
//   );
// }
