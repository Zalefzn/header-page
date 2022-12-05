import React, {Component} from 'react';
import './Header.css';

class HeaderPage extends Component{
  constructor(props){
    super(props);
    this.state = {
      image:"school.png",
      logo:"logo.png",
    }
    this.handlePrevent = this.handlePrevent.bind(this);
    this.changeColor  = this.changeColor.bind(this);
  }

  handlePrevent(e){
    e.preventDefault();
  }
  
  changeColor(){
    const textColor = document.querySelector('h2#change');
    const buttonChange = textColor.getElementsByClassName('button')
    textColor.style.color = "red";
    console.info(buttonChange);
  }

  componentDidMount(){
   
  }

  render(){
    return(
      <div className="container-content">
        <div className="logo">
          <img src={this.state.logo} alt=""></img>
        </div>
        <div className="image">
          <img src={this.state.image} alt =""></img>
        </div>
        <div className="header">
          <h2 id="change">
          Education is very important<br></br>
          and able to provide a very<br></br>
          significant change
          </h2>
          <p>
          come join with us in order to <br></br>
          create education quality and moral
          </p>
          <button className="button" type="button" name="button" >Join Now</button>
        </div>
      </div>
    );
  }
}

export default HeaderPage;