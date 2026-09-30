function BookBanner(){
    return(
        <section className="book-banner">
            <div className="book-banner-image">
                <img src="./images/book-section.png" alt="Book Your skip Bin" />
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
                        <button className="book-now-btn">Book Now</button>
                        <button className="quote-btn">Get a Quote</button>
                    </div>
            </div>
        </section>
    )
}
export default BookBanner;