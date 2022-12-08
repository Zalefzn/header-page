
import React, {Component} from 'react';
import './About.css';

class AboutPage extends Component{  
    constructor(props){
        super(props);
        this.state = {
          image: 'school2.jpg',
          image2: 'school.png',
          title: <p>We founded this foundation since 2012<br></br>
          which is where your focus will spark a new<br></br>
          generation of reliable and proficient in the world<br></br>
          education based on the principles that have been<br></br>
          determined by the Indonesian government</p>,
        }
        this.handleChange = this.handleChange.bind(this);
    }
    
    
    handleChange = (e) => {
        e.preventDefault();
        this.setState({
            title: '',
        });   
    }
  
    render(){
        return(
            <div className="container-content-about">
                <div className="content-about">
                    <div className="image-content">
                        <img className="image" src={this.state.image} alt=""></img>
                    </div>
                    <div className="image-content-vol2">
                        <img className="image-vol2" src={this.props.image} alt=""></img>
                    </div>
                    <div className="text-content">
                        <p className="text-vol1">
                            {this.state.title}
                        </p>
                    </div>
                    <div className="button-info">
                        <button className="btn-info" type="button" name="button" onClick={this.handleChange}>More Info</button>
                    </div>
                </div>
            </div>
        );
    }
}
export default AboutPage;