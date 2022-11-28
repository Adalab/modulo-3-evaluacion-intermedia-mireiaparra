import { useState } from 'react';
import '../styles/core/reset.scss';
import '../styles/App.scss';
import data from "../data/adalabers.json";
  
function App() {
  const [adalabers, setAdalabers] = useState(data);

  

  const htmlData = adalabers.results
  .map((adalaber) => {
    return (<tr><td>{adalaber.name}</td><td>{adalaber.counselor}</td><td>{adalaber.speciality}</td></tr>)
  }
  )

  return (
    <div className="App">
        <main>
          <table className="table">
          <thead><tr>
           <th>Nombre</th>
           <th>Tutora</th>
           <th>Especialidad</th>
          </tr></thead>
          <tbody>
            {htmlData}
          </tbody>
          </table>
        </main>
      </div>

  );
}

export default App;
