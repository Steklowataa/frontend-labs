import ProfileCardGrid from "../components/Lab1/ProfileCardGrids";
import {data} from "../data/module-data"

function Lab1() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Lista Osób</h1>
        <ProfileCardGrid people={data} columns={3}/>
      </header>
    </div>
  );
}

export default Lab1;