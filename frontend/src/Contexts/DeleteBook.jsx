import { BaseURL } from "./Vars";
import toast from "react-hot-toast";
import axios from "axios";

export default function deleteBook(id) {
  axios
    .delete(`${BaseURL}/books/${id}`)
    .then((res) => {
      toast.success(res.data.message);
    })
    .catch((err) => {
      console.log(err);
    });
}
