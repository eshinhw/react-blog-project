import { useState } from "react";
import "./App.css";
import Modal from "./Modal";

const data = [
  { title: "Men's Fashion", date: "2021 August 23" },
  { title: "Women's Fashion", date: "2023 September 1" },
  { title: "Children's Toy", date: "2011 March 13" },
];

function App() {
  const [date, setDate] = useState("August 31, 2023");
  const [likeCount, setLikeCount] = useState(0);

  const [titles, setTitles] = useState(["Men's Fashion", "Women's Fashion", "Children"]);
  const [currTitle, setCurrTitle] = useState(0);
  const [likes, setLikes] = useState([0]);
  const [modal, setModal] = useState(false);

  const increaseLike = (e) => {
    setLikes([...likes]);
  };

  const changeTitle = () => {
    let copy = [...titles];
    copy[0] = "Second Title";
    setTitles(copy);
  };

  const sortTitles = () => {
    let copy = [...titles];
    copy.sort();
    setTitles(copy);
  };

  return (
    <div className="App">
      <div className="navbar">
        <p style={{ fontSize: "30px" }}>ReactBlog</p>
      </div>
      <div className="list">
        {titles.map((title, idx) => {
          return (
            <div key={idx} className="list-item">
              <h2 onClick={() => {
                setModal(!modal);
                setCurrTitle(idx);
              }}>
                {title} <span onClick={increaseLike}>👍 {likes[idx] + 1}</span>{" "}
              </h2>

              {/* <p>{d.date}</p> */}
            </div>
          );
        })}
      </div>

      {
        modal ? <Modal titles={titles} currTitle={currTitle} changeTitle={changeTitle} /> : null // ternary operator
      }

      <button onClick={sortTitles}>Sort</button>

      <button onClick={changeTitle}>Change Title</button>
    </div>
  );
}

export default App;
