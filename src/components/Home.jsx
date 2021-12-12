import React, { Component, Fragment } from 'react'

export default class Home extends Component {
    render() {
        return (
            <Fragment>
               <section id="header">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="header-info">
                                <h1>YOUR FAVORITE ONE PAGE MULTI PURPOSE TEMPLATE</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna vel scelerisque nisl consectetur et.</p>
                                <button className="btn btn-danger">FIND OUT MORE</button>
                                </div>
                            </div>
                        </div>
                    </div>
               </section>
            </Fragment>
        )
    }
}
