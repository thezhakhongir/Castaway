import "./App.css";
import { Episodes } from "./components/Episodes/Episodes";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { About } from "./components/About/About";
import ItemListComment from "./components/Form/ItemListComment";
import FormComment from "./components/Form/FormComment";
import { useEffect, useState } from "react";
import Footer from "./components/Footer/Footer";

const raw = JSON.parse(localStorage.getItem("comment"));
function App() {
  const [comments, setComments] = useState([]);

  const addNewCommentHandler = (newComment) => {
    setComments([...comments, newComment]);
  };
  const deleteHandler = (id) => {
    setComments([...comments].filter((comment) => comment.id !== id));
  };
  useEffect(() => {
    localStorage.setItem("comment", JSON.stringify(comments));
  }, [comments]);
  useEffect(() => {
    setComments(raw);
  }, []);
  return (
    <>
      <Header />
      <Home />
      <Episodes />
      <About />
      <FormComment addNewComment={addNewCommentHandler} />
      <ItemListComment comments={comments} onDelete={deleteHandler} />
      <Footer />
    </>
  );
}

export default App;
