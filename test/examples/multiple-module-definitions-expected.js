import thing from 'some/thing';
export default {
    start: function(data) {

    },
    doSomething: require(['some/other'], function(other) {
        console.log('multiple requires')
    })
}