import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const steps = [
    {
        number: "Step 1",
        title: "Select Postcode",
    },
    {
        number: "Step 2",
        title: "Select Waste type",
    },
    {
        number: "Step 3",
        title: "Select Skip Bin",
    },
    {
        number: "Step 4",
        title: "Special Waste",
    },
    {
        number: "Step 5",
        title: "Bin Delivery",
    },
    {
        number: "Step 6",
        title: "Select Delivery Date",
    },
    {
        number: "Step 7",
        title: "Select Payment Mode",
    },
];

const postcodes = [
    "M1 1AA",
    "M1 1AB",
    "M1 1AE",
    "M1 1AF",
    "M1 1AG",
    "M2 1AA",
    "M2 1AB",
    "SW1A 1AA",
    "SW1A 1AB",
    "B1 1AA",
];

function Booking() {
    const [currentStep, setCurrentStep] = useState(0);

    const [bookingData, setBookingData] = useState({
        postcode: "",
        wasteType: "",
        skipBin: "",
        specialWaste: "",
        deliveryAddress: "",
        deliveryDate: "",
        payment: "",
    });

    const [postcodeSuggestions, setPostcodeSuggestions] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setBookingData((prev) => ({
            ...prev,
            [name]: name === "postcode" ? value.toUpperCase() : value,
        }));

        if (name === "postcode") {
            const upperValue = value.toUpperCase().trim();

            if (upperValue === "") {
                setPostcodeSuggestions([]);
                return;
            }

            const matches = postcodes.filter((postcode) =>
                postcode.toUpperCase().startsWith(upperValue)
            );

            setPostcodeSuggestions(matches);
        }
    };

    const selectPostcode = (postcode) => {
        setBookingData((prev) => ({
            ...prev,
            postcode,
        }));

        setPostcodeSuggestions([]);
    };

    const validateStep = () => {
        switch (currentStep) {
            case 0:
                if (!bookingData.postcode.trim()) {
                    alert("Please enter your postcode.");
                    return false;
                }
                return true;

            case 1:
                if (!bookingData.wasteType) {
                    alert("Please select waste type.");
                    return false;
                }
                return true;

            case 2:
                if (!bookingData.skipBin) {
                    alert("Please select a skip bin size.");
                    return false;
                }
                return true;

            case 3:
                if (!bookingData.specialWaste) {
                    alert("Please select Special Waste Yes or No.");
                    return false;
                }
                return true;

            case 4:
                if (!bookingData.deliveryAddress.trim()) {
                    alert("Please enter delivery address.");
                    return false;
                }
                return true;

            case 5:
                if (!bookingData.deliveryDate) {
                    alert("Please select delivery date.");
                    return false;
                }
                return true;

            case 6:
                if (!bookingData.payment) {
                    alert("Please select payment method.");
                    return false;
                }
                return true;

            default:
                return true;
        }
    };

    const nextStep = () => {
        if (!validateStep()) {
            return;
        }

        if (currentStep < steps.length - 1) {
            setCurrentStep((prev) => prev + 1);

            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }
    };

    const previousStep = () => {
        if (currentStep > 0) {
            setCurrentStep((prev) => prev - 1);

            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateStep()) {
            return;
        }

        console.log("Booking Data:", bookingData);
        alert("Booking completed successfully!");
    };

    const renderPostcodeStep = () => (
        <div className="booking-form-step">
            <h2>Enter Your Postcode</h2>

            <div className="postcode-input-wrapper">
                <input
                    id="postcode"
                    type="text"
                    name="postcode"
                    value={bookingData.postcode}
                    onChange={handleChange}
                    placeholder="Enter Postcode"
                    required
                    autoComplete="off"
                />

                {postcodeSuggestions.length > 0 && (
                    <div className="postcode-suggestions">
                        {postcodeSuggestions.map((postcode) => (
                            <button
                                type="button"
                                className="postcode-suggestion"
                                key={postcode}
                                onClick={() => selectPostcode(postcode)}
                            >
                                <span className="suggestion-postcode">
                                    {postcode}
                                </span>
                            </button>
                        ))}
                    </div>
                )}
            </div>

            <button type="button" onClick={nextStep}>
                Next Step
            </button>
        </div>
    );

    const renderWasteTypeStep = () => (
        <div className="booking-form-step">
            <h2>Select Waste Type</h2>

            <div className="waste-options">
                <label
                    className={`waste-option ${
                        bookingData.wasteType === "general" ? "selected" : ""
                    }`}
                >
                    <input
                        type="radio"
                        name="wasteType"
                        value="general"
                        checked={bookingData.wasteType === "general"}
                        onChange={handleChange}
                    />
                    General Waste
                </label>

                <label
                    className={`waste-option ${
                        bookingData.wasteType === "green" ? "selected" : ""
                    }`}
                >
                    <input
                        type="radio"
                        name="wasteType"
                        value="green"
                        checked={bookingData.wasteType === "green"}
                        onChange={handleChange}
                    />
                    Green Waste
                </label>

                <label
                    className={`waste-option ${
                        bookingData.wasteType === "Construction" ? "selected" : ""
                    }`}
                >
                    <input
                        type="radio"
                        name="wasteType"
                        value="Construction"
                        checked={bookingData.wasteType === "Construction"}
                        onChange={handleChange}
                    />
                    Construction Waste
                </label>
            </div>

            <div className="booking-buttons">
                <button
                    type="button"
                    className="previous-step"
                    onClick={previousStep}
                >
                    <span className="arrow">←</span>
                    Previous Step
                </button>

                <button
                    type="button"
                    className="next-step"
                    onClick={nextStep}
                >
                    Next Step
                    <span className="arrow">→</span>
                </button>
            </div>
        </div>
    );

    const renderSkipBinStep = () => (
        <div className="booking-form-step">
            <h2>Select Skip Bin</h2>

            <select
                name="skipBin"
                value={bookingData.skipBin}
                onChange={handleChange}
                required
            >
                <option value="">Select Bin Size</option>
                <option value="2m">2m</option>
                <option value="3m">3m</option>
                <option value="4m">4m</option>
                <option value="6m">6m</option>
            </select>

            <div className="booking-buttons">
                <button
                    type="button"
                    className="previous-step"
                    onClick={previousStep}
                >
                    <span className="arrow">←</span>
                    Previous Step
                </button>

                <button
                    type="button"
                    className="next-step"
                    onClick={nextStep}
                >
                    Next Step
                    <span className="arrow">→</span>
                </button>
            </div>
        </div>
    );

    const renderSpecialWasteStep = () => (
        <div className="booking-form-step">
            <h2>Special Waste:</h2>

            <label>
                <input
                    type="radio"
                    name="specialWaste"
                    value="yes"
                    checked={bookingData.specialWaste === "yes"}
                    onChange={handleChange}
                />
                Yes
            </label>

            <label>
                <input
                    type="radio"
                    name="specialWaste"
                    value="no"
                    checked={bookingData.specialWaste === "no"}
                    onChange={handleChange}
                />
                No
            </label>

            <div className="booking-buttons">
                <button
                    type="button"
                    className="previous-step"
                    onClick={previousStep}
                >
                    <span className="arrow">←</span>
                    Previous Step
                </button>

                <button
                    type="button"
                    className="next-step"
                    onClick={nextStep}
                >
                    Next Step
                    <span className="arrow">→</span>
                </button>
            </div>
        </div>
    );

    const renderDeliveryAddressStep = () => (
        <div className="booking-form-step">
            <h2>Bin Delivery Address:</h2>

            <input
                type="text"
                name="deliveryAddress"
                value={bookingData.deliveryAddress}
                onChange={handleChange}
                placeholder="Enter delivery address"
                required
            />

            <div className="booking-buttons">
                <button
                    type="button"
                    className="previous-step"
                    onClick={previousStep}
                >
                    <span className="arrow">←</span>
                    Previous Step
                </button>

                <button
                    type="button"
                    className="next-step"
                    onClick={nextStep}
                >
                    Next Step
                    <span className="arrow">→</span>
                </button>
            </div>
        </div>
    );

    const renderDeliveryDateStep = () => (
        <div className="booking-form-step">
            <h2>Select Delivery Date:</h2>

            <input
                type="date"
                name="deliveryDate"
                value={bookingData.deliveryDate}
                onChange={handleChange}
                required
            />

            <div className="booking-buttons">
                <button
                    type="button"
                    className="previous-step"
                    onClick={previousStep}
                >
                    <span className="arrow">←</span>
                    Previous Step
                </button>

                <button
                    type="button"
                    className="next-step"
                    onClick={nextStep}
                >
                    Next Step
                    <span className="arrow">→</span>
                </button>
            </div>
        </div>
    );

    const renderPaymentStep = () => (
        <div className="booking-form-step">
            <h2>Select Payment Method:</h2>

            <label>
                <input
                    type="radio"
                    name="payment"
                    value="card"
                    checked={bookingData.payment === "card"}
                    onChange={handleChange}
                />
                Credit / Debit Card
            </label>

            <label>
                <input
                    type="radio"
                    name="payment"
                    value="paypal"
                    checked={bookingData.payment === "paypal"}
                    onChange={handleChange}
                />
                PayPal
            </label>

            <div className="booking-buttons">
                <button
                    type="button"
                    className="previous-step"
                    onClick={previousStep}
                >
                    <span className="arrow">←</span>
                    Previous Step
                </button>

                <button type="submit" className="next-step">
                    Complete Booking
                </button>
            </div>
        </div>
    );

    const renderCurrentStep = () => {
        switch (currentStep) {
            case 0:
                return renderPostcodeStep();
            case 1:
                return renderWasteTypeStep();
            case 2:
                return renderSkipBinStep();
            case 3:
                return renderSpecialWasteStep();
            case 4:
                return renderDeliveryAddressStep();
            case 5:
                return renderDeliveryDateStep();
            case 6:
                return renderPaymentStep();
            default:
                return null;
        }
    };

    return (
    <>
        <Header />

        <main className="booking-page-2">
            <section className="booking-section">

                <h1>Book Your Bin</h1>

                <div className="booking-steps">
                    {steps.map((step, index) => {
                        let className = "booking-step";

                        if (index < currentStep) {
                            className += " completed";
                        }

                        if (index === currentStep) {
                            className += " active";
                        }

                        return (
                            <div
                                className={className}
                                key={step.number}
                            >
                                <span>
                                    {index <= currentStep ? "✓" : ""}
                                </span>

                                <p>{step.number}</p>

                                <strong>{step.title}</strong>
                            </div>
                        );
                    })}
                </div>

                <form
                    className="booking-form"
                    onSubmit={handleSubmit}
                >
                    {renderCurrentStep()}
                </form>

            </section>
        </main>

        <Footer />
    </>
);
}

export default Booking;
