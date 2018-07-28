import React from 'react';
import { mount } from 'enzyme';
import TopicsBox from 'components/TopicsBox';

let wrapped;

beforeEach(() => {
  wrapped = mount(<TopicsBox />);  
});

afterEach(() => {
  wrapped.unmount();
});

it('has a text area and a button', () => {
  expect(wrapped.find('textarea').length).toEqual(1); //Make sure there is textarea in it
  expect(wrapped.find('button').length).toEqual(1); //Make sure there is button in it
});

describe('the text area',() => {
  beforeEach(() => {
    wrapped.find('textarea').simulate('change', {
      target: {value: 'new topics'}
    }) //Find the textarea and simulate event
    wrapped.update(); //setstate is asynchronous, we need to wait for the actual render to happen, hence we force our component to render itself
  });
  
  it('has a text area that users can type in', () => {
    expect(wrapped.find('textarea').prop('value')).toEqual('new topics')
  });

  it('when form is submitted, text area get emptied', () => {
    wrapped.find('form').simulate('submit')
    wrapped.update(); 
    expect(wrapped.find('textarea').prop('value')).toEqual('')
  });
})
