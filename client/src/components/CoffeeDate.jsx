import { useState } from "react";
import Slider from "react-slick";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Photo1 from "../assets/Photo-1.jpg";
import Photo2 from "../assets/Photo-2.jpg";
import Photo3 from "../assets/Photo-3.jpg";
import Photo4 from "../assets/Photo-4.jpg";
import Photo5 from "../assets/Photo-5.jpg";
import Cute1 from "../assets/Cute1.gif";
import Cute2 from "../assets/Cute2.gif";

export default function CoffeeDate() {
  const [showAlbum, setShowAlbum] = useState(false);
  const [noButtonPos, setNoButtonPos] = useState({ top: "0px", left: "0px" });
  const [date, setDate] = useState(null);

  const images = [Photo1, Photo2, Photo3, Photo4, Photo5];

  const settings = {
    dots: true,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
  };

  const handleYes = () => {
    if (!date) {
      alert("Please pick a date first 💌");
      return;
    }
    setShowAlbum(true);
  };

  const moveNoButton = () => {
    const randomTop = Math.floor(Math.random() * 200) - 100;
    const randomLeft = Math.floor(Math.random() * 200) - 100;
    setNoButtonPos({ top: `${randomTop}px`, left: `${randomLeft}px` });
  };

  if (showAlbum) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
        <img
          src={Cute1}
          alt="cute gif"
          className="w-40 h-40 md:w-56 md:h-56 object-contain mb-4 rounded-lg shadow-md"
        />
        <h1 className="text-2xl font-bold text-center mb-6">
          HAPPY GIRLFRIENDS DAY! MY PRETTY BABY! 💕 <br />
          <span className="text-base font-normal">(Your's truly: Suitor mo)</span>
        </h1>
        <div className="w-full max-w-sm sm:max-w-md md:max-w-lg">
          <Slider {...settings}>
            {images.map((src, i) => (
              <div key={i} className="flex justify-center">
                <img
                  src={src}
                  alt={`photo-${i}`}
                  className="w-full h-[350px] sm:h-[400px] md:h-[500px] object-cover rounded-xl shadow-lg"
                />
              </div>
            ))}
          </Slider>
        </div>
        <p className="mt-6 text-lg font-medium text-gray-700">
          Your chosen date:{" "}
          <span className="font-bold">
            {date
              ? date.toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })
              : ""}
          </span>
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-pink-100 p-4">
      {/* Cute GIF above question */}
      <img
        src={Cute2}
        alt="Cute gif"
        className="w-40 h-40 md:w-56 md:h-56 object-contain mb-4 rounded-lg shadow-md"
      />

      <h2 className="text-3xl font-bold mb-6 text-center">
        Will you have a coffee date with me? ☕❤️
      </h2>

      <DatePicker
        selected={date}
        onChange={(d) => setDate(d)}
        minDate={new Date()}
        placeholderText="Select your date 💌"
        className="border rounded-lg p-3 mb-6 w-64 text-center shadow-sm focus:ring-2 focus:ring-pink-400 focus:outline-none"
      />

      <div className="relative flex flex-row items-center gap-4">
        <button
          onClick={handleYes}
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg text-lg shadow-md transition"
        >
          Yes 💖
        </button>

        <button
          onClick={moveNoButton}
          style={{
            position: "relative",
            top: noButtonPos.top,
            left: noButtonPos.left,
            transition: "all 0.3s ease",
          }}
          className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-lg text-lg shadow-md absolute"
        >
          No 😢
        </button>
      </div>
    </div>
  );
}
