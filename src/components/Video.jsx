import React, {useState, useEffect} from 'react';

const Video = (props) => {
    const [width, setWidth] = useState(window.innerWidth);

    const handleResize = () => {
        setWidth(window.innerWidth);
    }

    useEffect(() => {
        document.addEventListener('resize', handleResize);
    }, []);

    return(
        <>
            <h2>{props.title}</h2>
            <iframe width={width - width * 10 / 100}
            height="400" src={`https://www.youtube.com/embed/${props.url}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </>
    )
}

export default Video;