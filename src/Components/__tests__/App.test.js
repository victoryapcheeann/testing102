import React from 'react';
import App from 'components/App';
import TopicBox from 'components/TopicBox';
import TopicList from 'components/TopicList';
/*
Change to absolute imports, 
so that I can move to the test file around without breaking import statement in the future
*/
import { shallow } from 'enzyme';
//npm install --save enzyme enzyme-adapter-react-16

let wrapped;
/*
Why let not const? 
We are going to reassign the value of wrapped several times throughout these files
*/

beforeEach(() => {
  wrapped = shallow(<App />);
});

it('shows topic box', ()=>{
  expect(wrapped.find(TopicBox).length).toEqual(1);
});
//Make sure TopicBox component is inside App component

it('shows topic list', ()=>{
  expect(wrapped.find(TopicList).length).toEqual(1);
});
//Make sure TopicList component is inside App component