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