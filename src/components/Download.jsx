import React, { Component, Fragment } from 'react'
import { NavLink } from 'react-router-dom'

export default class Download extends Component {
    render() {
        return (
            <Fragment>
                <section id="download">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="download-content">
                                    <h3>Are You Ready to Start? Download Now For Free!</h3>
                                    <h6>FUSCE DAPIBUS, TELLUS AC CURSUS COMMODO</h6>
                                    <NavLink className="btn btn-danger" to="">Download Here</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Fragment>
        )
    }
}
