import React from "react";
import { render } from "@testing-library/react";
import AddDevice from "./AddDevice";

test("render AddDevice without crashing", ()=>{
    render(<AddDevice />);
})