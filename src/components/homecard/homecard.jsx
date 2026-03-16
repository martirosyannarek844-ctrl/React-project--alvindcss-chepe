import { useState } from "react";

export default function HomePageCard({ el }) {
  const [show, setShow] = useState(false);

  return (
    <div className="img-box">
      <img
        onClick={() => setShow((sh) => !sh)}
        src={el.img}
        alt="name"
      />

      {show && (
        <div>
          <a
            href={el.link}
            className="block mt-[10px] text-blue-500 underline text-[14px] transition duration-200 text-center hover:scale-95"
          >
            {el.text}
          </a>
        </div>
      )}
    </div>
  );
}