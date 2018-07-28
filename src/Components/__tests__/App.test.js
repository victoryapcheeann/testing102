import React from 'react';

import App from 'Components/App'; //Change to absolute imports 
import TopicsBox from 'Components/TopicsBox'; //So that I can move to the test file around without breaking import statement in the future
import TopicsList from 'Components/TopicsList';

import { shallow } from 'enzyme'; //npm install --save enzyme enzyme-adapter-react-16

let wrapped; //We are going to reassign the value of wrapped several times throughout these files

beforeEach(() => {
  wrapped = shallow(<App />);
});

afterEach(() => {
  wrapped.unmount(); //Cleaning up to prevent performance issues later on
});

it('shows topics box', ()=>{
  expect(wrapped.find(TopicsBox).length).toEqual(1); //Make sure TopicBox component is inside App component
});


it('shows topics list', ()=>{
  expect(wrapped.find(TopicsList).length).toEqual(1); //Make sure TopicList component is inside App component
});
