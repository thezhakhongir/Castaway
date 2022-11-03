import "./App.css";
import Footer from "./components/Footer";
import FormComment from "./components/FormComment";

import ItemListComment from "./components/ItemListComment";

function App() {
  return (
    <div>
      <FormComment />
      <ItemListComment />
      <Footer />
    </div>
  );
}

export default App;
