import React, { Component } from "react"

export class Redirect extends Component {
  constructor( props ){
    super()
    this.state = { ...props }
  }
  render(){
    const iframe = `
      <iframe 
        src="https://krishnadixitblog.wordpress.com" 
        style="
          position:fixed;
          width:100%; 
          height:100%; 
          border:none; 
          margin:0; 
          padding:0;
        ">
      </iframe>`
    return(
      <div dangerouslySetInnerHTML={ {__html: iframe}} />
    )
  }
}

export default Redirect