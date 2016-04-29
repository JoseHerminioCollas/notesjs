/* goatstone.remote.async-samples */
const async = require( 'async' )

var users = [];
async.series([
    a, b, c
]);
function a( cb ){
    cb()
    console.log( 11111, cb )
}
function b( cb ){
    cb()
    console.log( 2, cb )
}
function c( cb ){
    cb()
    console.log( 333, cb )
    return 2;
}

/* goatstone.remote.async-tasks */
'use strict'
const async = require( "async" )

const twitterRemote = require( 'goatstone/remote/task/twitter-remote' )
const countryRemote = require( 'goatstone/remote/task/country-remote' )
const weatherRemote = require( 'goatstone/remote/task/weather-remote' )

weatherRemote.q = 'Cleveland'

const tasks = [
    weatherRemote,
    twitterRemote,
    countryRemote
]

async.parallel( tasks.map( e => {
    return e.task
} ), onComplete )

function onComplete(){
    console.log("complete. . .")
}

/*
 get the weather
 get twitter data about the condition
 get some country data

 display all the data at once

 taskFactory.get     getTask( 'twitter' )      */
