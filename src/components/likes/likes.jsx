import { connect } from "react-redux";
import { decrementLikes, incrementLikes } from "../../redux/about/action";


export function Likes(props) {
    console.log("render", props);

    return (
        <div className="flex justify-around mt-5">

            <button
                onClick={props.onIncrementLikes}
                className="border-2 border-[wheat] basis-[48%] p-[5px] text-center text-[15px] text-purple-600 transition-all duration-500 hover:border-gray-500 hover:text-pink-400"
            >
                ❤️ {props.likes}
            </button>

            <button
                disabled={props.likes === 0}
                onClick={props.onDecrementLikes}
                className="border-2 border-[wheat] basis-[48%] p-[5px] text-center text-[15px] text-purple-600 transition-all duration-500 hover:border-gray-500 hover:text-pink-400 disabled:opacity-50"
            >
                Dislike
            </button>

        </div>
    );
}

function mapStateToProps(state) {
    const { likes } = state;

    return {
        likes: likes.likes,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onIncrementLikes: () => dispatch(incrementLikes()),
        onDecrementLikes: () => dispatch(decrementLikes()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Likes);