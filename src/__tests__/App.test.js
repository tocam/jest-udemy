import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from "../App";

Enzyme.configure({adapter : new EnzymeAdapter()});

/**
 * A Factory function to create a ShalloWrapper for the App Componnent*
 * @function setUp
 * @param {object} props - Component props specific to this setUp.
 * @param {any} state - Initial State
 * @returns {ShallowWrapper} //this is just an enzyme class
 */

const setUp = (props = {} , state = null) => {
    return shallow(<App{...props}/>)
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
    const appComponent = wrapper.find("[data-test='component-app']");
    expect(appComponent.length).toBe(1);
    //ie, there should be an html el that contains 1 div with a data-test
    //attr equal to component-app
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

});
