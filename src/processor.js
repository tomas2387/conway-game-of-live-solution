(function (exports) {
    /**
     * Returns the new map state
     * @param {number[][]} array 
     */
    function _process(array) {
        // En una celda nace un ser vivo si  tiene 3 celdas vecinas con seres vivos.    
        // Una celda con un ser vivo, sigue viviendo si tiene dos o tres vecinos vivos. Si no, muere por soledad (<2)  o por sobrepoblación (>3)    

        const returnArray = [];
        for (let i = 0; i < array.length; i++) {
            if (!returnArray[i]) {
                returnArray[i] = [];
            }
            for (let j = 0; j < array[i].length; j++) {
                const element = array[i][j];
                returnArray[i][j] = _getNewState(array[i][j], _countNeighbors(i, j, array));
            }
        }

        return returnArray;
    }

    function _countNeighbors(i, j, array) {
        return _coalesque(i - 1, j - 1, array) +
            _coalesque(i - 1, j, array) +
            _coalesque(i - 1, j + 1, array) +
            _coalesque(i, j - 1, array) +
            _coalesque(i, j + 1, array) +
            _coalesque(i + 1, j - 1, array) +
            _coalesque(i + 1, j, array) +
            _coalesque(i + 1, j + 1, array);
    }

    function _coalesque(i, j, array) {
        if (array[i] === undefined || array[i][j] === undefined) {
            return 0;
        }

        return array[i][j] ? 1 : 0;
    }

    function _getNewState(state, neighbors) {
        if (neighbors > 3 || neighbors < 2) {
            return 0;
        }
        else if (neighbors === 3) {
            return 1;
        }

        return state;
    }

    exports.process = _process;
    exports.countNeighbors = _countNeighbors;
    exports.coalesque = _coalesque;
    exports.getNewState = _getNewState;

})(typeof module === 'object' ? module.exports : window);
