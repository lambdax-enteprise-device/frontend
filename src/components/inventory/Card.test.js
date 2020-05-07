import React from "react";
import { render } from "@testing-library/react";
import Card from "./Card";

test("renders Card without crashing", ()=> {
    
    const inventoryItems = {company_id: 1, serial_number: 2, internal_id: 3}
    
    render(<Card inventoryItems={inventoryItems}/>);
})