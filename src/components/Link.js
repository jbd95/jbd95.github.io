import React from 'react'

export const Link = (props) => (
    <a href={props.href} target="_blank" rel='noopener noreferrer' className='black-color' onClick={props.onClick}>
        {props.content}  
    </a>
);

export const A = (props) => (
    <a href={props.href} target='_blank' rel='noopener noreferrer' className={props.className} onClick={props.onClick}>
        {props.children}
    </a>
)