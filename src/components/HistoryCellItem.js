import React, { useContext } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const propTypes = {
  onClick: PropTypes.func,
  styles: PropTypes.object,
  mouseOver: PropTypes.bool,
};
const defaultProps = {};
export const HistoryCellItem = ({ children, onClick, styles }) => {
  return (
    <StyledHistoryCellItem onClick={onClick}>{children}</StyledHistoryCellItem>
  );
};
HistoryCellItem.propTypes = propTypes;
HistoryCellItem.defaultProps = defaultProps;
/*
  important for every cell item to grow to at least 100px in order for table to be pretty. Hence flex 1 1 100px;
*/
const StyledHistoryCellItem = styled.li`
  &:hover {
    cursor: pointer;
  }
  display: block;
  height: 20px;
  padding: 10px;
  max-width: 100px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  flex: 1 1 100px;
`;
