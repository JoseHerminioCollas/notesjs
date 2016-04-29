/* goatstone.sample.sample */

var startButton = document.getElementById('start');
var pauseButton = document.getElementById('pause');

var starts = Rx.Observable.fromEvent(startButton, 'click');
var stops = Rx.Observable.fromEvent(pauseButton, 'click');

var onOff = Rx.Observable.merge(
    starts.map(function(event) { return true; }),
    stops.map(function(event) { return false; })
).startWith(true);

var ticks = Rx.Observable.timer(1000, 1000).pausable(
    onOff
).subscribe(
    function (x) {
        console.log('Next: ' + x);
    },
    function (err) {
        console.log('Error: ' + err);
    },
    function () {
        console.log('Completed');
    }
);
/*
 <button type="button" id="start">Start</button>
 <button type="button" id="pause">Pause</button>
 */
///// / / / /  /
var stuff = Rx.Observable.from(
    [1,2,3]
).flatMap(function(value) {
        return Rx.Observable.from(
            [value, value + 10]
        ).map(function(value) {
                return value * value;
            }).delayWithSelector(function(value) {
                return Rx.Observable.timer(value / 5);
            });
    });

stuff.subscribe(
    function (x) {
        console.log('Next: ' + x);
    },
    function (err) {
        console.log('Error: ' + err);
    },
    function () {
        console.log('Completed');
    }
);

function doStuffForItem(item, value, v2) {
    return Rx.Observable.....map....flatMap....filter(function(enhancedItem) {
        return enhancedItem.v3 > value;
    })
}


Rx.Observable....get items....flatMap(function(x) {
    return doStuffForItem(x.item, x.v1, x.v2);
})

'use strict'
const Rx = require('rx')

const cities = ['new-york', 'paris', 'rome', 'london']
const delay = 100
const period = 1000
const cityStream = Rx.Observable.timer( delay, period )
    .map( i => cities[ i ] )
    .take( cities.length )

cityStream
    .subscribe(
        (x) => {
            console.log('Next: ' + x)
        },
        err => { throw err }, () => console.log('Completed') )

