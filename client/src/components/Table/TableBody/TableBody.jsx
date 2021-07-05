import React from "react";
import { uuid } from "uuidv4";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import TableRow from "./TableRow";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const StyledTD = styled.td`
  width: ${(props) => (props.width ? props.width : "5%")};
`;

const TableBody = ({
  formats,
  row,
  DATATYPE,
  history,
  disableLink,
  onDelete,
  onIncrease,
  onDecrease,
}) => {
  const openSelectedRow = (row) => {
    return history.push(`/requests/detail/${row.id}`);
  };

  const rowDataHandler = (format, row) => {
    let fieldValue = "";
    let icon = false;
    let iconQnty = false;
    let imgUrl = "";
    let width = "";

    switch (format.dataField) {
      case DATATYPE.PRODUCT:
        fieldValue = row[format.dataField];
        break;
      case DATATYPE.QUANTITY:
        fieldValue = row[format.dataField];
        iconQnty = true;
        break;
      case DATATYPE.IMAGE:
        fieldValue = row[format.dataField];
        imgUrl = `/images/img-products/${row.product.section.name}/${
          row[format.dataField]
        }`;

        break;
      case DATATYPE.DESCRIPTION:
        fieldValue = row.product.description;
        width = "20%";
        break;
      case DATATYPE.UNIT_PRICE:
        fieldValue = row.product.price;
        break;

      case DATATYPE.TOTAL:
        fieldValue = row[format.dataField];
        break;
      case DATATYPE.DELETE:
        fieldValue = "delete";
        icon = true;
        break;
      default:
        fieldValue = row[format.dataField];
    }

    return (
      <StyledTD key={uuid()} width={width}>
        {icon ? (
          <FontAwesomeIcon
            icon={faTrash}
            size="0.7x"
            style={{ fontSize: "14px", color: "var(--mineShaft)" }}
            onClick={() => onDelete(row)}
          />
        ) : (
          <TableRow
            fieldValue={fieldValue}
            row={row}
            imgUrl={imgUrl}
            icon={icon}
            iconQnty={iconQnty}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
          />
        )}
      </StyledTD>
    );
  };

  return (
    <tr key={uuid()}>
      {formats && formats.map((format) => rowDataHandler(format, row))}
    </tr>
  );
};

export default React.memo(withRouter(TableBody));
