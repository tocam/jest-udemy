/**
 *
 * @param { ShallowWrapper } wrapper - Enzyme shallow wrapper
 * @param {string } val - Value of data-test attr for search/find
 * @returns {ShallowWrapper}
 */

export const findByTestAttribute =(wrapper , val)=>{
    return wrapper.find(`[data-test="${val}"]`);
};