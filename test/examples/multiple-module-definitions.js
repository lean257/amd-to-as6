define([
    'some/thing'
], function(thing) {
    return {
        start: function(data) {

        },
        doSomething: require(['some/other'], function(other) {
            console.log('multiple requires')
        })
    }
})