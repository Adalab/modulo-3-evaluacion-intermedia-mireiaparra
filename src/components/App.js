import { useState, useEffect } from 'react';
import '../styles/core/reset.scss';
import '../styles/App.scss';
// import data from "../data/adalabers.json";
import fetchAdalabers from "../services/api";
  
function App() {
  const [adalabers, setAdalabers] = useState([]);

  const htmlData = adalabers
  .map((adalaber) => {
    return (<tr><td>{adalaber.name}</td><td>{adalaber.counselor}</td><td>{adalaber.speciality}</td></tr>)
  }
  )

  useEffect(() => {
    fetchAdalabers().then((data) => {
      setAdalabers(data.results);
    });
  }, []);

  return (
    <div className="App">
      <header>
        <h1>Adalabers</h1>
      </header>
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
