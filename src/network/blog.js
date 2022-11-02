import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL;

const getAllPost = (page = 1) =>
  axios({
    method: "get",
    url: "/posts",
    params: {
      _page: page,
      _limit: 10,
      _sort: "id",
      _order: "desc",
    },
  });

const getPost = (id) =>
  axios({
    method: "get",
    url: "/posts/" + id,
  });

const insertPost = (data) =>
  axios({
    method: "post",
    url: "/posts",
    data,
  });

const editPost = (data, id) =>
  axios({
    method: "patch",
    url: "/posts/" + id,
    data,
  });

const deletePost = (id) =>
  axios({
    method: "delete",
    url: "/posts/" + id,
  });

export { getAllPost, getPost, deletePost, insertPost, editPost };
