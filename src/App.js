import { useState } from "react";
import "./App.css";
import Modal from "./Modal";
import PostForm from "./PostForm";

const data = [
  { title: "Men's Fashion", date: "2021 August 23" },
  { title: "Women's Fashion", date: "2023 September 1" },
  { title: "Children's Toy", date: "2011 March 13" },
];

function App() {
  const [titles, setTitles] = useState(["Men's Fashion", "Women's Fashion", "Children"]);
  const [currTitle, setCurrTitle] = useState(0);
  const [likes, setLikes] = useState([0]);
  const [modal, setModal] = useState(false);
  const [title, setTitle] = useState("");

  const handleChange = (e) => {
    setTitle(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    let copy = [...titles, title];
    setTitles(copy);
    e.currentTarget.value = "";
  };

  const increaseLike = (e) => {
    setLikes([...likes]);
  };

  const sortTitles = () => {
    let copy = [...titles];
    copy.sort();
    setTitles(copy);
  };

  return (
    <div className="App">
      <div className="navbar">
        <p style={{ fontSize: "30px" }}>React Blog</p>
      </div>
      <div className="list">
        {titles.map((title, idx) => {
          return (
            <div key={idx} className="list-item">
              <h2
                onClick={() => {
                  setModal(!modal);
                  setCurrTitle(idx);
                }}
              >
                {title}
              </h2>
              <span onClick={increaseLike}>👍 {likes[idx] + 1}</span>
            </div>
          );
        })}
      </div>

      <label>
        Title:
        <input type="text" name="title" value={title} onChange={handleChange} />
      </label>
      <button onClick={handleSubmit}>Submit</button>

      {
        modal ? <Modal titles={titles} currTitle={currTitle} /> : null // ternary operator
      }

      <button onClick={sortTitles}>Sort</button>
    </div>
  );
}

export default App;
