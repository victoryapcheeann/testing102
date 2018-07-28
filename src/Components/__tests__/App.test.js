import React from 'react';

//Change to absolute imports,
import App from 'components/App';
import TopicBox from 'components/TopicBox';
import TopicList from 'components/TopicList';

//npm install --save enzyme enzyme-adapter-react-16
import { shallow } from 'enzyme';

it('shows topic box', ()=>{
  const wrapped = shallow(<App />);
  //Make sure TopicBox component is inside App component
  expect(wrapped.find(TopicBox).length).toEqual(1);
});

it('shows topic list', ()=>{
  const wrapped = shallow(<App />);
  //Make sure TopicList component is inside App component
  expect(wrapped.find(TopicList).length).toEqual(1);
})