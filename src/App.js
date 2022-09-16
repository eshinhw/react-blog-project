import { useState } from "react";
import "./App.css";

const data = [
  { title: "Men's Fashion", date: "2021 August 23" },
  { title: "Women's Fashion", date: "2023 September 1" },
  { title: "Children's Toy", date: "2011 March 13" },
];

function App() {
  
  const [title, setTitle] = useState("First Title");
  const [date, setDate] = useState("August 31, 2023");
  const [likeCount, setLikeCount] = useState(0);
  
  const [titles, setTitles] = useState(["Men's Fashion", "Women's Fashion", "Children"])
  
  
  const increaseLike = (e) => {
    console.log(e)
    setLikeCount(likeCount + 1);
  }


  const changeTitle = () => {
    setTitle("Second Title");
  }

  const sortTitles = () => {
    let copy = [...titles]
    copy.sort()
    setTitles(copy)
  }

  return (
    <div className="App">
      <div className="navbar">
        <p style={{ fontSize: "30px" }}>ReactBlog</p>
      </div>
      <div className="list">
        {/* {data.map((d, idx) => {
          return (
            <div key={idx} className="list-item">
              <h2>{d.title} <span onClick={increaseLike}>Like</span> {likeCount} </h2>
              <p>{d.date}</p>
            </div>
          );
        })} */}
        <div className="list-item">
          <h2>{ titles[0] } <span onClick={increaseLike}>Like</span> {likeCount}</h2>
          <p>August 23, 2022</p>
        </div>
        <div className="list-item">
          <h2>{ titles[1] }</h2>
          <p>August 23, 2022</p>
        </div>
        <div className="list-item">
          <h2>{ titles[2] }</h2>
          <p>August 23, 2022</p>
        </div>
      </div>

      <button onClick={sortTitles}>Sort</button>

      <button onClick={changeTitle}>Change Title</button>

      
    </div>
  );
}

export default App;
