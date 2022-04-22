import "./Home.css";
import Header from "./Header";
import Footer from "./Footer";
import features1 from "../../images/features1.png";
import features2 from "../../images/features1.gif";
import home from "../../images/home.gif";
import news from "../../images/news2.gif";
import Alan from "../../Alan";
import { ethers } from "ethers";
import React, { useState } from "react";

function Home() {
  const [amount, setAmount] = useState(0.01);
  const [destinationAddress, setDestinationAddress] = useState(
    "0x6bf235032fc4a7C05092059A5e92A5f80316237d"
  );
  const startPayment = async (event) => {
    console.log(amount, destinationAddress);

    event.preventDefault();

    try {
      if (!window.ethereum) {
        throw new Error("No crypto wallet found. Please install it.");
      }
      await window.ethereum.send("eth_requestAccounts");
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      ethers.utils.getAddress(destinationAddress);
      const transactionResponse = await signer.sendTransaction({
        to: destinationAddress,
        value: ethers.utils.parseEther(amount.toString()),
      });
      console.log({ transactionResponse });
    } catch (error) {
      console.log({ error });
    }
  };
  return (
    <div>
      <Header />
      <div className="wrapper">
        <Alan />
        <section className="banner bg-1" id="home">
          <div className="container">
            <div className="row">
              <div className="col-md-8 align-self-center">
                <div className="content-block">
                  <h1 className="home-text">
                    <span>V</span>
                    <span>C</span>
                    <span>a</span>
                    <span>r</span>
                    <span>e</span>
                  </h1>
                  <h5>"Fitness is not a destination. It's a way of life."</h5>
                </div>
              </div>
              <div className="col-md-4">
                <div className="image-block">
                  <img
                    className="img-fluid phone-thumb"
                    src={home}
                    alt="home-img"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="about section bg-2" id="about">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 align-self-center text-center">
                <div className="image-block">
                  <img
                    className="phone-thumb-md img-fluid"
                    src={features1}
                    alt="features"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-10 m-md-auto align-self-center ml-auto">
                <div className="about-block">
                  <div className="about-item">
                    <div className="content">
                      <h5>Better Tech. Better Health.</h5>
                      <p>
                        A connected fitness system which helps you lose weight
                        faster and more consistently.
                      </p>
                    </div>
                  </div>
                  <div className="about-item active">
                    <div className="content">
                      <h5>Elite Coaches</h5>
                      <p>
                        Best-in-class Coaches for supreme guidance and
                        motivation. A health dashboard with 80+ parameters which
                        helps you stay healthy, so you can lose weight faster.
                      </p>
                    </div>
                  </div>
                  <div className="about-item">
                    <div className="content">
                      <h5>Personalized Diet Plans</h5>
                      <p>
                        Extensive Diet and Workout Plans curated just for you
                        and your fitness goals. Diet and Workout Plans curated
                        for your body type and your fitness goals.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section feature" id="feature">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="section-title">
                  <h2>Website Features</h2>
                  <p>
                    With the VCare, kickstart your journey towards an all new
                    you. Talk to our expert to know more.
                  </p>
                </div>
              </div>
            </div>
            <div className="row bg-elipse">
              <div className="col-lg-4 align-self-center text-center text-lg-right">
                <div className="feature-item">
                  <div className="content">
                    <h5>Diet Plans</h5>
                    <p>With the right data, reach your diet goals faster.</p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="content">
                    <h5>Timeline & History</h5>
                    <p>
                      Get a feed of your whole day in one single place and
                      receive feedback on your choices.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 text-center">
                <div className="feature-item mb-0">
                  <div className="content">
                    <h5>Reporting</h5>
                    <p>Monthly diet & fitness analysis</p>
                  </div>
                </div>
                <div className="app-screen">
                  <img className="img-fluid" src={features2} alt="app-screen" />
                </div>
                <div className="feature-item">
                  <div className="content">
                    <h5>Blogs</h5>
                    <p>Coach feedback and guidance through sessions</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 text-center text-lg-left align-self-center">
                <div className="feature-item">
                  <div className="content">
                    <h5>Yoga</h5>
                    <p>Learn to have the correct posture and meditate.</p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="content">
                    <h5>Visual Fitness </h5>
                    <p>Learn from interactive video lessons on the website</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pricing section bg-shape" id="pricing">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="section-title mb-4">
                  <h2 className="mb-3">Choose Your Membership Plan</h2>
                  <p>
                    Explore Workout Programs, Meal Plans, and Personal Coaches.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="pricing-table text-center">
                  <div className="title">
                    <h5>Free</h5>
                  </div>
                  <div className="price">
                    <p>
                      $0<span>/month</span>
                    </p>
                  </div>
                  <ul className="feature-list">
                    <li>Free Yoga Sessions</li>
                    <li>Free Diet Plans</li>
                    <li>No Personal Coach</li>
                    <li>No Discount on Products</li>
                  </ul>
                  <div className="action-button">
                    <button className="btn-main-rounded">Start Now</button>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="pricing-table featured text-center">
                  <div className="title">
                    <h5>Basic</h5>
                  </div>
                  <div className="price">
                    <p>
                      $19<span>/month</span>
                    </p>
                  </div>
                  <ul className="feature-list">
                    <li>Free Yoga Sessions</li>
                    <li>Free Diet Plans</li>
                    <li>Personal Coach</li>
                    <li>No Discount on Products</li>
                  </ul>
                  <div className="action-button">
                    <button className="btn-main-rounded" onClick={startPayment}>
                      Pay with MetaMask
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 m-md-auto">
                <div className="pricing-table text-center">
                  <div className="title">
                    <h5>Advance</h5>
                  </div>
                  <div className="price">
                    <p>
                      $99<span>/month</span>
                    </p>
                  </div>
                  <ul className="feature-list">
                    <li>Free Yoga Sessions</li>
                    <li>Free Diet Plans</li>
                    <li>Personal Coach</li>
                    <li>20% Discount on Products</li>
                  </ul>
                  <div className="action-button">
                    <button className="btn-main-rounded" onClick={startPayment}>
                      Pay with MetaMask
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section counter bg-gray">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                <div className="counter-item">
                  <h3>
                    <span className="count" data-count="29">
                      400
                    </span>
                    +
                  </h3>
                  <p>Sessions</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                <div className="counter-item">
                  <h3>
                    <span className="count" data-count="200">
                      2
                    </span>
                    k+
                  </h3>
                  <p>Active Users</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                <div className="counter-item">
                  <h3>
                    <span className="count" data-count="60">
                      200
                    </span>
                    +
                  </h3>
                  <p>Coaches</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                <div className="counter-item">
                  <h3>
                    <span className="count" data-count="300">
                      8
                    </span>
                    k+
                  </h3>
                  <p>Enrolled Users</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section cta-subscribe" id="contact">
          <div className="container">
            <div className="row bg-elipse-red">
              <div className="col-lg-4">
                <div className="image">
                  <img className="phone-thumb" src={news} alt="newsletter" />
                </div>
              </div>
              <div className="col-lg-8 align-self-center">
                <div className="content">
                  <div className="mb-4 newsletter">
                    <h2>Subscribe To Our Newsletter</h2>
                  </div>
                  <div className="description">
                    <p>
                      Follow our socials and subscribe to our newsletter to stay
                      updated and fetch every information in the world.
                    </p>
                  </div>
                  <form action="#">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter your email address"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
