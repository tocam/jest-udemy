import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { findByTestAttribute } from "../__utils/test.utils"
import IntroButtonCounter from "../components/intro-button-counter/intro-button-counter"

Enzyme.configure({adapter : new EnzymeAdapter()});

/**
 * A Factory function to create a ShallowWrapper for the App Component*
 * @function setUp
 * @param {object} props - Component props specific to this setUp.
 * @param {object} state - Initial State
 * @returns {ShallowWrapper} //this is just an enzyme class
 */

const setUp = (props = {} , state = null) => {
    const wrapper = shallow(<IntroButtonCounter{...props}/>);
    if(state){
        wrapper.setState(state);
    }
    return wrapper
};

/**
 *Return ShallowWrapper containing node(s) with the given data-test value
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within.
 * @param {string} val - Value of data-test attr for search.
 * @ return{ShallowWrapper}
 */

const findByTestAttr =(wrapper , val)=>{
    return(
        wrapper.find(`[data-test="${val}"]`)
    ) ;
};

it('renders without crashing ' , ()=>{
    const wrapper = setUp();
    const appComponent = wrapper.find("[data-test='component-intro-button-counter']");
    expect(appComponent.length).toBe(1);
    //ie, there should be an html el that contains 1 div with a data-test
    //attr equal to component-intro-button-counter
});

it('renders increment button' ,()=>{
    const wrapper = setUp();
    const button = findByTestAttr(wrapper , 'inc-button');
    expect(button.length).toBe(1)
});

it('displays a counter' , ()=>{
    const wrapper= setUp();
    const counter = findByTestAttr(wrapper , 'counter-display');
    expect(counter.length).toBe(1);
});

it('has counter that starts at 0' ,()=>{
    const wrapper =setUp();
    const initialCounterState = wrapper.state('counter'); //name of the state prop

    expect(initialCounterState).toBe(0); //what will counter be when the comp first mounts?

});

it('increments the count when the button is clicked.' ,()=>{
    const counter = 7;
    const wrapper = setUp(null , {counter : counter}); //no props , and we plan to set the counter to 7

    //find button and click
    const button = findByTestAttr(wrapper , 'inc-button');
    button.simulate('click');

    //find display and test the value
    const counterDisplay = findByTestAttr(wrapper , 'counter-display');

    expect(counterDisplay.text()).toContain(counter +1 ) //text is a shallow wrapper method that returns a string of the text CONTAINED in the element
    //NOTE : use toContain(counter + 1) so that if I change any of the text that surrounds the rendered counter value, the test wont break (only testing for that counter value)
    // make sure that in 'counter-display html el contains {this.state.counter}'
    // also make sure that the button rendered actually has an onclick event for this test to pass
});
