import { useState, useEffect } from "react";
const ProgressBar = ({ progress }) => {
  const [randomColor, setRandomColor] = useState(0);

  const generateRandomColor = () => {
    const randomR = Math.floor(Math.random() * 256);
    const randomG = Math.floor(Math.random() * 256);
    const randomB = Math.floor(Math.random() * 256);
    return `rgb(${randomR}, ${randomG}, ${randomB})`;
  };

  useEffect(() => {
    setRandomColor(generateRandomColor());
  }, []);

  return (
    <div className="outer-bar">
      <div
        className="inner-bar"
        style={{ width: `${progress}%`, backgroundColor: randomColor }}
      ></div>
    </div>
  );
};

export default ProgressBar;
