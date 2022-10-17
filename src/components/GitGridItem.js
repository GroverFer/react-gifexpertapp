import React from 'react'

export const GitGridItem = ({ id, title, url }) => {
    return (
        <div className='card animate__animated animate__fadeInLeft'>
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    )
}
