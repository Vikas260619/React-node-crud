import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Api from "../../apis/api";

export const Form = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const addPosts = async (e) => {
    await e.preventDefault();
    Api.post("posts", { title, description }).then((res) => {
      if (res.data) {
        navigate("/");
      }
    });
  };

  return (
    <div style={{ padding: "20px" }}>
      <form style={{ padding: "40px", background: "hsl(0deg 4% 12%)" }}>
        <div className="row mb-3">
          <label for="inputEmail3" className="col-sm-2 col-form-label">
            Title
          </label>
          <div className="col-sm-6">
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="form-control"
              id="inputTitle3"
            />
          </div>
        </div>
        <div className="row mb-3">
          <label for="inputPassword3" className="col-sm-2 col-form-label">
            Description
          </label>
          <div className="col-sm-6">
            <input
              type="text"
              className="form-control"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              id="inputDescription3"
            />
          </div>
        </div>
        <div className="row mb-3">
          <label
            for="inputPassword3"
            className="col-sm-2 col-form-label"
          ></label>
          <div className="col-sm-6">
            <button
              onClick={addPosts}
              type="button"
              className="btn btn-success"
            >
              Add Post
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
