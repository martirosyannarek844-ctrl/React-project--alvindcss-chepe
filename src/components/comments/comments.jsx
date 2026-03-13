import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { commentCreate } from "../../redux/about/action";
import uniqid from "uniqid";
import SingleComment from "../singlecomments/singl";

export default function Comments() {

  const [textComment, setTextComment] = useState("");

  const comments = useSelector(state => {
    const { comments } = state;
    return comments.comments;
  });

  const dispatch = useDispatch();

  const handleInput = (e) => {
    setTextComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = uniqid();
    dispatch(commentCreate(textComment, id));
    setTextComment("");
  };

  return (
    <div className="card-comments">

      <form onSubmit={handleSubmit} className="comment-item-create">

        <input
          type="text"
          className="w-[200px] h-[35px] border-[5px] border-pink-500 outline-none ml-[15px] hover:border-[7px]"
          value={textComment}
          onChange={handleInput}
        />

        <input type="submit" hidden />

      </form>

      {!!comments?.length &&
        comments.map(res => {
          return <SingleComment key={res.id} data={res} />;
        })
      }

    </div>
  );
}