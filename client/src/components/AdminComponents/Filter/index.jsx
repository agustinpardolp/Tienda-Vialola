import React, { useState, useEffect, useCallback } from "react";
import { connect } from "react-redux";
import { Grid, Image, Search, Dropdown } from "semantic-ui-react";
import SubTittle from "../../../components/AdminComponents/SubTittle";
import Button from "../../../components/Button";
import { NAVBAR, FILTER_KEYS } from "../../../constants";
import {
  StyledFilterContainer,
  StyledEditButtonContainer,
} from "./styled-components";

const Filter = ({ pathname, handleFilter, dropdowns }) => {
  const tittle = NAVBAR.ADMIN.find((elem) => elem.path === pathname);
  const [dropdownOptions, setDropdownOptions] = useState([]);

  const handleChange = (value, data) => {
    data.fetch(value)
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
        <h2>{tittle.NAME}</h2>
      </SubTittle>
      <StyledEditButtonContainer>
        <Button
          variant="confirm"
          label={`Agregar nuevo ${tittle.NAME}`}
        ></Button>
        {dropdowns &&
          dropdowns.map((dropdown) => {
            return (
              <Dropdown
                disabled={dropdown.disabled}
                placeholder={dropdown.name}
                search
                selection
                onChange={(e, value)=>handleChange(value, dropdown)}
                options={handleOptions(dropdown.data)}
                clearable
              />
            );
          })}
      </StyledEditButtonContainer>
    </Grid.Row>
  );
};

const mapStateToProps = (state, ownProps) => {
  const {
    series: { data: series, status },
  } = state;

  return {
    series,
  };
};

export default connect(mapStateToProps, null)(Filter);
