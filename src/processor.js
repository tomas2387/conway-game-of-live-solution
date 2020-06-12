(function (exports) {
    /**
     * Returns the new map state
     * @param {number[]} array 
     */
    function _process(array) {
        // TODO
        // En una celda nace un ser vivo si  tiene 3 celdas vecinas con seres vivos.    
        // Una celda con un ser vivo, sigue viviendo si tiene dos o tres vecinos vivos. Si no, muere por soledad (<2)  o por sobrepoblación (>3)    

        return array;
    }
    exports.process = _process;

})(typeof module === 'object' ? module.exports : window);
