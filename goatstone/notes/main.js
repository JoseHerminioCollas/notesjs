/* main.js Jose Collas 7.2015          */
/*
use generator functions called by a Timer
  */
var d3 = require("d3")
var Timer = require('goatstone/notes/Timer')
var React = require('react') 
var ReactDOM = require('react-dom')
require( 'babel-polyfill' ) 
var gf = require('goatstone/notes/generator')
var drawData = require('goatstone/ui/drawDataD3')
var PlayButton = require( 'goatstone/ui/PlayButton' )
var drawReact = require('goatstone/ui/drawReact')
var MakeData = require('goatstone/tool/makeData')

function init(){

  var md = new MakeData()
  var ra =   md.getRandArray( 70 )
  var g = gf( ra )

  var timer = new Timer( { tickIncrement: 1000 } )
  timer.start()
  timer.on('tick', x => {
    var a = g.next()
    if( a.value ){
      // drawData( a.value ) 
      ReactDOM.render(
        <AA arr={ a.value } />,
        document.querySelector('#portal')
        )
    }
    else{
      timer.stop()
    }
  })
}
window.addEventListener('load', function(){
  init() 
})

// arrayRender
var AA = React.createClass({

  render: function() {

    var a = this.props.arr.map( 
      ( item , i ) => {
        return (  
          <div key={ i } style={ {color: 'red'} }>
            { item }
          </div> )  
      })  
    return (
      <div style={{color:'red'}}> 
        { a }  { this.props.arr.join(' ') }
      </div>
    );

  }
});