import { Col } from "react-bootstrap";

export default function Product(props) {
  return (
    <Col className="product-details">
      <img src={process.env.PUBLIC_URL + " /lemons.jpg"} width="400" />
      <h4 className="product-title">{props.obj.title}</h4>
      <p>{props.obj.price}</p>
      <p>{props.obj.content}</p>
    </Col>
  );
}
