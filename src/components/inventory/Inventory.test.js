import React from "react";
import { render } from "@testing-library/react";
import Inventory from "./Inventory";

test("renders Inventory without crashing", ()=> {
    render(<Inventory />);
})