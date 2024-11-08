import reactLogo from "./assets/react.svg";
// import RemoteApp from "remote/App";
import { Button } from "@repo/ui";

function App() {
  return (
    <div className="App">
      <Button backgroundColor="red" label="Test" />
      <img src={reactLogo} className="logo react" alt="React logo" />
      <h1>Host App</h1>
      {/* <RemoteApp /> */}
    </div>
  );
}

export default App;
