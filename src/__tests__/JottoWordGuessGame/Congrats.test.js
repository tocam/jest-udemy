import React from 'react';
import Enzyme , {shallow} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import Congrats from "../../components/jotto-word-guess-game/Congrats";
import {findByTestAttribute} from "../../__utils/test.utils";

Enzyme.configure({adapter : new EnzymeAdapter()});

/**
 * @function setup
 * @param {object} props - Component props specific to this setup
 * @returns {ShallowWrapper}
 */

const setup = ( props={} )=>{
    return shallow(<Congrats {...props}/>)
};


it('renders without crashing.' , ()=>{
    const wrapper = setup();
    const component = findByTestAttribute(wrapper , 'component-congrats');
    expect(component.length).toBe(1);
});

it('renders no text when success props is false', ()=>{
    const wrapper = setup({success : false});
    const component = findByTestAttribute(wrapper , 'component-congrats');
    expect(component.text()).toBe('');
});

it('renders a non-empty text when success prop is true',()=>{
    const wrapper = setup({success: true});
    const message = findByTestAttribute(wrapper , 'congrats-message');
    expect(message.text().length).not.toBe(0);
});



