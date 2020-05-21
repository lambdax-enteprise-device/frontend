import React, { useContext } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { HistoryCellItem } from "./HistoryCellItem";

const propTypes = {
  //these should be switched to match API
  styles: PropTypes.object,
  itemObject: PropTypes.shape({
    deviceId: PropTypes.stirng,
    loaned: PropTypes.number,
    empName: PropTypes.string,
    returned: PropTypes.number,
    status: PropTypes.string,
  }),
};

const defaultProps = {};

export const HistoryRowItem = ({ itemObject, styles }) => {
  return (
    <StyledListItem>
      {Object.keys(itemObject).map((k, index) => (
        <HistoryCellItem key={index}> {itemObject[k]}</HistoryCellItem>
      ))}
    </StyledListItem>
  );
};
HistoryRowItem.propTypes = propTypes;

const StyledListItem = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid lightgray;
  padding: 0px;
  margin: 0px;
  list-style: none;
  width: 100%;
`;
