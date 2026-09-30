import { useState } from "react";

function FAQ() {
    const [openFAQ, setOpenFAQ] = useState(0);

    const faqs = [
        {
            question: "How long can I keep the skip bin?",
            answer:
                "The standard hire period is 7 days. If you need the bin for longer, please contact our team to discuss extending your hire period."
        },
        {
            question: "Do I need to be home for delivery or pickup?",
            answer:
                "You do not usually need to be home, provided the delivery and collection area is accessible and suitable for the skip bin."
        },
        {
            question:
                "Can a skip bin be collected earlier than the arranged pick-up date?",
            answer:
                "Yes. Contact our team and we can discuss an earlier collection based on availability."
        },
        {
            question: "How quickly can you deliver a bin?",
            answer:
                "Delivery times depend on availability and your location. We aim to provide fast and convenient delivery."
        },
        {
            question:
                "Do I need a permit to place a skip bin on the street?",
            answer:
                "A permit may be required when placing a skip bin on a public street. Check with your local council for the applicable requirements."
        },
        {
            question: "When will the skip bin be picked up?",
            answer:
                "Your skip bin will be collected on the date selected during booking."
        },
        {
            question: "What type of waste can I put in a skip bin?",
            answer:
                "Accepted waste depends on the bin type. General household, garden, construction and other approved materials can be placed in suitable bins."
        }
    ];

    const toggleFAQ = (index) => {
        setOpenFAQ(openFAQ === index ? -1 : index);
    };

    return (
        <section className="faq-section">

            <div className="faq-left">

                <div className="faq-label">
                    FAQ's
                </div>

                <h2>
                    Frequently Asked
                    <br />
                    Questions
                </h2>

                <div className="faq-image">
                    <img
                        src="/images/faq.png"
                        alt="Frequently Asked Questions"
                    />
                </div>

            </div>

            <div className="faq-right">

                {faqs.map((faq, index) => (
                    <div
                        className={`faq-item ${
                            openFAQ === index ? "open" : ""
                        }`}
                        key={index}
                    >

                        <button
                            className="faq-question"
                            onClick={() => toggleFAQ(index)}
                        >
                            <span>{faq.question}</span>

                            <span className="faq-icon">
                                {openFAQ === index ? "↘" : "↗"}
                            </span>
                        </button>

                        {openFAQ === index && (
                            <div className="faq-answer">
                                {faq.answer}
                            </div>
                        )}

                    </div>
                ))}

            </div>

        </section>
    );
}

export default FAQ;