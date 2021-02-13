import React from "react";
import {
  Button,
  Checkbox,
  Icon,
  Table,
  Header,
  Image,
} from "semantic-ui-react";
import TableRow from "./TableRow";

const CustomTable = ({ headerColumns, dataRows, handleSelectedRow, handleDeleteRow }) => {
  const DATATYPE = {
    NAME: "name",
    EDIT: "edit",
    DELETE: "delete",
    ALLOW_ORIGINAL: "allowOriginal",
    ALLOW_REPRODUCTION: "allowReproduction",
  };

  let formats = [];
  const renderHeader = (headerColumns) => {
    return (
      <Table.Header>
        <Table.Row>
          {headerColumns.map((headerCol) => {
            formats.push({ dataField: headerCol.dataField });
            return <Table.HeaderCell>{headerCol.name}</Table.HeaderCell>;
          })}
          <Table.HeaderCell >Editar</Table.HeaderCell>
          <Table.HeaderCell>Borrar</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
    );
  };
  return (
    <Table sortable celled>
      {renderHeader(headerColumns)}

      <Table.Body>
        {dataRows &&
          dataRows.map((row) => {
            return (
              <TableRow dataRow={row} formats={formats} DATATYPE={DATATYPE} handleselectRow ={handleSelectedRow} handleDeleteRow={handleDeleteRow}/>
            );
          })}
      </Table.Body>

      <Table.Footer fullWidth>
        <Table.Row>
          <Table.HeaderCell />
          <Table.HeaderCell colSpan={headerColumns.length + 1}>
            <Button
              floated="right"
              icon
              labelPosition="left"
              primary
              size="small"
            >
              <Icon name="plus circle" /> Add 
            </Button>
          </Table.HeaderCell>
        </Table.Row>
      </Table.Footer>
    </Table>
  );
};

export default CustomTable;
