export default function Modal(props) {
  return (
    <div className="modal">
      <h4>{props.titles[props.currTitle]}</h4>
      <p>Date</p>
      <p>Details</p>
      <button onClick={props.changeTitle}>Change Title</button>
    </div>
  );
}
