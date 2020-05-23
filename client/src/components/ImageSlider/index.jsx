import React, { useEffect, useState } from "react";

export const ImageSlider = (props) => {
const {IMAGES} = props

  const [homeImage, setHomeImage] = useState("slide14");
  const [imgsArray, setImgsArray] = useState(IMAGES);

  useEffect(() => {

    props.getImageSlider(homeImage)
  
    let imgSelected = OptionSelected();
 
    const timer = setTimeout(() => {
     
          setHomeImage(imgSelected);
         
        }, 4000)
        return ()=> clearTimeout(timer);
        
  }, [homeImage]);

  const OptionSelected = () => {
    var localImgsArray = imgsArray;
    if (imgsArray.length) {
      let imgSelected = localImgsArray[0];
      localImgsArray = removeItemFromArr(imgsArray, imgSelected);
      setImgsArray(localImgsArray);
      return imgSelected.NAME;
    } else {
      setHomeImage("slide14")
      resetArray();
      return "slide14"
    }
  };

  const removeItemFromArr = (array, item) => {
    return array.filter(function(e) {
      return e !== item;
    });
  };
  const resetArray = () => {
    const array = IMAGES;
    setImgsArray(array);
  };

  return <></>;
};


