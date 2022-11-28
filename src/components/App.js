import { useState, useEffect } from 'react';
import '../styles/core/reset.scss';
import '../styles/App.scss';
// import data from "../data/adalabers.json";
import fetchAdalabers from "../services/api";
  
function App() {
  const [adalabers, setAdalabers] = useState([]);
  const [newAdalaber, setNewAdalaber] = useState({
    name: "",
    counselor: "",
    speciality: ""
  })

  const htmlData = adalabers
  .map((adalaber) => {
    return (<tr><td>{adalaber.name}</td><td>{adalaber.counselor}</td><td>{adalaber.speciality}</td></tr>)
  }
  )

const handleNewAdalaber = (ev) => {
  setNewAdalaber({...newAdalaber, [ev.target.id] : ev.target.value})
}

const handleClickAdd = (ev) => {
  ev.preventDefault();
  setAdalabers([...adalabers, newAdalaber]);
  setNewAdalaber({
    name: "",
    counselor: "",
    speciality: ""
  })
}
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

          <h2>Añadir una adalaber</h2>
          <form>
            <label htmlFor="name">Nombre: </label>
            <input type="text" id="name" name="name" value={newAdalaber.name} onInput={handleNewAdalaber}/>
            <label htmlFor="counselor">Tutora: </label>
            <input type="text" id="counselor" name="counselor" value={newAdalaber.counselor} onInput={handleNewAdalaber}/>
            <label htmlFor="speciality">Especialidad: </label>
            <input type="text" id="speciality" name="nspecialityame" value={newAdalaber.speciality} onInput={handleNewAdalaber}/>
            <input type="submit" value="Añadir una nueva Adalaber" onClick={handleClickAdd}/>
          </form>
        </main>
      </div>

  );
}

export default App;
