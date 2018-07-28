import React from 'react';
import App from '../App';
import TopicBox from '../TopicBox';
//npm install --save enzyme enzyme-adapter-react-16
import { shallow } from 'enzyme';

it('shows a topic box', ()=>{
  const wrapped = shallow(<App />);
  //Make sure TopicBox is inside App component
  expect(wrapped.find(TopicBox).length).toEqual(1);
});