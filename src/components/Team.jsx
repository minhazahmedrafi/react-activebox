import React, { Component, Fragment } from 'react';
import team1 from '../images/team-1.jpg';
import team2 from '../images/team-2.jpg';
import team3 from '../images/team-3.jpg';
import team4 from '../images/team-4.jpg';

export default class Team extends Component {
    render() {
        return (
            <Fragment>
                <section id="team">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3">
                                <div className="single-person">
                                    <img className="img-fluid" src={team1} alt=""/>
                                    <h4>Ruth Woods</h4>
                                    <span>FOUNDER, CEO</span>
                                    <p>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
                                    <div className="social-icons">
                                        <i class="fa fa-facebook" aria-hidden="true"></i>
                                        <i class="fa fa-twitter" aria-hidden="true"></i>
                                        <i class="fa fa-linkedin" aria-hidden="true"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="single-person">
                                    <img className="img-fluid" src={team2} alt=""/>
                                    <h4>Timothy Reed</h4>
                                    <span>FOUNDER, CEO</span>
                                    <p>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
                                    <div className="social-icons">
                                        <i class="fa fa-facebook" aria-hidden="true"></i>
                                        <i class="fa fa-twitter" aria-hidden="true"></i>
                                        <i class="fa fa-linkedin" aria-hidden="true"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="single-person">
                                    <img className="img-fluid" src={team3} alt=""/>
                                    <h4>Victoria Valdez</h4>
                                    <span>FOUNDER, CEO</span>
                                    <p>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
                                    <div className="social-icons">
                                        <i class="fa fa-facebook" aria-hidden="true"></i>
                                        <i class="fa fa-twitter" aria-hidden="true"></i>
                                        <i class="fa fa-linkedin" aria-hidden="true"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="single-person">
                                    <img className="img-fluid" src={team4} alt=""/>
                                    <h4>Alina Jenson</h4>
                                    <span>FOUNDER, CEO</span>
                                    <p>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
                                    <div className="social-icons">
                                        <i class="fa fa-facebook" aria-hidden="true"></i>
                                        <i class="fa fa-twitter" aria-hidden="true"></i>
                                        <i class="fa fa-linkedin" aria-hidden="true"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Fragment>
        )
    }
}
