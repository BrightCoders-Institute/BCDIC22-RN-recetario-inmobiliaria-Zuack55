import React from "react";
import {create} from 'react-test-renderer';
import Cards from "../components/Cards";

const testRenderer = create(<Cards />);
test('Card component renders correctly', () => {
    expect(testRenderer).toMatchSnapshot();
});

test('Card component renders correctly container cadrs', () => {
    const testInstance = testRenderer.root;
    expect(testInstance.findByProps({testID: 'scrollcards'})).toBeTruthy();
});

