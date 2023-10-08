import "./index.scss";
import About from "../assets/png/about.png";
import Bottom from "../assets/png/bottom.png";
import PurpleLogo from "../assets/png/purpleLogo.png";
import Landing1 from "../assets/png/landing1.png";
import Google from "../assets/png/GooglePlay.png";
import LeftImage from "../assets/png/errand1.png";
import RightImage from "../assets/png/Right.png";
import Miscs from "../assets/png/Miscs.png";
import Apple from "../assets/png/Apple.png";
import Button from "../components/Button";
import Tick from "../assets/svg/Tick";

import { useState } from "react";
import { toast,ToastContainer } from "react-toast";
import axios from "axios";

export default function Landing() {
 
  const Base_url = 'https://staging.api.ginyverse.com/'
  const [sub,setSub]=useState({});
  
  const submit = (e) => {
    e.preventDefault()
    if (sub.email && sub.lastname && sub.firstname) {
      axios.post(Base_url + 'user/newsletter', sub).then(() => {

        toast.success("Subscribed succcessfully")
      }).catch((error) => toast.error('An error occured, try again please'))
    }
  }
  return (
    <>
   <ToastContainer position="top-center" delay={'10000'}/>

    <div className="landing">
      <section className="intro">
        <div className="gradient">
          <img src={LeftImage} alt="" />
        </div>
        <div className="right">
          <img src={RightImage} alt="" />
        </div>
        <div className="heading">
          <div className="img">
            <img src={PurpleLogo} alt="" />
          </div>
          <div className="download_links">
            <div className="img">
              <img src={Google} alt="" />
            </div>
            <div className="img">
              <img src={Apple} alt="" />
            </div>
          </div>
        </div>
        <div className="write_up">
          <div className="text">
            <p className="top">Your one-stop to convenience</p>
            <h1>Render help and get some cash</h1>
            <p className="desc">
              Are you feeling too busy, or lazy to do stuff 😔? Get some helping
              hands here. Is sapa seriously competing with you? Do a task for
              someone around and get paid an amount you will charge
            </p>
            <div className="next">
              <Button
                  onClick={() => toast.success("We are launching soon, scroll down to subscribe")}
                content={"Getting started"}
              />
              <span
                  onClick={() => toast.success("We are launching soon, scroll down to subscribe")} 
               className="login">
                Login
              </span>
            </div>
            <div className="bottom">
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 22C17.0753 22 22 17.0753 22 11C22 4.9247 17.0753 0 11 0C4.9247 0 0 4.9247 0 11C0 17.0753 4.9247 22 11 22Z"
                  fill="#5D5FEF"
                />
                <path
                  d="M5.5 11.55L8.8 14.85L16.5 7.14996"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span>Break the bond with sapa today</span>
            </div>
          </div>
        </div>
      </section>
      <section className="tab2">
        <div className="write_up">
          <div className="heading">
            <span className="active">Need some help?</span>
            <span>Want to help?</span>
          </div>
          <h1>Get the work done in 3 easy steps</h1>

          <div className="lists">
            <div>
              <div className="svg">
                <Tick />
              </div>
              <div className="comment">
                <h3>Post Your errand</h3>
                <p>
                  Click on the plus icon to create a new errand. You can post to
                  the public or to a specific person
                </p>
              </div>
            </div>
            <div>
              <div className="svg">
                <Tick />
              </div>
              <div className="comment">
                <h3>Get bids and Negotiate</h3>
                <p>
                  If a job catches your eye but the price isn't quite right, feel free to make a counteroffer.
                </p>
              </div>
            </div>
            <div>
              <div className="svg">
                <Tick />
              </div>
              <div className="comment">
                <h3>Make payments and get work done</h3>
                <p>
                  Make payments to our escrow. We will not pay the helper until
                  you have confirmed the completion of the task
                </p>
              </div>
            </div>
          </div>
          <Button 
          // onClick={() => navigate("/home")}
           content={"Let's get in"} />
        </div>
        <div className="image">
          <img src={Landing1} alt="" />
        </div>
      </section>
      <section className="miscs">
        <img src={Miscs} alt="" />
      </section>
      <section className="features">
        <h3>Features</h3>

        <div className="tabs">
          <div className="tab">
            <div className="icon">
              <svg
                width="81"
                height="80"
                viewBox="0 0 81 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.953613"
                  width="80"
                  height="80"
                  rx="15"
                  fill="#5D5FEF"
                />
              </svg>
            </div>
            <h4>Real time location</h4>
            <p>
              Share your real-time location, and other locations on the map to
              make it easy for helpers to locate you
            </p>
          </div>
          <div className="tab">
            <div className="icon">
              <svg
                width="81"
                height="80"
                viewBox="0 0 81 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.218262"
                  width="80"
                  height="80"
                  rx="15"
                  fill="#5D5FEF"
                />
              </svg>
            </div>
            <h4>Escrow system</h4>
            <p>
              After payment for an errand, the money is kept in our escrow until
              the errand is completed. This is to enable trust for all parties
            </p>
          </div>
          <div className="tab">
            <div className="icon">
              <svg
                width="81"
                height="80"
                viewBox="0 0 81 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.953613"
                  width="80"
                  height="80"
                  rx="15"
                  fill="#5D5FEF"
                />
              </svg>
            </div>
            <h4>Chat system</h4>
            <p>
              You can chat with helpers and people that need help, to know the
              current status of the errand per time.
            </p>
          </div>
        </div>

        <Button 
        onClick={() => toast.success("We are launching soon, scroll down to subscribe")}
         content={"Get started"} />
      </section>
      <section className="about_us">
        <div className="write_up">
          <div className="header">
            <h3>About us</h3>
            <h1>Why Choose Ginyverse?</h1>
          </div>
          <p>
            Ginyverse Nigeria - Think of us like Diner Dash but for errands.
            We offer an on-demand platform where users can detail their errand needs, connecting them with verified independent service professionals in their community. Whether you need assistance or wish to lend a hand, we're your connection. Ginyverse instantly matches hundreds of customers every week with top-rated professionals near-by
          </p>
          <p>
            Ginyverse, was founded by NAK  with a mission to enhance productivity by effectively accomplishing errands. We strive to save you time, energy, and money. With a seamless 60-second booking process, Ginyverse guarantees a happier and easier life. Experience the Ginyverse difference today!

          </p>
        </div>
        <div className="">
          <div className="img">
            <img src={About} alt="" />
          </div>
        </div>
      </section>
      <section className="contact_us">
        <div className="details">
          <p className="head">Contact us</p>
          <h2>How can we help you?</h2>
          <span>Fill the form and shoot us an email</span>

          <div className="contacts">
            <a href="mailto:info@ginyverse.com">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z"
                  stroke="#A6A6AE"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9"
                  stroke="#A6A6AE"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span> info@ginyverse.com</span>
            </a>
            <a href="tel:+">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.97 18.33C21.97 18.69 21.89 19.06 21.72 19.42C21.55 19.78 21.33 20.12 21.04 20.44C20.55 20.98 20.01 21.37 19.4 21.62C18.8 21.87 18.15 22 17.45 22C16.43 22 15.34 21.76 14.19 21.27C13.04 20.78 11.89 20.12 10.75 19.29C9.6 18.45 8.51 17.52 7.47 16.49C6.44 15.45 5.51 14.36 4.68 13.22C3.86 12.08 3.2 10.94 2.72 9.81C2.24 8.67 2 7.58 2 6.54C2 5.86 2.12 5.21 2.36 4.61C2.6 4 2.98 3.44 3.51 2.94C4.15 2.31 4.85 2 5.59 2C5.87 2 6.15 2.06 6.4 2.18C6.66 2.3 6.89 2.48 7.07 2.74L9.39 6.01C9.57 6.26 9.7 6.49 9.79 6.71C9.88 6.92 9.93 7.13 9.93 7.32C9.93 7.56 9.86 7.8 9.72 8.03C9.59 8.26 9.4 8.5 9.16 8.74L8.4 9.53C8.29 9.64 8.24 9.77 8.24 9.93C8.24 10.01 8.25 10.08 8.27 10.16C8.3 10.24 8.33 10.3 8.35 10.36C8.53 10.69 8.84 11.12 9.28 11.64C9.73 12.16 10.21 12.69 10.73 13.22C11.27 13.75 11.79 14.24 12.32 14.69C12.84 15.13 13.27 15.43 13.61 15.61C13.66 15.63 13.72 15.66 13.79 15.69C13.87 15.72 13.95 15.73 14.04 15.73C14.21 15.73 14.34 15.67 14.45 15.56L15.21 14.81C15.46 14.56 15.7 14.37 15.93 14.25C16.16 14.11 16.39 14.04 16.64 14.04C16.83 14.04 17.03 14.08 17.25 14.17C17.47 14.26 17.7 14.39 17.95 14.56L21.26 16.91C21.52 17.09 21.7 17.3 21.81 17.55C21.91 17.8 21.97 18.05 21.97 18.33Z"
                  stroke="#A6A6AE"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                />
              </svg>

              <span>08105685600</span>
            </a>
          </div>
        </div>
        <div className="mail">
          <form action="">
            <input name="firstname" onChange={(e)=>setSub({...sub,[e.target.name]:e.target.value})} type="text" placeholder="First Name" />
            <input name="lastname" onChange={(e) => setSub({ ...sub, [e.target.name]: e.target.value })} type="text" placeholder="Last Name" />
            <input name="email" onChange={(e) => setSub({ ...sub, [e.target.name]: e.target.value })} type="email" placeholder="Email" />
            {/* <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="body"
            ></textarea> */}
            <Button onClick={submit} content={"Subscribe"} />
          </form>
        </div>
      </section>
      <footer>
        <div className="top">
          <div className="left">
            <img src={Bottom} alt="" />
          </div>
          <div className="right">
            <p>
              Download the Ginyverse app on the Google Playstore and Apple store
            </p>
            <div className="download_links">
              <div className="img">
                <img src={Google} alt="" />
              </div>
              <div className="img">
                <img src={Apple} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="links">
          <div style={{width:'150px'}}>
            <img style={{width:'100%'}} src={PurpleLogo} alt="" />
          </div>
          <div>
            <a href="#about">About us</a>
            <a href="#contact">Contact us</a>
            {/* <span></span> */}
          </div>
        </div>
      </footer>
    </div>
    </>
  );
}
