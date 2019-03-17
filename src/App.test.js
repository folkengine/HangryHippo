import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import App from './App';
import { isExportDeclaration } from 'typescript';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('renders a div with that className prop set to be an item card', () => {
  const wrapper = shallow(<App />);

  // expect(false).toBe(true);
  expect(wrapper.find('div').findWhere(e => e.props().className === )).to.have.lengthOf(1);
  // wrapper.find('div').findWhere(e => e.props().className === 'list-item-card')
});