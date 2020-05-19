import React, { useContext } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { HistoryViewContext } from "./HistoryProvider";
import { HistoryRowItem } from "./HistoryRowItem";
import { HistoryHeader } from "./HistoryHeader";

export const HistoryBody = () => {
  const providerStore = useContext(HistoryViewContext);

  const hydrateItems = () => {
    let historyRows = providerStore.sortedState.map((hr, index) => {
      return <HistoryRowItem key={index} itemObject={hr} />;
    });
    let historyHeader = (
      <HistoryHeader
        key={"unique"}
        itemObject={providerStore.sortedState[0]}
      ></HistoryHeader>
    );
    return [historyHeader, ...historyRows];
  };

  const renderBody = () => {
    let isStateAvailable = providerStore.sortedState ? true : false;

    switch (isStateAvailable) {
      case true:
        return hydrateItems();
      case false:
        return <div>..No History</div>;

      default:
        return <div>...Loading</div>;
    }
  };
  return renderBody();
};

const StyledSection = styled.ul`
  display: flex;
  width: 100%;
  flex-direction: column;

  border-radius: 3px;
  padding: 0px;
  margin: 0px;
  list-style: none;
`;
