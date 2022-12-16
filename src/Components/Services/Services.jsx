import React, {Component} from'react';
import './Services.css';

class ServicesPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            image: "school2.jpg",
            image2: "school.png",
        }
    }

    
    render(){
        return(
            <div className="container-content">
                <div className="image-bg">
                    <img src={this.state.image} alt=""></img>
                </div>
                <div className="services">
                    <h2>SERVICES</h2>
                    <p>We have more services for<br></br>
                    create a new era in this education</p>
                </div>
                <div className="content">
                    <div className="card-1">
                        <img src={this.state.image2} alt=""></img>
                        <h2>Study Aboard</h2>
                        <p>Kami Mengharapkan Murid-Murid Semua<br></br>
                        bisa memberikan dampak positif
                        </p>
                        <button className="button1" type="button" name="button">More Info</button>
                    </div>
                    <div className="card-2">
                        <img src={this.state.image} alt=""></img>
                        <h2>Study Tour</h2>
                        <p>Kami Mengharapkan Murid-Murid Semua<br></br>
                        bisa memberikan dampak positif
                        </p>
                        <button className="button1" type="button" name="button">More Info</button>
                    </div>
                    <div className="card-3">
                        <img src={this.state.image2} alt=""></img>
                        <h2>Student Exchange</h2>
                        <p>Kami Mengharapkan Murid-Murid Semua<br></br>
                        bisa memberikan dampak positif
                        </p>
                        <button  className="button1" type="button" name="button">More Info</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ServicesPage;