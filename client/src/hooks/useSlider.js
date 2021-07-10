import { useState, useEffect } from "react";

export const useSlider = (images) => {
  const [imgsArray, setImgsArray] = useState(images);
  const [imageData, setImageData] = useState("slide12");

  const OptionSelected = () => {
    var localImgsArray = imgsArray;
    if (imgsArray.length) {
      let imgSelected = localImgsArray[0];
      localImgsArray = removeItemFromArr(imgsArray, imgSelected);
      setImgsArray(localImgsArray);
      return imgSelected.NAME;
    } else {
      resetArray();
      return "slide12";
    }
  };
  useEffect(() => {
    let imgSelected = OptionSelected();
    const timer = setTimeout(() => {
      setImageData(imgSelected);
    }, 3000);
    return () => clearTimeout(timer);
  }, [imageData]);

  const removeItemFromArr = (array, item) => {
    return array.filter(function (e) {
      return e !== item;
    });
  };
  const resetArray = () => {
    const array = images;
    setImgsArray(array);
  };

  return { imageData };
};
