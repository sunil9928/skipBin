import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
function SkipCards() {
    const baseUrl = import.meta.env.BASE_URL;
    const [currentSlide, setCurrentSlide] = useState(0);
    const [slideWidth, setSlideWidth] = useState(0);
    const sliderRef = useRef(null);

    useEffect(() => {
        const updateSlideWidth = () => {
            const slider = sliderRef.current;
            const card = slider?.querySelector(".skip-card");
            const track = slider?.querySelector(".skip-slider-track");

            if (!card || !track) {
                return;
            }

            const gap = parseFloat(getComputedStyle(track).gap) || 0;
            setSlideWidth(card.getBoundingClientRect().width + gap);
        };

        updateSlideWidth();
        window.addEventListener("resize", updateSlideWidth);

        const resizeObserver = new ResizeObserver(updateSlideWidth);
        if (sliderRef.current) {
            resizeObserver.observe(sliderRef.current);
        }

        return () => {
            window.removeEventListener("resize", updateSlideWidth);
            resizeObserver.disconnect();
        };
    }, []);

    const skips = [
         {
            image: baseUrl + "images/slider1.jpg",
            title: "3 Cubic Metre Skip Bin",
            text: "Ideal for medium-sized jobs. Our 3m³ skip suits garage clean-outs, small landscaping projects, and single-room renovations, with enough capacity for bulky household items."
        },
        {
            image: baseUrl + "images/slider2.jpg",
            title: "4 Cubic Metre Skip Bin",
            text: "A popular all-rounder. Our 4m³ skip is great for larger home clean-ups, kitchen or bathroom strip-outs, and general household or garden waste in bigger volumes."
        },
        {
            image: baseUrl + "images/slider3.jpg",
            title: "6 Cubic Metre Skip Bin",
            text: "Built for bigger projects. Our 6m³ skip is well suited to full house clean-outs, small renovations, and light construction or demolition waste."
        },
        {
            image: baseUrl + "images/slider4.jpg",
            title: "9 Cubic Metre Skip Bin",
            text: "Our largest option for major jobs. The 9m³ skip handles large-scale renovations, construction and demolition debris, and commercial clean-ups with ease."
        },
        {
            image: baseUrl + "images/slider5.jpg",
            title: "12 Cubic Metre Skip Bin",
            text: "Designed for large-scale projects, our 12m³ skip bin is ideal for major renovations, construction work, demolition waste, and large commercial clean-ups where extra capacity is required."
        }
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % skips.length);
    };

    const previousSlide = () => {
        setCurrentSlide(
            (prev) => (prev - 1 + skips.length) % skips.length
        );
    };

    return (
        <section className="skip-cards-section">

            <div className="skip-slider" ref={sliderRef}>

                <button
                    className="slider-arrow prev"
                    onClick={previousSlide}
                >
                    &#10094;
                </button>

                <div
    className="skip-slider-track"
    style={{
        transform: `translate3d(-${currentSlide * slideWidth}px, 0, 0)`
    }}
>
                    {skips.map((skip, index) => (
                        <div
                            className={`skip-card ${
                                index === currentSlide ? "active" : ""
                            }`}
                            key={index}
                        >
                            <img
                                src={skip.image}
                                alt={skip.title}
                            />

                            <h3>{skip.title}</h3>

                            <p>{skip.text}</p>

                            <Link to="/booking" className="book-btn">
                                Book Now
                            </Link>
                        </div>
                    ))}

                </div>

                <button
                    className="slider-arrow next"
                    onClick={nextSlide}
                >
                    &#10095;
                </button>

            </div>

            <div className="slider-dots">
                {skips.map((_, index) => (
                    <button
                        key={index}
                        className={index === currentSlide ? "active" : ""}
                        onClick={() => setCurrentSlide(index)}
                    ></button>
                ))}
            </div>

        </section>
    );
}

export default SkipCards;