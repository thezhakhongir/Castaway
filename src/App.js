import "./App.css";
import { Episodes } from "./components/Episodes/Episodes";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";

function App() {
  return (
    <>
      <Header />
      <Home />
      <Episodes />
    </>
  );
}

export default App;
