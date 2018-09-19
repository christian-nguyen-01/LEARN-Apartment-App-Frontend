import React from 'react'
import ReactDOM from 'react-dom'
import Listings from '../Listings'
import { mount } from 'enzyme'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() });

it('Listings renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Listings />, div)
})
