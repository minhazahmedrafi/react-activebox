import React, { Component, Fragment } from 'react'
import { NavLink } from 'react-router-dom'

export default class Footer extends Component {
    render() {
        return (
            <Fragment>
                <section id="footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="single-ft">
                                    <h6>LOCATION</h6>
                                    <p>3481 Melrose Place<br></br> Beverly Hills, CA 90210</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="single-ft">
                                    <h6>SHARE WITH LOVE</h6>
                                    <div className="social-icons">
                                        <i class="fa fa-facebook" aria-hidden="true"></i>
                                        <i class="fa fa-twitter" aria-hidden="true"></i>
                                        <i class="fa fa-linkedin" aria-hidden="true"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="single-ft">
                                    <h6>ABOUT ACTIVEBOX</h6>
                                    <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec ullamcorper nulla non metus auctor fringilla.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-10 mx-auto">
                                <div className="copyright">
                                    <p>Copyright © 2021 ActiveBox. All Rights Reserved Made by <NavLink to="//minhazahmedrafi.github.io/coderminhaz/" target="_blank">coderminhaz</NavLink></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Fragment>
        )
    }
}
