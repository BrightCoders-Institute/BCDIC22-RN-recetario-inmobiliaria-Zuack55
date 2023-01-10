import React from "react";
import { render } from "@testing-library/react-native";
import Cards from "../components/Cards";
import App from "../App";

let component: any;

describe("Cards", () => {
    beforeEach(() => {
        component = render(<Cards />);
    });

    it("Render container cards", () => {
        expect(component).toBeTruthy();
        expect(component.getByTestId("scrollcards")).toBeTruthy();
    });
});

describe("Render App", () => {
    beforeEach(() => {
        component = render(<App/>);
    });
    it("should render and render spinner loading app", () => {
        expect(component).toBeTruthy();
        expect(component.getByTestId("loader")).toBeTruthy();
    });
});