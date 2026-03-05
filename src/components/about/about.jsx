import saturn from "../../assets/saturn.jpg";
import Title from "../title/title";

export default function About() {
  return (
    <div className="min-h-screen">
      <div className="relative max-w-[600px] mx-auto my-[140px]">
        <div className="flex p-5 shadow-[0_0_5px_rgba(0,0,0,0.3)] m-[0_20px_20px_20px]">
          <div className="flex flex-col max-w-[60%]">
            <img src={saturn} alt="saturn" />
            <Title/>
          </div>
        </div>
      </div>
    </div>
  );
}