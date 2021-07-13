import React from "react";
import { Table, Header, Image, Icon } from "semantic-ui-react";

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
      case DATATYPE.TITLE:
        fieldValue = row[format.dataField];
        img = `${process.env.PUBLIC_URL}/images/img-carousel/${row.img}`;
        subFieldValue = row.title;
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
      case DATATYPE.CATEGORY:
        fieldValue = row[format.dataField].name;
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
              <Image src={img} rounded size="mini" />
              <Header.Content>
                {fieldValue}
                <Header.Subheader>{subFieldValue}</Header.Subheader>
              </Header.Content>
            </Header>
          </Table.Cell>
        ) : (
          <Table.Cell key={index}>{fieldValue}</Table.Cell>
        )}
      </>
    );
  };

  return (
    <Table.Row key={dataRow.id}>
      {formats &&
        formats.map((format, index) => cellDataHandler(format, dataRow, index))}

      <Table.Cell >
        <Icon name="edit" onClick={() => handleselectRow(dataRow)} />
      </Table.Cell>

      <Table.Cell >
        <Icon name="trash" onClick={() => handleDeleteRow(dataRow)} />
      </Table.Cell>
    </Table.Row>
  );
};

export default TableRow;
