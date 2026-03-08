import { useDispatch, useSelector } from "react-redux";
import { inputext } from "../../redux/about/action";
// import { inputtext } from "../../redux/about/action";

export default function Title(props) {
  console.log("props title >", props);

  const text = useSelector((state) => state.text.text);

  const dispatch = useDispatch();

  const handleclick = (e) => {
    dispatch(inputext(e.target.value));
  };

  return (
    <div className="card-title">
      <div className="card-title-top">
        <input
          className="h-10 mt-5 border-[5px] border-gray-500 outline-none hover:border-pink-500"
          type="text"
          onChange={handleclick}
        />
      </div>

      <p>{text}</p>
    </div>
  );
}