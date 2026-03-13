import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { commentDelete } from "../../redux/about/action";

export default function SingleComment({ data }) {
  const [commentText, setCommentText] = useState("");
  const { text, id } = data;
  const dispatch = useDispatch();

  const handleUpdate = (e) => {
    e.preventDefault();
  };

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(commentDelete(id));
  };

  useEffect(() => {
    if (text) {
      setCommentText(text);
    }
  }, [text]);

  const handleInput = (e) => {
    setCommentText(e.target.value);
  };

  return (
    <form
      onSubmit={handleUpdate}
      className="flex items-center"
    >
      <span
        onClick={handleDelete}
        className="cursor-pointer text-red-500 ml-4 w-[10px] drop-shadow-[0_0_1px_darkred]"
      >
        ×
      </span>

      <input
        type="text"
        value={commentText}
        onChange={handleInput}
        className="border rounded px-2 py-1"
      />

      <input type="submit" hidden />
    </form>
  );
}