
const checkStacks = require('../multi_bracket_validation').checkingStacksWithBrackets;
const verifyBrackets = require('../multi_bracket_validation').multiBracketCheck;







describe('testing any brackets in a string', ()  => {
    it('brackets should be in order with the correct ones', () => {
        const str = '(){}[]';
        verifyBrackets(str)
        checkStacks(stack1,stack2)
        expect(checkingStacksWithBrackets.toEqual(true));
        })
});
