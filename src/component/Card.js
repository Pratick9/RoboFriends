import React from 'react';
//https://tachyons.io/ --for stylinfg references

const Card = ({name,username,email})=> {

	return(
		<div className = ' garamond f6 bg-dark-green br3 grow shadow-5 pa2 b-gold dib ma2 '>

			<img alt='photos ' src={`https://robohash.org/${name}.png`}/>
			<div>
				<h1>{name}</h1>
				<p className ='f3'>{email}</p>
				<p >{username}</p>
			</div>
		</div>
	);
}

export default Card;

//backastrik ka bhut bada khela h idhar 