import React from "react";
import {create} from 'react-test-renderer';
import App from "../App";

const testRenderer = create(<App />);

test('App component renders correctly', () => {
    expect(testRenderer).toMatchSnapshot();
});

test('App component renders correctly loeader', () => {
    const testInstance = testRenderer.root;
    expect(testInstance.findByProps({testID: 'loader'})).toBeTruthy();
});
