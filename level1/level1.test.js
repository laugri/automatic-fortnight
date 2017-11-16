const level1 = require('./level1.js');
const data = require('./data.json');
const output = require('./output.json');

describe('Level 1 acceptance test', () => {
    test('Outputs carts correctly', () => {
        expect(level1.buildOutput(data)).toEqual(output);
    });
});
