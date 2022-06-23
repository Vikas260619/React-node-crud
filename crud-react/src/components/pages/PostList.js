import React, { useEffect, useState } from "react";
import Api from "../../apis/api";

export const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    getPostsData();
  }, []);

  const getPostsData = async () => {
    await Api.get("posts").then((res) => {
      if (res.data) {
        setPosts(res.data);
      } else console.log("Failed to fetch data");
    });
  };

  const updatePost = async (id) => {
    await Api.patch("posts/" + id, {
      title: title,
      description: description,
    }).then((res) => {
      if (res.data) {
        console.log(res.data);
        getPostsData();
      } else {
        console.log("Failed to update data");
      }
    });
  };

  const deletePost = async (id) => {
    await Api.delete("posts/" + id).then((res) => {
      if (res.data) {
        getPostsData();
      } else console.log("data is not deleted");
    });
  };

  const getPostById = async (id) => {
    await Api.get("posts/" + id).then((res) => {
      setId(res.data._id);
      setTitle(res.data.title);
      setDescription(res.data.description);
    });
  };

  return (
    <div>
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Description</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {posts &&
            posts.map((post) => (
              <tr key={post._id}>
                <td>{post._id}</td>
                <td>{post.title}</td>
                <td>{post.description}</td>
                <td>
                  <button
                    type="button"
                    onClick={() => getPostById(post._id)}
                    className="btn btn-success"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    Edit
                  </button>{" "}
                  <button
                    onClick={() => deletePost(post._id)}
                    type="button"
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Update Posts
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form style={{ padding: "20px", background: "hsl(0deg 4% 12%)" }}>
                <div className="row mb-3">
                  <label for="inputEmail3" className="col-sm-3 col-form-label">
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
                  <label
                    for="inputPassword3"
                    className="col-sm-3 col-form-label"
                  >
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
                    className="col-sm-3 col-form-label"
                  ></label>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                class="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={() => updatePost(id)}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
