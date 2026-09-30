import { Link } from "react-router-dom";

function BookBanner(){
    const baseUrl = import.meta.env.BASE_URL;
    return(
        <section className="book-banner">
            <div className="book-banner-image">
                <img src={baseUrl + "images/book-section.png"} alt="Book Your skip Bin" />
            </div>
            <div className="book-banner-content">
                <div className="book-banner-label">
                     BOOK YOUR SKIP BIN
                </div>
                <h2>
    Ready to Clear the Waste?
    <br />
    <span>Book Your Bin Today!</span>
</h2>
                <p> Choose the right skip bin for your project and get your
                    waste sorted. Fast delivery, easy booking and reliable
                    service.</p>
                    <div className="book-banner-buttons">
                        <Link to="/booking" className="book-now-btn">Book Now</Link>
                        <button className="quote-btn">Get a Quote</button>
                    </div>
            </div>
        </section>
    )
}
export default BookBanner;