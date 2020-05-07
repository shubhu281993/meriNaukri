// import _ from 'lodash';

export function convertArraytoJson (response) {
    debugger;
    response.values.shift();

    var objs = response.values.map(function (x) {
        return {
            Name: x[0],
            Class: x[1],
            Home: x[2]
        };
    });
    return objs;
    console.log(objs);
}
