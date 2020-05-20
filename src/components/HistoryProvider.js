import React, { useEffect, useReducer } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

//mock responses before we connected to project API
const mockItem = () => {
  return {
    deviceId: "u23u-2u3udu2u-2u3u",
    loaned: Math.random(),
    empName: "testName",
    returned: Math.random(),
    status: "true",
  };
};
const mockResponseObject = Array.from(Array(8)).map((item) => mockItem());
const mockAction = () => Promise.resolve([...mockResponseObject]);

export const HistoryViewContext = React.createContext();

const propTypes = {
  uniqueId: PropTypes.string,
  styles: PropTypes.object,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element]),
};
const dynamicSort = (key, state) => {
  //allows for sorting column data without hard coding object keys (col headers) ahead of time
  state.sort((a, b) => {
    let k1 = a[key];
    let k2 = b[key];
    if (k1 < k2) {
      return -1;
    }
    if (k2 > k1) {
      return 1;
    }
    return 0;
  });
  return state;
};
export const SORT_REDUCER_MOUNT = "MOUNT";
export const SORT_REDUCER_SORT = "SORT";
const sortReducer = (state = null, action) => {
  const { colTitle, type, payload } = action;
  switch (action.type) {
    case SORT_REDUCER_MOUNT:
      return [...state, ...action.payload];
    case SORT_REDUCER_SORT:
      return [...dynamicSort(colTitle, state)];
    default:
      return state;
  }
};

export const HistoryProvider = ({ uniqueId, styles, children }) => {
  let [sortedState, setSortedState] = useReducer(sortReducer, []);

  useEffect(() => {
    async function mockAPI() {
      let mockResponse = await mockAction(uniqueId);
      setSortedState({ type: SORT_REDUCER_MOUNT, payload: mockResponse });
    }
    mockAPI();
  }, [setSortedState]);

  return (
    <HistoryViewContext.Provider
      value={{ sortedState: sortedState, setSortedState: setSortedState }}
    >
      <StyledSection>{children}</StyledSection>
    </HistoryViewContext.Provider>
  );
};

HistoryProvider.propTypes = propTypes;
// https://stackoverflow.com/questions/4471850/what-is-the-meaning-of-auto-value-in-a-css-property
const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 80vw;
  height: auto;
  border: 1px solid lightgray;
  border-radius: 3px;
  margin: 100px auto;
  & > ul:last-child {
    border-bottom: 0px solid transparent;
  }
`;
