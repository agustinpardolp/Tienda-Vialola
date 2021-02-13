import React from "react";
import { Checkbox, Table, Header, Image, Icon } from "semantic-ui-react";

const TableRow = ({
  dataRow,
  formats,
  DATATYPE,
  handleselectRow,
  handleDeleteRow,
}) => {
  const cellDataHandler = (format, row, index) => {
    let fieldValue = "";
    let subFieldValue = "";
    let img = "";

    let editable = false;
    let deletable = false;

    switch (format.dataField) {
      case DATATYPE.NAME:
        fieldValue = row[format.dataField];
        img = `${process.env.PUBLIC_URL}/images/img-artwork/${row.category.name}/${row.img}`;
        subFieldValue = row.serie ? row.serie.name : row.category.name;
        break;

      case DATATYPE.ALLOW_ORIGINAL:
        fieldValue = row[format.dataField] ? "Si" : "No";
        break;

      case DATATYPE.ALLOW_REPRODUCTION:
        fieldValue = row[format.dataField] ? "Si" : "No";

        break;

      case DATATYPE.DELETE:
        fieldValue = row[format.dataField];
        deletable = true;

        break;
      case DATATYPE.EDIT:
        fieldValue = row[format.dataField];
        editable = true;
        break;

      default:
        fieldValue = row[format.dataField];
    }

    return (
      <>
        {img ? (
          <Table.Cell key={index}>
            {" "}
            <Header as="h4" image>
              <Image
                src={`${process.env.PUBLIC_URL}/images/img-artwork/${row.category.name}/${row.img}`}
                rounded
                size="mini"
              />
              <Header.Content>
                {fieldValue}
                <Header.Subheader>{subFieldValue}</Header.Subheader>
              </Header.Content>
            </Header>
          </Table.Cell>
        ) : (
          <Table.Cell>{fieldValue}</Table.Cell>
        )}
      </>
    );
  };

  return (
    <Table.Row key={dataRow.id}>
      {/* <Table.Cell collapsing>
        <Checkbox slider />
      </Table.Cell> */}
      {formats &&
        formats.map((format, index) => cellDataHandler(format, dataRow, index))}

      <Table.Cell collapsing>
        <Icon name="edit" onClick={() => handleselectRow(dataRow)} />
      </Table.Cell>

      <Table.Cell collapsing>
        <Icon name="trash" onClick={() => handleDeleteRow(dataRow)} />
      </Table.Cell>
    </Table.Row>
  );
};

export default TableRow;
