import React from 'react';
import { create } from "react-test-renderer";
import SamuraiAppJS from "./App";

describe("App component", () => {
  test("Render without crashing", () => {
    const component = create(<SamuraiAppJS />)
    expect(component.render).not.toBe(0);
  });
});