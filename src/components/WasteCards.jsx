import { useEffect, useState } from "react";

function WasteCards() {
    const baseUrl = import.meta.env.BASE_URL;
    const [currentSlide, setCurrentSlide] = useState(0);
    const [transitionEnabled, setTransitionEnabled] = useState(true);

    const wasteTypes = [
        {
            image: baseUrl + "images/general-waste.jpg",
            title: "General Waste",
            description: "Suitable for light domestic and commercial waste",
            accepted: [
                "Light domestic waste",
                "Other general non-hazardous waste",
                "Light construction waste",
                "Office Waste"
            ],
            notAccepted: [
                "Hazardous waste like asbestos",
                "Liquid waste",
                "Cleanfill or hardfill",
                "Food waste"
            ]
        },

        {
            image: baseUrl + "images/green-waste.jpg",
            title: "Green Waste",
            description: "Price based STRICTLY on cleanfill only",
            accepted: [
                "Grass",
                "Leaves Waste",
                "Tree trimmings",
                "Small branches",
                "Weed",
                "Bark"
            ],
            notAccepted: [
                "Hazardous waste like asbestos",
                "Liquid waste",
                "General waste",
                "Cleanfill or hardfill",
                "Food waste",
                "Soil",
                "Cabbage trees, bamboo or flax",
                "Tree trunks or stumps"
            ]
        },

        {
            image: baseUrl + "images/mixed-waste.jpg",
            title: "Mixed Waste",
            description:
                "Suitable for domestic, commercial, demolition, construction and renovation",
            accepted: [
                "Timber",
                "Bricks, Tiles, Concrete",
                "Green Waste",
                "House Waste",
                "Builders Waste",
                "Metal",
                "Furniture and Appliances"
            ],
            notAccepted: [
                "Hazardous waste like asbestos",
                "Liquid Waste",
                "Food Waste",
                "Soil, Clay, or Dirt"
            ]
        },

        {
            image: baseUrl + "images/construction-waste.jpg",
            title: "Construction Waste",
            description:
                "Ideal for construction, renovation and demolition projects.",
            accepted: [
                "Timber",
                "Bricks",
                "Concrete",
                "Tiles",
                "Metal",
                "Builders Waste"
            ],
            notAccepted: [
                "Asbestos",
                "Liquid waste",
                "Food waste",
                "Hazardous chemicals"
            ]
        }
    ];

    // each slide shows 3 cards. the 5th slide is a copy of the 1st so the loop looks continuous
    const slides = [
        [wasteTypes[0], wasteTypes[1], wasteTypes[2]],
        [wasteTypes[1], wasteTypes[2], wasteTypes[3]],
        [wasteTypes[2], wasteTypes[3], wasteTypes[0]],
        [wasteTypes[3], wasteTypes[0], wasteTypes[1]],
        [wasteTypes[0], wasteTypes[1], wasteTypes[2]]
    ];

    // go to the next slide every 6 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => prev + 1);
        }, 6000);

        return () => clearInterval(interval);
    }, []);

    // once we reach the copy of slide 1, jump back to the real slide 1 without animating
    useEffect(() => {
        if (currentSlide === 4) {
            const timer = setTimeout(() => {
                setTransitionEnabled(false);
                setCurrentSlide(0);

                setTimeout(() => {
                    setTransitionEnabled(true);
                }, 50);
            }, 500);

            return () => clearTimeout(timer);
        }
    }, [currentSlide]);

    return (
        <section className="waste-cards-section">

            <div className="waste-slider">

                <div className="waste-slider-window">

                    <div
                        className="waste-slider-track"
                        style={{
                            transform: `translateX(-${currentSlide * 20}%)`,
                            transition: transitionEnabled
                                ? "transform 0.5s ease"
                                : "none"
                        }}
                    >

                        {slides.map((slide, slideIndex) => (

                            <div
                                className="waste-slide"
                                key={slideIndex}
                            >

                                <div className="waste-slide-cards">

                                    {slide.map((waste, cardIndex) => (

                                        <div
                                            className="waste-card"
                                            key={`${slideIndex}-${cardIndex}-${waste.title}`}
                                        >

                                            <img
                                                src={waste.image}
                                                alt={waste.title}
                                            />

                                            <h3>
                                                {waste.title}
                                            </h3>

                                            <p className="waste-description">
                                                {waste.description}
                                            </p>

                                            <hr />

                                            <h4>
                                                What you put in:
                                            </h4>

                                            <div className="waste-list accepted-list">

                                                {waste.accepted.map(
                                                    (item, itemIndex) => (
                                                        <p key={itemIndex}>
                                                            <span>●</span>
                                                            {item}
                                                        </p>
                                                    )
                                                )}

                                            </div>

                                            <h4>
                                                What you can’t put in:
                                            </h4>

                                            <div className="waste-list not-accepted-list">

                                                {waste.notAccepted.map(
                                                    (item, itemIndex) => (
                                                        <p key={itemIndex}>
                                                            <span>●</span>
                                                            {item}
                                                        </p>
                                                    )
                                                )}

                                            </div>

                                        </div>

                                    ))}

                                </div>

                            </div>

                        ))}

                    </div>

                </div>

            </div>

            {/* dots */}

            <div className="waste-slider-dots">

                {wasteTypes.map((_, index) => (

                    <button
                        type="button"
                        key={index}
                        className={
                            index === currentSlide % 4
                                ? "active"
                                : ""
                        }
                        onClick={() => {
                            setTransitionEnabled(true);
                            setCurrentSlide(index);
                        }}
                    ></button>

                ))}

            </div>

        </section>
    );
}

export default WasteCards;