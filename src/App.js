import "./App.css";
import { Episodes } from "./components/Episodes/Episodes";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { About } from "./components/About/About";
import ItemListComment from "./components/Form/ItemListComment";
import FormComment from "./components/Form/FormComment";
import { useState } from "react";
import Footer from "./components/Footer/Footer";

function App() {
  const [comments, setComments] = useState([]);

  const addNewCommentHandler = (newComment) => {
    setComments([...comments, newComment]);
  };
  return (
    <>
      <Header />
      <Home />
      <Episodes />
      <About />
      <FormComment addNewComment={addNewCommentHandler} />
      <ItemListComment comments={comments} />
      <Footer />
    </>
  );
}

export default App;
