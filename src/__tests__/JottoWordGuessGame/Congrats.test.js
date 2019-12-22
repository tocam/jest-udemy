import React from 'react';
import Enzyme , {shallow} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import Congrats from "../../components/jotto-word-guess-game/Congrats";

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

});

it('renders no text when success props is false', ()=>{

});

it('renders a non-empty text when success prop is true',()=>{

});



