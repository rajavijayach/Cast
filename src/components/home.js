import React, { Component } from 'react';
import { connect } from 'react-redux';

import TechnologyListItem from './technology-list-item';

class Home extends Component {
    techItems() {         
        return this.props.techs.map((tech)=>{
            return (
                <TechnologyListItem     
                key={tech.id}
                tech={tech}
                />
            );
        })  
    }

  render() {
    return (
        <div className="techListHolder row">            
            <ul className="col-md-8 col-md-push-2 list-group" >                
                   {this.techItems()}               
            </ul>
        </div>    
    );
  }  
}

function mapStateToProps(state){
    return {
        techs:state.techs
    };
}

export default connect(mapStateToProps)(Home);