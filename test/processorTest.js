const process = require('../src/processor');
const { assert } = require('chai');

suite('ProcessorTest', () => {

    test('when_a_cell_has_one_neightbor_should_die', () => {
        const actual = process.process([[1, 1]]);
        assert.deepEqual([[0, 0]], actual);
    });

    test('when_a_cell_has_3_neighbors_should_be_alive', () => {
        const actual = process.process([
            [1, 1],
            [1, 1]
        ]);
        assert.deepEqual([
            [1, 1],
            [1, 1]
        ], actual);
    });

    test('when_coalesque_called_with_undefined_should_return_0', () => {
        assert.equal(0, process.coalesque(1, 1, [[]]));
    });

    test('when_coalesque_called_with_0_should_return_0', () => {
        assert.equal(0, process.coalesque(0, 0, [[0]]));
    });

    test('when_coalesque_called_with_1_should_return_1', () => {
        assert.equal(1, process.coalesque(0, 1, [[0, 1]]));
    });

    test('when_countNeighbors_called_with_two_neighbors_should_return_2', () => {
        assert.equal(2, process.countNeighbors(0, 1, [[1, 1, 1]]));
    });

    test('when_countNeighbors_called_with_no_neighbors_should_return_0', () => {
        assert.equal(0, process.countNeighbors(0, 0, [[]]));
    });

    test('when_countNeighbors_called_with_one_neighbors_should_return_1', () => {
        assert.equal(1, process.countNeighbors(0, 0, [[1, 1]]));
    });
});