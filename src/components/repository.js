import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchRepos } from "../actions";
import RepoItem from './repoitem';

class Repository extends Component{
    componentDidMount() {
        const { tech } = this.props.match.params;
        this.props.fetchRepos(tech);
      }
    renderRepos(){      
           console.log(this.props.repos.items);
           if(this.props.repos.items){
            return this.props.repos.items.map((item)=>{
                return (
                    <RepoItem 
                        key={item.id}
                        item={item}
                    />
                );
            })
           }
           
    }

    render() {
        return (
            <div className="techListHolder row">            
                <ul className="col-md-8 col-md-push-2 list-group" >                
                    {this.renderRepos()}               
                </ul>
            </div>    
                      
        );
    }
}

function mapStateToProps(state) {
    return {
        repos:state.repos
    };
} 

export default connect(mapStateToProps, { fetchRepos })(Repository);

