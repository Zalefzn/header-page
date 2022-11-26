import React, {Component} from 'react';
import './Header.css';

class Header extends Component{
    constructor(props){
      super(props);
      this.state = {
        image: "school.png",
        logo: "logo.png",
      }
    }

    render(){
        return(
          <div className="header-content">
            <div className="content">
              <div className="imgData">
                <img src={this.state.image} alt=""></img>
              </div>
              <div className="text-header">
                <h2>School</h2>
              </div>
              <div className="sub-text">
                <p>School is Very Importent</p>
              </div>
            </div>
          </div>
        );
    }
}

export default Header;