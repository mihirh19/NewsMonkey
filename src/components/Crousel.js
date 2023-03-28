import React from 'react'
import defaul from './default.png'


function Crousel(props) {
    // let {title, desc, imageurl, newsid, author, date, source} = props;
    let {imge} = props;
    return (
        <div className="carousel-item active">
            <img src={imageurl} className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
                <h5>{title}</h5>
                <p>Some representative placeholder content for the first slide.</p>
            </div>
        </div>

    )
}

export default Crousel;