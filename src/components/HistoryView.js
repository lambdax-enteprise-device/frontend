import React from "react";
import { HistoryProvider } from "./HistoryProvider";
import { HistoryBody } from "./HistoryBody";
import PropTypes from "prop-types";
const propTypes = {
  uniqueId: PropTypes.string,
};
const defaultProps = {
  uniqueId: "u23u-2u3udu2u-2u3u",
};

export const HistoryView = ({ uniqueId }) => {
  return (
    <HistoryProvider uniqueId={uniqueId}>
      <HistoryBody />
    </HistoryProvider>
  );
};
HistoryView.defaultProps = defaultProps;
HistoryView.propTypes = propTypes;
