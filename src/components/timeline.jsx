import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2><a href="#"> Clone Enthusiastic - </a> <span>2018-present</span></h2>
                        <ul>
                          <li>
                            <p> <b> HTML5 and CSS3 </b> - Semantic Elements, CSS Grid, Flexbox, ES+</p>
                          </li>
                          <li>
                            <p> <b> ReactJS </b> - Components, Props, Events, Hooks, Router, Axios, Redux: Store, Reducers, Actions</p>
                          </li>
                          <li>
                            <p> <b> MongoDB </b> - NodeJS & Express, Web API, Body Parser, File Upload, JWT, Mongoose, Aggregation</p>

                            
                          </li>
                          <li>
                            <p> <b> Development </b> - ESLint, Babel, Git, Github,</p>
                          </li>
                          <li>
                            <p> <b> Deployment </b> -  Heroku Watch React & Node Tutorial
                               Proud of work done on <a href='https://slack-clone-7c9d7.firebaseapp.com'> What The Font </a> IOS app </p>
                          </li>
                          <li>
                            <p> <b> Challenges </b> - I needed to register the user before redirecting them to the checkout. In this part, 
                            and created forms for getting user info and saved them in the database,
                            Admin should be able to define products and update the count in stock whenever they like. This is about managing ECommerce products.
                              Subsequently, I implemented the checkout wizard including sign in, shipping info,
                              payment method, and place order.</p>

                          </li>
                        </ul>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2><a href="#"> Clone-apps development -</a> <span>2015-2018</span></h2>
                        <ul>
                          <li>
                            <p> <b> Team Lead </b> -  End to end delivery on SmartView and MagicInfo iOS app</p>
                          </li>
                          <li>
                            <p> <b> Requirement gathering and RFP analysis </b> -  Gather project requirements from client and provide estimates on project delivery timelines</p>
                          </li>
                          <li>
                            <p> <b> Working experience on C++ project </b> to change SmartTV settings from desktop app. </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2><a href="#"> NanoTech Enthusiastic -  </a> <span>2010-2015</span></h2>
                        <ul>
                          <li>
                            <p> <b> Android app development </b> -  For insurance clients like Standard Life </p>
                          </li>
                          <li>
                            <p> <b> Proof of concepts developed </b> -  Screen Mirror app on projector </p>
                          </li>
                          <li>
                            <p> <b> Completed 6 months Green Field training </b> on various languages like C++, Java </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
