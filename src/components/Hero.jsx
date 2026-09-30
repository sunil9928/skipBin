import { Link } from "react-router-dom";
function Hero() {
    const baseUrl = import.meta.env.BASE_URL;
    return (
        <section className="hero" id="home">

            <div className="hero-overlay"></div>

            <div className="hero-content">

                <p>Fast & Easy Bin Hire</p>

                <h1>
                    Fast & Reliable
                    <br />
                    Skip Bin Hire
                </h1>

                <p className="hero-text">
                    Looking for an easy way to clear your waste? Get the right
                    skip bin at a great price, with fast delivery,
                    straightforward booking, and dependable pickup when
                    your project is done.
                </p>

            </div>

            <div className="booking-wrapper">

                <div className="booking-panel">

                    <img
                        src={baseUrl + "images/boy-standing.png"}
                        className="cartoon-boy"
                        alt="Skip Bin Service"
                    />

                    <h2>Book Your Bin in 4 Easy Steps</h2>

                    <div className="booking-box">

                        <h3>
                            Allow your location and
                            <br />
                            waste details
                        </h3>

                        <input
                            type="text"
                            placeholder="Enter your postcode"
                        />

                       <Link to="/booking" className="next-step-btn">
                            Move to next step
                                </Link>

                        <p className="postcode-help">
                            Not sure of your postcode?
                            <span> Click here</span>
                        </p>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default Hero;