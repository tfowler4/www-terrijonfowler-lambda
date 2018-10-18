import React from "react";

class Resume extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            work_experience : null,
        }

        $.ajax({
            url: '/db/get/resume',
            success: function(data) {
                this.updateResume(data);
            }.bind(this),
            complete: function(data) {

            }
        });
    }

    updateResume(data) {
        this.setState({
            work_experience: data,
        });
    }

    drawTimeline() {
        var timeline = [];

        if ( this.state.work_experience != null ) {
            for ( let i = 0; i < this.state.work_experience.length; i++ ) {
                let work_experience = this.state.work_experience[i];
                let html = '';

                var container_side = 'container-timeline right-timeline';
                var fade_side      = 'fade-right';

                if ( i % 2 == 0 ) {
                    container_side = 'container-timeline left-timeline';
                    fade_side      = 'fade-left';
                }

                timeline.push(
                    <div className={container_side} data-aos={fade_side} data-aos-delay="450" data-aos-once="true">
                        <div className="content-timeline text-left">
                            <div className="text-center">
                                <h1 className="display-4 text-center mb-0" style={{fontSize: '2.0rem'}}>{work_experience.position}</h1>
                                <p className="lead mb-0">{work_experience.company} <small className="text-muted">{work_experience.location_city}, {work_experience.location_state}</small></p>
                                <p className="lead mb-0"><strong>{work_experience.duration_start} - {work_experience.duration_end}</strong></p>
                            </div>
        
                            <p>
                                <ul>
                                    <li>{work_experience.description_1}</li>
                                    <li>{work_experience.description_2}</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                )
            }
        }

        return timeline;
    }

    render() {
        const resumeStyle = {

        };

        return (
            <div className="row">
                <div className="content-pane col" style={resumeStyle} id="resume" name="resume">

                    <div className="row justify-content-center mb-5">
                        <div className="col-10">
                            <div className="timeline">
                                {this.drawTimeline()}
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        );
    }            
}

export default Resume;