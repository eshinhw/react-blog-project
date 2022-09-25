import { Col, Container, Row } from "react-bootstrap";
import "./App.css";
import NavBarDark from "./Navbar";
import { data } from "./data";
import { useState } from "react";
import Product from "./Product";

function App() {
  let [lemons, setLemons] = useState(data);
  console.log(lemons)
  return (
    <div className="App">
      <NavBarDark />
      <div className="main-bg">
        <img src={process.env.PUBLIC_URL + " /library.jpg"} width="100%" />
      </div>

      <Container className="column-container">
        <Row className="row-container" xs="auto">
          {lemons.map(function(obj) {
            return(
              <Product obj={obj} />
            )
          })}
        </Row>
      </Container>
    </div>
  );
}

export default App;
