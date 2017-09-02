import React from 'react';
import { Link } from 'react-router-dom';

export default (props)=>{
    return(
            <li className="list-group-item techItemHolder" >
                <Link to={`/repositories/${props.item.full_name}`}>
                    <div className="video-list media">
                        <div className="media-left">
                            <img className="media-object" src= {props.item.full_name}/>
                        </div>
                        <section className="media-body">
                            <div className="techItemTitle">
                                    {props.item.full_name}
                            </div>
                            <div className="techItemDescription">
                            <p> {props.item.description} </p>
                            <p>Created at :         {props.item.created_at} </p>
                            <p> Stars : {props.item.created_at} </p>
                            </div>
                        </section>
                    </div>
                </Link>
            </li>
    );
}