import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AOS from 'aos';
import Resume from './panes/Resume';
import Contact from './panes/Contact';
import Portfolio from './panes/Portfolio';
import Home from './panes/Home';

import styles from '../css/style.css';

(function() {
    $(document).ready(function() {
        AOS.init();

        class Page extends React.Component {
            constructor(props) {
                super(props);
            }
            
            render() {
                return (
                    <div id="root-container" className="container-fluid">
                        <Header />
                        <Content />
                    </div>
                )
            }
        }

        class Header extends React.Component {
            constructor() {
                super();
            }

            render() {
                return (
                    <nav id="header" className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mx-auto">
                                <li className="nav-item active">
                                    <a className="nav-link" href="#home">Home <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#resume">Resume</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" href="#portfolio">Portfolio</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" href="#contact">Contact</a>
                                </li>
                            </ul>
                        </div>

                        <a className="navbar-brand" href="#"></a>
                    </nav>
                );
            }
        }

        class Content extends React.Component {
            constructor(props) {
                super(props);
            }

            render() {
                return (
                    <div className="container-fluid">
                        <Home />
                        <Resume />
                        <Portfolio />
                        <Contact />
                    </div>
                );
            }            
        }

        class Pane extends React.Component {
            constructor() {
                super();
            }

            render() {
                return (
                    <div />
                );
            }            
        }

        class Footer extends React.Component {
            constructor() {
                super();
            }

            render() {
                return (
                    <div>
                        <a id="back-to-top" href="#" className="btn btn-primary btn" role="button" title="Return to Top" data-toggle="tooltip" data-placement="left">
                            <i class="fa fa-chevron-up"></i>
                        </a>    
                    </div>
                );
            }
        }

        ReactDOM.render(
            <Page />,
            document.getElementById('root')
        );

        
        (function() {
            // 882px hard set for desktop for now

            $('.content-pane').css('height', '938px');
            
            var hash = window.location.hash;

            if (hash) {
                const element = $(hash);

                $('body,html').animate({
                    //scrollTop: element.offset().top-56
                    scrollTop: element.offset().top
                });                
            }

            AOS.refresh();
        })();
        
    });

    // scroll body to 0px on click
    $(document).on('click', '#back-to-top', function() {
        $('#back-to-top').tooltip();

        $('body,html').animate({
            scrollTop: 0
        }, 800);
        
        return false;
    });

    $(document).on('click', '.nav-link', function(event) {
        //event.preventDefault();
        //event.stopPropagation();

        const tag     = $(this).attr('href');
        const element = $(tag);

        $('body,html').animate({
            //scrollTop: element.offset().top-56
            scrollTop: element.offset().top
        }, 800);

        return false;
    });

    /*
    $(window).on('resize', function() {
        var windowHeight = $(window).height();
        
        $('.content-pane').css('height', windowHeight + 'px');
    });
    */
})();