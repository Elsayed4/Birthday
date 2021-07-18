import { useState } from 'react';
import './index.css';

import List from './List';
import data from './data';
function App() {
  const [people,setpeople] = useState(data); 

  return (
    <main className="container">
      <section>
         <h3> {people.length} Birth Day Today</h3>  
         <List people={people}/>
         <button onClick={() =>setpeople([]) }>Clear All</button>
         </section>
    </main>
  );
}

export default App;
