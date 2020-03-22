// You should implement your task here.

module.exports = function towelSort(matrix = null) {
    if (matrix == null) {
        return [];
    }

    matrix.forEach((arr, i) => {
        if (i % 2 == 0) {
            arr.sort((a, b) => {
                if (a < b) return -1;
                if (a == b) return 0;
                if (a > b) return 1;
            });
        } else {
            arr.sort((a, b) => {
                if (a < b) return 1;
                if (a == b) return 0;
                if (a > b) return -1;
            });
        }
    });
    return matrix.reduce((result, item) => {
        return [].concat(result, item);
    }, []);
};
