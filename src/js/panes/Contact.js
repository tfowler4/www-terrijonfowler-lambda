import React from "react";

class Contact extends React.Component {
    constructor() {
        super();
    }

    render() {
        const contactStyle = {
            'backgroundColor':'orange',
            'fontSize':'200px'
        };

        const contactCircle = {
            'height':'200px',
            'width':'200px'
        };

        return (
            <div className="row">
                <div className="content-pane col" style={contactStyle} id="contact" name="contact">
                    <div className="row">
                        <i className="fa fa-car"></i>
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <div className="rounded-circle border border-dark" style={contactCircle}>
                                
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="rounded-circle border border-dark" style={contactCircle}>
                                
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="rounded-circle border border-dark" style={contactCircle}>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }            
}

export default Contact;