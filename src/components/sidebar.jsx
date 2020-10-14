import React, { Component } from 'react';

export default class Sidebar extends Component {
    render() {
        return (
            <div>
                <div>
                    <a href="#" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></a>
                    <aside id="colorlib-aside" role="complementary" className="border js-fullheight">
                        <div className="text-center">
                            <div className="author-img" style={{ backgroundImage: 'url(images/about.jpg)' }} />
                            <h1 id="colorlib-logo"><a href="index.html">Mo IBRAHIM</a></h1>
                            <span className="email"><i className="icon-mail"></i> mohamed26@gmail.com</span>
                            <span className="number"><i className="icon-phone"></i> +44-730-550-6617</span>
                        </div>
                        <nav id="colorlib-main-menu" role="navigation" className="navbar">
                            <div id="navbar" className="collapse">
                                <ul>
                                    <li className="active"><a href="#" data-nav-section="home">Introduction</a></li>
                                    <li><a href="#" data-nav-section="about">About</a></li>
                                    {/*<li><a href="#" data-nav-section="projects">Projects</a></li>
                      <li><a href="#" data-nav-section="blog">Blog</a></li>*/}
                                    <li><a href="#" data-nav-section="timeline">Timeline</a></li>
                                </ul>
                            </div>
                        </nav>
                        <nav id="colorlib-main-menu">
                            <ul>
                                <li><a href="https://www.facebook.com/engmohamed26" target="_blank"><i className="icon-facebook2" /></a></li>
                                <li><a href="https://www.instagram.com/mohamed26/" target="_blank"><i className="icon-instagram" /></a></li>
                                <li><a href="https://www.linkedin.com/in/amit-dhawan-88b7a877/" target="_blank"><i className="icon-linkedin2" /></a></li>
                                <li><a href="https://github.com/engmi2018" target="_blank"><i className="icon-github"></i></a></li>
                                <li><a href="https://medium.com/" target="_blank"><i className="icon-blogger2"></i></a></li>
                            </ul>
                        </nav>
                    </aside>
                </div>
            </div>
        )
    }
}