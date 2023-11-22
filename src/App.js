import React from 'react';
import './App.css';
import Data from './components/Data/data';
import darkSouls3 from './images/dark-souls-3.jpg'
import eldenRing from './images/elden-ring.jpg'
import sekiro from './images/sekiro.jpg'
import liesOfp from './images/Lis-of-p.jpg'
import theWitcher3 from './images/The-witcher-3.jpg'

const DATA = [
  {
      id: 0,
      title: "Dark Souls 3",
      raiting: "9.0",
      poster: darkSouls3
  },
  {
      id: 1,
      title: "Elden ring",
      raiting: "10.0",
      poster: eldenRing
  },
  {
      id: 2,
      title: "Sekiro",
      raiting: "9.5",
      poster: sekiro
  },
  {
      id: 3,
      title: "Lies of P",
      raiting: "9.9",
      poster: liesOfp
  },
  {
      id: 4,
      title: "The Witcher 3",
      raiting: "10.0",
      poster: theWitcher3
  }
]



function App() {
  return (
    <div className="App">
      {DATA.map(el => {
        return (

          <Data 
           key = {el.id}
           title = {el.title}
           raiting = {el.raiting}
           poster = {el.poster}
    
          />
        )
        
      })}
    </div>
  );
}

export default App;
