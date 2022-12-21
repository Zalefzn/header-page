import React, {Component} from 'react';
import './Courses.css';

class CoursesPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            image:'school.png',
            witdh:'300px',
            heigth:'200px',
            namaUser:'',
        }
        this.handleChangeButton = this.handleChangeButton.bind(this);
    }

    handleChangeButton(e){
        e.preventDefault();
        const dataUser = [
            {
                nama : 'Rizal Fauzan',
                usia : '23 Tahun',
                hobi : 'Coding',
                id : 1,
            },
            {
                nama : 'Akmal Fauzan',
                usia : '23 Tahun',
                hobi : 'Coding',
                id : 2,
            },
            {
                nama : 'Zaki Fauzan',
                usia : '23 Tahun',
                hobi : 'Coding',
                id : 3,
            }
        ];
        this.setState((state,props) => {
            return{
                namaUser: dataUser.map((data) => data.nama),
            }
        });
    }

    handleState(){
        this.setState((state, props) => {
            return{
                
            }
        });
    }


    render(){
        return(
            <div className="container-page">
                <div className="content-page">
                    <div className="content-header">
                        <div className="image-data-vol1">
                            <img src={this.state.image} 
                            alt="" width={this.state.witdh} height={this.state.heigth}></img>
                        </div>
                        <div className="content-fill">
                            <div className="judul-header">
                                <h3>{this.state.namaUser}</h3>
                            </div>
                            <div className="sub-judul">
                                this courses for child
                            </div>
                            <div className="button-content">
                                <button type="button" name="button"
                                onClick={this.handleChangeButton}>
                                    Learn More
                                </button>
                            </div>
                        </div>
                    </div>
                    {/*hedaer page 2*/}
                    <div className="content-header-vol2">
                        <div className="image-data-vol2">
                            <img src={this.state.image} 
                            alt="" width={this.state.witdh} height={this.state.heigth}></img>
                        </div>
                        <div className="content-fill-vol2">
                            <div className="judul-header-vol2">
                                <h3>Courses Vol 1</h3>
                            </div>
                            <div className="sub-judul">
                                this courses for child
                            </div>
                            <div className="button-content-vol2">
                                <button type="button" name="button">
                                    Learn More
                                </button>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>
        );
    }
}

export default CoursesPage;