import { useState } from "react";

export default function PostForm(props) {
  const [title, setTitle] = useState("");

  const handleChange = (e) => {
    console.log(e.currentTarget.value);
    setTitle(e.currentTarget.value);
  };

  const handleSubmit = () => {};

  return (
    <div className="post-input">
      <form>
        <label>
          Title:
          <input type="text" name="title" value={title} onChange={handleChange} />
        </label>
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}
