import React from "react";
import { connect } from "react-redux";
import { Grid, Dropdown } from "semantic-ui-react";

import SubTittle from "../../../components/AdminComponents/SubTittle";
import Button from "../../../components/Button";
import { NAVBAR } from "../../../constants";

import { StyledEditButtonContainer } from "./styled-components";

const Filter = ({ pathname, handleNewOption, dropdowns, noFilter }) => {
  const tittle = NAVBAR.ADMIN.find((elem) => elem.path === pathname);

  const handleChange = (value, data) => {
    data.fetch(value);
  };

  const handleOptions = (data) => {
    let dropdownList =
      data &&
      data.map((serie, index) => {
        let option = {
          key: index,
          text: serie.name,
          value: serie.name,
        };
        return option;
      });

    return dropdownList;
  };

  return (
    <Grid.Row className="filter_row-title-container">
      <SubTittle>
        <h2>{tittle?.NAME}</h2>
      </SubTittle>
      {noFilter ? null : (
        <StyledEditButtonContainer>
          <Button
            variant="confirm"
            label="Agregar"
            onClick={handleNewOption}
          ></Button>
          {dropdowns &&
            dropdowns.map((dropdown) => {
              return (
                <Dropdown
                  key={dropdown.name}
                  disabled={dropdown.disabled}
                  placeholder={dropdown.name}
                  search
                  selection
                  onChange={(e, value) => handleChange(value, dropdown)}
                  options={handleOptions(dropdown.data)}
                  clearable
                />
              );
            })}
        </StyledEditButtonContainer>
      )}
    </Grid.Row>
  );
};

const mapStateToProps = (state) => {
  const {
    series: { data: series },
  } = state;

  return {
    series,
  };
};

export default connect(mapStateToProps, null)(Filter);
