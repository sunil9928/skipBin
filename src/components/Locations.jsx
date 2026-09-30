function Locations() {
    return (
        <section className="locations">

            <div className="locations-content">

                <div className="locations-label">
                    Our locations
                </div>

                <h2>
                    Locations where we deliver
                </h2>

                <p>
                    Skip Bin Hire Near Me - We deliver in suburbs Across Adelaide
                </p>

            </div>

            <div className="location-card">

                <img
                    src="./images/australia.jpg"
                    alt="Adelaide"
                />

                <div className="location-card-content">

                    <h3>
                        Waste Pickup Services in
                    </h3>

                    <h4>
                        Adelaide
                    </h4>

                   <a
                        href="https://www.google.com/maps/search/?api=1&query=Adelaide+SA+Australia"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn More
                        <span> →</span>
                    </a>
                </div>

            </div>

        </section>
    );
}

export default Locations;