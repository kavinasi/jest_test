import React from 'react';
import ReactDOM from 'react-dom';
import Button from './../button';
import { render, cleanup} from '@testing-library/react'
import renderer from "react-test-renderer";

afterEach(cleanup);
it("renders without crasjhing",()=> {
    const div = document.createElement("div");
    ReactDOM.render(<Button></Button>,div)
});

it("render button correctly",()=>{
    const {getByTestId} = render(<Button label="click me" />);
    expect(getByTestId("button1")).toHaveTextContent("click me");
});

it("render button correctly",()=>{
    const {getByTestId} = render(<Button label="save" />);
    expect(getByTestId("button1")).toHaveTextContent("save");
});

it("matches snapshot 1", ()=>{
   const tree = renderer.create(<Button label="save"/>);
   expect(tree).toMatchSnapshot();
});

it("matches snapshot 2", ()=>{
    const tree = renderer.create(<Button label="click me"/>);
    expect(tree).toMatchSnapshot();
 });