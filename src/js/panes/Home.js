import React from "react";

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name : null,
            address : null,
            phone : null
        }

        $.ajax({
            url: '/db/get/profile',
            success: function(data) {
                this.updateProfile(data);
            }.bind(this),
            complete: function(data) {

            }
        });
    }

    updateProfile(data) {
        this.setState({
            name: data[0].name,
            address: data[0].address,
            phone: data[0].phone
        });
    }

    render() {
        const homeStyle = {
            
        };

        return (
            <div className="row">
                <div className="content-pane col" style={homeStyle} id="home" name="home">

                    <div className="row justify-content-center mb-5">
                        <div className="col-6">
                            <div class="card bg-light">
                                <div class="card-body">
                                    <h5 class="card-title display-2">
                                        {this.state.name}
                                    </h5>
                                    <p class="card-text lead">
                                        {this.state.address}.{this.state.phone}
                                    </p>
                                </div>

                                <div class="card-footer text-white bg-dark">
                                    Front-End &#183; Back-End &#183; Designer &#183; Developer &#183; Engineer &#183; Breaker of Things
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="row justify-content-center mb-5">
                        <div className="col-3">
                            <div className="mx-auto card border-0" style={{width:'18rem'}} data-aos="fade-up" data-aos-delay="350">
                                <div className="mx-auto border border-primary rounded-circle text-center" style={{height:'200px', width:'200px'}}>
                                    <div className="d-table-cell align-middle" style={{height:'200px', width:'200px'}}>
                                        <i className="fa fa-street-view text-primary" style={{fontSize:'100px'}}></i>
                                    </div>
                                </div>

                                <div className="card-body">
                                    <h5 className="card-title">Atlanta, GA</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-3">
                            <div className="mx-auto card border-0" style={{width:'18rem'}} data-aos="fade-up" data-aos-delay="450">
                                <div className="mx-auto border border-primary rounded-circle text-center" style={{height:'200px', width:'200px'}}>
                                    <div className="d-table-cell align-middle" style={{height:'200px', width:'200px'}}>
                                        <span class="display-1 text-primary">X</span>
                                    </div>
                                </div>

                                <div className="card-body">
                                    <h5 className="card-title">Years of Experience</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-3">
                            <div className="mx-auto card border-0" style={{width:'18rem'}} data-aos="fade-up" data-aos-delay="550">
                                <div className="mx-auto border border-primary rounded-circle text-center" style={{height:'200px', width:'200px'}}>
                                    <div className="d-table-cell align-middle" style={{height:'200px', width:'200px'}}>
                                        <i className="fa fa-bars text-primary" style={{fontSize:'100px'}}></i>
                                    </div>
                                </div>

                                <div className="card-body">
                                    <h5 className="card-title">Full Stacker</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="row justify-content-center">
                        <div className="col-6 mx-auto">
                            <table className="mx-auto">
                                <tbody>
                                    <tr>
                                        <td className="align-middle border-right pr-5">
                                            <span className="display-4">LEARN MORE</span>
                                        </td>
                                        <td className="align-middle pl-5">
                                            <i className="fa fa-arrow-circle-down" style={{fontSize:'100px'}}></i>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }            
}

export default Home;