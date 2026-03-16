
import { images } from "../../data/data";
import HomePageCard from "../homecard/homecard";


export default function Homecard() {
  return (
    <div className="flex justify-around mt-16">
      {images.map((item) => (
        <HomePageCard key={item.id} el={item} />
      ))}
    </div>
  );
}