
import { useState } from 'react';
import "../App.css";

function ArtPiece(props) {
	
	return (
		<div className='ArtItem'>
      <div className='itemheader'>
        <h2>{props.name}</h2>
        <button className="button-51" onClick={() => {window.open(props.link, '_blank');}}>  External Link </button>
      </div>
      
      <p><b>Context:</b> {props.context}</p>
      <p><b>Users:</b> {props.users}</p>
      <p className="iteminfo"><b>Purpose & Importance:</b> {props.desc}</p>
      <img className="iteminfo" src={props.image} alt="my image" />
      
      {props.description}
      
		</div>
	)

}

export default ArtPiece;