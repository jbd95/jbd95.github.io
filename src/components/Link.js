import React from 'react'

export const Link = (props) => (
    <a href={props.href} target="_blank" rel='noopener noreferrer' className='black-color'>
        {props.content}  
    </a>
);