import React from 'react'
import Header from "../Home/Header";
import Footer from "../Home/Footer";
import { BrowserRouter, Route, NavLink, useNavigate, Link, Routes } from "react-router-dom";
import pose from "../../images/pose-yoga-1.gif"
import pose2 from "../../images/pose-yoga-2.gif"
import pose3 from "../../images/pose-yoga-3.gif"
import pose4 from "../../images/pose-yoga-4.gif"

function YogaList() {
    const navigate = useNavigate();
  function handleclicktadasana(e) {
    e.preventDefault();
    navigate("/tadasana");
  }
  return (
    <div>
        <Header />
        <div class="row">
            <div class="col-12 m-b-30">
                <div class="row">
                    <div class="col-md-6 col-lg-3">
                        <div class="card" onClick={handleclicktadasana}>
                            <img class="img-fluid" src={pose} alt="" />
                            <div class="card-body">
                                <h5 class="card-title">Tadasana</h5>
                                <p class="card-text">It promotes balance and directs your attention to the present moment.</p>
                                <p class="card-text"><small class="text-muted">Last visited 3 days ago</small>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6 col-lg-3">
                        <div class="card">
                            <img class="img-fluid" src={pose2} alt="" />
                            <div class="card-body">
                                <h5 class="card-title">Utkatasana</h5>
                                <p class="card-text">This heating standing pose strengthens your legs, upper back, and shoulders.</p>
                                <p class="card-text"><small class="text-muted">Last visited 3 days ago</small>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6 col-lg-3">
                        <div class="card">
                            <img class="img-fluid" src={pose3} alt="" />
                            <div class="card-body">
                                <h5 class="card-title">Paschimottanasana</h5>
                                <p class="card-text">If your hamstrings are tight, grab a strap and loop it behind your feet.</p>
                                <p class="card-text"><small class="text-muted">Last visited 3 days ago</small>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6 col-lg-3">
                        <div class="card">
                            <img class="img-fluid" src={pose4} alt="" />
                            <div class="card-body">
                                <h5 class="card-title">Kumbhakasana</h5>
                                <p class="card-text">Plank Pose strengthens your abdominals and promotes stability.</p>
                                <p class="card-text"><small class="text-muted">Last visited 3 days ago</small>
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12 m-b-30">
                <div class="row">
                    <div class="col-md-6 col-lg-3">
                        <div class="card">
                            <img class="img-fluid" src={pose4} alt="" />
                            <div class="card-body">
                                <h5 class="card-title">Tadasana</h5>
                                <p class="card-text">It promotes balance and directs your attention to the present moment.</p>
                                <p class="card-text"><small class="text-muted">Last visited 3 days ago</small>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6 col-lg-3">
                        <div class="card">
                            <img class="img-fluid" src={pose4} alt="" />
                            <div class="card-body">
                                <h5 class="card-title">Tadasana</h5>
                                <p class="card-text">It promotes balance and directs your attention to the present moment.</p>
                                <p class="card-text"><small class="text-muted">Last visited 3 days ago</small>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6 col-lg-3">
                        <div class="card">
                            <img class="img-fluid" src={pose4} alt="" />
                            <div class="card-body">
                                <h5 class="card-title">Tadasana</h5>
                                <p class="card-text">It promotes balance and directs your attention to the present moment.</p>
                                <p class="card-text"><small class="text-muted">Last visited 3 days ago</small>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6 col-lg-3">
                        <div class="card">
                            <img class="img-fluid" src={pose4} alt="" />
                            <div class="card-body">
                                <h5 class="card-title">Tadasana</h5>
                                <p class="card-text">It promotes balance and directs your attention to the present moment.</p>
                                <p class="card-text"><small class="text-muted">Last visited 3 days ago</small>
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default YogaList