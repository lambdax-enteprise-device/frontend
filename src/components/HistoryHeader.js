import React, { useContext } from "react";
import styled from "styled-components";
import { HistoryCellItem } from "./HistoryCellItem";
import PropTypes from "prop-types";
import { HistoryViewContext } from "./HistoryProvider";
import { SORT_REDUCER_SORT } from "./HistoryProvider";
const defaultProps = {
  itemObject: null,
};

const propTypes = {
  //these should be switched to match API
  itemObject: PropTypes.shape({
    deviceId: PropTypes.stirng,
    loaned: PropTypes.number,
    empName: PropTypes.string,
    returned: PropTypes.number,
    status: PropTypes.string,
  }),
};
export const HistoryHeader = ({ itemObject }) => {
  const { sortedState, setSortedState } = useContext(HistoryViewContext);

  const onClick = (objectKey) => () =>
    setSortedState({ type: SORT_REDUCER_SORT, colTitle: objectKey });
  const hydrateHeader = () => {
    return (
      <StyledHistoryHeader>
        {Object.keys(itemObject).map((k, index) => (
          <HistoryCellItem key={index} onClick={onClick(k)}>
            {k}
          </HistoryCellItem>
        ))}
      </StyledHistoryHeader>
    );
  };
  const renderHeader = () => {
    const isDataAvailable = itemObject ? true : false;
    switch (isDataAvailable) {
      case true:
        return hydrateHeader();
      case false:
        return <div>...Loading Header</div>;
      default:
        return <div>...Loading Header</div>;
    }
  };
  return renderHeader();
};

HistoryHeader.defaultProps = defaultProps;
HistoryHeader.propTypes = propTypes;

const StyledHistoryHeader = styled.ul`
  padding: 0px;
  border-bottom: 1px solid lightgray;
  margin: 0px;
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
