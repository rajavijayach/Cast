import React from 'react';
import { Link } from 'react-router-dom';

export default (props)=>{
    return(
            <li className="list-group-item techItemHolder" >
                <Link to={`/repositories/${props.tech.name}`}>
                    <div className="video-list media">
                        <div className="media-left">
                            <img className="media-object" src={props.tech.imageUrl}/>
                        </div>
                        <section className="media-body">
                            <div className="techItemTitle">
                                    {props.tech.name}
                            </div>
                            <div className="techItemDescription">
                                    {props.tech.description}
                                    
                            </div>
                        </section>
                    </div>
                </Link>
            </li>
    );
}