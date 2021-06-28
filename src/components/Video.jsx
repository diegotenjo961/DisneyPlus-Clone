import React from 'react'

const Video = (props) => {
    return(
        <>
            <h2>{props.title}</h2>
            <iframe width="1000" height="400" src={`https://www.youtube.com/embed/${props.url}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </>
    )
}

export default Video;