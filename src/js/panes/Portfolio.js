import React from "react";

class Portfolio extends React.Component {
    constructor() {
        super();
    }

    render() {
        const portfolioStyle = {
            'backgroundColor':'yellow',
            'fontSize':'200px'
        };

        return (
            <div className="row">
                <div className="content-pane col" style={portfolioStyle} id="portfolio" name="portfolio">
                    <i className="fa fa-lock"></i>
                </div>
            </div> 
        );
    }            
}

export default Portfolio;