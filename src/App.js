import "./App.css";
import Footer from "./components/Footer/Footer";
import FormComment from "./components/Footer/FormComment";

import ItemListComment from "./components/Footer/ItemListComment";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";

function App() {
  return (
    <>
      <Header />
      <Home />
      <FormComment />
      <ItemListComment />
      <Footer />
    </>
  );
}

export default App;
