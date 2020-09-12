import React from "react";
import { Icon, Button, Input, Label} from "semantic-ui-react";

const TableRow = ({ fieldValue, imgUrl, iconQnty, onDecrease, onIncrease}) => {
  return (
    <>
      {imgUrl ? (
        <span>
          <img src={imgUrl} alt="" />
        </span>
      ) : (
        <>
          
          {iconQnty ? (
            <Input labelPosition='right' type='text' placeholder='Amount' size='small'>
            <Label > <Icon
                // size='small'
                name="angle up"
                onClick={() => onIncrease()}
              /></Label>
            <input value={fieldValue} />
            <Label><Icon
                // size='small'
                name="angle down"
                onClick={() => onDecrease()}
              /></Label>
          </Input>
            // <div>
            //   <Icon
            //     // size='small'
            //     name="angle up"
            //     onClick={() => {}}
            //   />

            //   <Icon
            //     // size='small'
            //     name="angle down"
            //     onClick={() => {}}
            //   />
            // </div>
          ) :  <span>{fieldValue} </span>}
        </>
      )}
    </>
  );
};

export default React.memo(TableRow);
