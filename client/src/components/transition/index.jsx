import React, { useEffect, useState } from "react";
import { Transition } from "semantic-ui-react";

const TransitionWrapper = ({ children }) => {
  let [visible, setVisible] = useState(false);
  useEffect(() => {
    setVisible(!visible);
    return () => {
      setVisible(!visible);
    };
  }, []);

  return (
    <>
      <Transition visible={visible} animation="hide" duration={500}>
        {children}
      </Transition>
    </>
  );
};
export default TransitionWrapper;
