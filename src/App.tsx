import ProfileCardGrid from "./components/ProfileCardGrids";
import {data} from "./lab01/module-data"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Lista Osób</h1>
        <ProfileCardGrid people={data} columns={3}/>
      </header>
    </div>
  );
}

export default App;