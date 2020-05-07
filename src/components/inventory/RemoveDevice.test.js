import React from 'react';
import { render } from "@testing-library/react";
import RemoveDevice from "./RemoveDevice";

test('renders RemoveDevice without crashing', ()=> {
    render(<RemoveDevice />);
})