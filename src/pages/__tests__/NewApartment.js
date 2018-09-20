import React from 'react'
import ReactDOM from 'react-dom'
import NewApartment from '../NewApartment'
import { mount } from 'enzyme'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<NewApartment />, div)
})

it('has a street input', ()=>{
  const component = mount(<NewApartment />)
 expect(component.find('label#street').text()).toBe("Street Address")
})

it('has a city input', ()=>{
  const component = mount(<NewApartment />)
  expect(component.find('label#city').text()).toBe("City")
})

it('has a postalCode input', ()=>{
  const component = mount(<NewApartment />)
  expect(component.find('label#postalCode').text()).toBe("Postal Code")
})

it('has a state input', ()=>{
  const component = mount(<NewApartment />)
  expect(component.find('label#state').text()).toBe("State")
})

it('has a country input', ()=>{
  const component = mount(<NewApartment />)
  expect(component.find('label#country').text()).toBe("Country")
})

it('has a managerName input', ()=>{
  const component = mount(<NewApartment />)
  expect(component.find('label#managerName').text()).toBe("Name of Property Manager")
})

it('has a managerNumber input', ()=>{
  const component = mount(<NewApartment />)
  expect(component.find('label#managerNumber').text()).toBe("Phone Number")
})

it('has a contactHours input', ()=>{
  const component = mount(<NewApartment />)
  expect(component.find('label#contactHours').text()).toBe("Contact Hours")
})

it('has a submit button', ()=>{
  const component = mount(<NewApartment />)
  expect(component.find('button#submit').text()).toBe("Create Apartment Listing")
})
