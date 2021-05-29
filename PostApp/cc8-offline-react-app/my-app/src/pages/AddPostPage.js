/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "../components/Button";

function AddPostPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  let history = useHistory();

  function handleTitleChange(event) {
    setTitle(event.target.value);
  }

  function handleDescriptionChange(event) {
    setDescription(event.target.value);
  }

  async function createPosts() {
    let response = await fetch("http://localhost:8000/posts/", {
      method: "POST",
      body: JSON.stringify({ title: title, content: description }),
      headers: {
        "content-type": "application/json",
      },
    });

    if (response.ok) {
      history.push("/");
    }
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    createPosts();
    console.log("submit");
  }

  return (
    <div>
      <div className="postapp-header">
        <h1
          css={css`
            color: rgb(254, 255, 67);
            font-size: 50px;
          `}
        >
          Add Post Page
        </h1>
      </div>

      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            onChange={handleTitleChange}
            value={title}
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            onChange={handleDescriptionChange}
            value={description}
          />
        </div>
        <Button type="submit">Add</Button>
      </form>
    </div>
  );
}

export default AddPostPage;
