import React from 'react'
import ReactDOM from 'react-dom'
import Listings from '../Listings'
import { mount } from 'enzyme'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() });



const apartments = [
  {
    id:1,
    street: "7000 Fisk Street",
    city: 'San Diego',
    postalCode: "92122",
    state: "CA",
    country: "USA",
    managerInfo: {
      name:"Jon",
      number:"858-100-1223",
      hours:"9am-5pm"
    }
  },
  {
    id:2,
    street: "300 Lebum Street",
    city: 'San Diego',
    postalCode: "92822",
    state: "CA",
    country: "USA",
    managerInfo: {
      name:"Jebron Lames",
      number:"858-678-1223",
      hours:"9am-5pm"
    }
  }
]

it('Listings renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Listings apartments = {apartments} />, div)
})

it('Renders the apartments', ()=>{
  const component = mount(<Listings apartments={apartments} />)
  const headings = component.find('h4 > .apartment-address')
  expect(headings.length).toBe(2)
})
