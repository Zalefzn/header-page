
import React, {Component} from 'react';
import './About.css';

class AboutPage extends Component{  
    constructor(props){
        super(props);
        this.state = {
          image: 'school2.jpg',
          image2: 'school.png',
        }
        
    }


   
  
    render(){
        return(
            <div className="container-content-about">
                <div className="content-about">
                    <div className="image-content">
                        <img className="image" src={this.state.image2} alt=""></img>
                    </div>
                    <div className="image-content-vol2">
                        <img className="image-vol2" src={this.state.image} alt=""></img>
                    </div>
                    <div className="text-content">
                        <p>
                            Hello World
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}
export default AboutPage;