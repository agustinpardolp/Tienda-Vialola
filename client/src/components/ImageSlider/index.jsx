import React, { useEffect, useState } from "react";

const ImageSlider = (props) => {
  const { IMAGES } = props;

  const [homeImage, setHomeImage] = useState("slide12");
  const [imgsArray, setImgsArray] = useState(IMAGES);

  useEffect(() => {
    props.getImageSlider(homeImage);

    let imgSelected = OptionSelected();

    const timer = setTimeout(() => {
      setHomeImage(imgSelected);
    }, 4000);
    return () => clearTimeout(timer);
  }, [homeImage]);

  const OptionSelected = () => {
    var localImgsArray = imgsArray;
    if (imgsArray.length) {
      let imgSelected = localImgsArray[0];
      localImgsArray = removeItemFromArr(imgsArray, imgSelected);
      setImgsArray(localImgsArray);
      return imgSelected.NAME;
    } else {
      setHomeImage("slide12");
      resetArray();
      return "slide12";
    }
  };

  const removeItemFromArr = (array, item) => {
    return array.filter(function (e) {
      return e !== item;
    });
  };
  const resetArray = () => {
    const array = IMAGES;
    setImgsArray(array);
  };

  return <></>;
};

export default ImageSlider;
