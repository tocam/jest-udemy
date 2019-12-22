import React from 'react';

/**
 * Functional react component for congratulatory message
 * @function
 * @param {object} props - Props from Jotto Main .
 * @returns {JSX.Element} - Rendered component (or null if `success` prop is true)
 */

const Congrats = ( props )=>{
    const {success} = props;
    return(

        <div data-test="component-congrats">
            {success ?
                <span data-test="congrats-message"> Congratulations! You guessed the word.</span>
                : <span data-test="congrats-message"/>}
        </div>
    )
};

export default Congrats