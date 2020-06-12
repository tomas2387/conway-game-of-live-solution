const process = require('../src/processor');
const { assert } = require('chai');

suite('ProcessorTest', () => {

    test('when_a_cell_has_one_neightbor_should_die', () => {
        const actual = process.process([1, 1]);
        assert.equal([0, 0], actual);
    });
});