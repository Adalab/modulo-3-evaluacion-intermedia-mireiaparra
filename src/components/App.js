import { useState, useEffect } from 'react';
import '../styles/core/reset.scss';
import '../styles/App.scss';
import fetchAdalabers from "../services/api";
  
function App() {
  const [adalabers, setAdalabers] = useState([]);
  const [newAdalaber, setNewAdalaber] = useState({
    name: "",
    counselor: "",
    speciality: "",
    social_networks: [],
  })

  const [search, setSearch] = useState("");
  const [searchCounselor, setSearchCounselor] = useState("");

  const htmlData = adalabers
  .filter((adalaber) => adalaber.name.toLowerCase().includes(search.toLowerCase()))
  .filter((adalaber) => adalaber.counselor.includes(searchCounselor))
  .map((adalaber) => {
    return (<tr key={adalaber.id} className="table__tr"><td>{adalaber.name}</td><td>{adalaber.counselor}</td><td>{adalaber.speciality}</td><td>{adalaber.social_networks.map((network) => {
      return <a href={network.url}>{`${network.name} `}</a>
    })}</td></tr>)
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
    speciality: "",
    social_networks: [],
  })
}

const handleSearch=(ev) => {
  setSearch(ev.target.value);
}

const handleSearchCounselor=(ev) => {
  setSearchCounselor(ev.target.value);
}
  useEffect(() => {
    fetchAdalabers().then((data) => {
      setAdalabers(data.results);
    });
  }, []);

  return (
    <div className="App">
      <header>
        <h1 className="title">Adalabers</h1>
      </header>
        <main>
          <form className="searchForm">
            <div className="whichName">
            <label htmlFor="searchName">Nombre: </label>
            <input type="search" name="searchName" id="searchName" placeholder="Ej: MariCarmen" value={search} onInput={handleSearch}/>
            </div>
            <div className="whichCounselor">
           <label htmlFor="searchCounselor">Escoge una tutora: </label>
            <select name="searchCounselor" id="searchCounselor" value={searchCounselor} onChange={handleSearchCounselor}>
              <option value="">Cualquiera</option>
              <option>Yanelis</option>
              <option>Dayana</option>
              <option>Iván</option>
            </select>
            </div>
          </form>
          <table className="table">
          <thead>
          <tr className="table__thead">
           <th>Nombre</th>
           <th>Tutora</th>
           <th>Especialidad</th>
           <th>Redes</th>
          </tr></thead>
          <tbody className="table__tbody">
            {htmlData}
          </tbody>
          </table>

          <h2 className="titleAdd">Añadir una adalaber</h2>
          <form className="addForm">
            <div>
            <label htmlFor="name">Nombre: </label>
            <input type="text" id="name" name="name" value={newAdalaber.name} onInput={handleNewAdalaber}/>
            </div>
            <div>
            <label htmlFor="counselor">Tutora: </label>
            <input type="text" id="counselor" name="counselor" value={newAdalaber.counselor} onInput={handleNewAdalaber}/>
            </div>
            <div>
            <label htmlFor="speciality">Especialidad: </label>
            <input type="text" id="speciality" name="nspecialityame" value={newAdalaber.speciality} onInput={handleNewAdalaber}/>
            </div>
            <input className="addButton" type="submit" value="Añadir una nueva Adalaber" onClick={handleClickAdd}/>
          </form>
        </main>
      </div>

  );
}

export default App;
