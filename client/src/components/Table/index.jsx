import React from "react";
import styled from "styled-components";
import TableBody from "./TableBody/TableBody";
import TableHeader from "./TableHeader/TableHeader";
import { StyledTable } from "./styledComponents";

const Table = ({ columns, data, onDelete, onIncrease, onDecrease }) => {
  const DATATYPE = {
    PRODUCT: "name",
    IMAGE: "img",
    DESCRIPTION: "description",
    QUANTITY: "quantity",
    UNIT_PRICE: "price",
    TOTAL: "total",
    DELETE: "delete",
  };

  let formats = [];

  const renderHeader = (columns, disableHeader) => {
    return (
      <tr>
        {columns && columns.length ? (
          columns.map((col) => {
            let currentFormat = col.format ? col.format : "text";
            formats.push({ format: currentFormat, dataField: col.dataField });
            return !disableHeader ? (
              <TableHeader key={col.id} col={col} />
            ) : null;
          })
        ) : (
          <th />
        )}
      </tr>
    );
  };

  const renderBody = (data, disableLink) => {
    if (data && data.length > 0) {
      return data.map((row) => {
        return (
          <TableBody
            key={row.serial}
            formats={formats}
            row={row}
            DATATYPE={DATATYPE}
            disableLink={disableLink}
            onDelete={onDelete}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
          />
        );
      });
    } else
      return (
        <tr>
          <td
            align={"center"}
            colSpan={columns && columns.length > 0 ? columns.length : 1}
          >
            No hay datos disponibles
          </td>
        </tr>
      );
  };

  return (
    <div class="table-responsive">
      <StyledTable id={"myTable"} className="table table-hover  col-md-12">
        <thead>{renderHeader(columns)}</thead>
        <tbody>{renderBody(data)}</tbody>
      </StyledTable>
    </div>
  );
};

export default Table;
