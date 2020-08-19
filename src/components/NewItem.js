import React, {Component} from 'react';
import '../css/New.css';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

class NewItem extends Component {
    render(){
        let length = 60;
        let content = this.props.item.content;
        return(
            <div className="grid-new-item">
                <img 
                    src={"http://127.0.0.1:8000/storage/" +this.props.item.image}
                    alt=""
                    width={300}
                    height={200}
                />
                <div className="body-article">
                    <h3 className="article-title">{this.props.item.title}</h3>
                    <p className="article-content">{content.substring(0, length)}...  
                        <Link to={'/articles/'+this.props.item.id}>Read more</Link>
                    </p>
                </div>
            </div>
        )
    }

}
export default NewItem;