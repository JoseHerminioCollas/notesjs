/*  WeatherButton
 @param {function} Obervable Subject
 */
'use strict'
const Rx = require( 'rx' )
const React = require( 'react' )

module.exports =  function( appSubject ){

    var Weather = React.createClass( {
        componentWillMount: function(){
            const THIS = this
            this.buttonA = appSubject
            this.buttonA.subscribe( function ( e ){
                THIS.setState( { a: false, b: 'clicked!' } )
            } )
        },
        getInitialState: function() {
            return {a: true, b: '333'};
        },
        render: function() {
            var stateA = (this.state.a) ? 'T' : 'F'
            return	<div> 1111
            <button onClick={ this.buttonA }> Get Weather </button>
            {this.state.b} { stateA }
            </div>
        }
    })

    return Weather
}

