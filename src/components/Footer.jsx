function Footer() {
    const baseUrl = import.meta.env.BASE_URL;
    return (
        <footer id="footer" className="footer">

            <div className="footer-main">

                {/* brand + email signup */}
                <div className="footer-brand">

                    <img
                        src={baseUrl + "images/logo.png"}
                        alt="SkipBin Hire"
                    />

                    <p>
                        We offer fast, reliable skip bin hire in Adelaide, and we
                        try to keep waste disposal simple and affordable.
                    </p>

                    <div className="footer-subscribe">
                        <i className="fa-regular fa-envelope"></i>

                        <input
                            type="email"
                            placeholder="Enter your email"
                        />

                        <button>Send</button>
                    </div>

                </div>


                {/* quick links */}
                <div className="footer-links">

                    <h3>Quick Links :</h3>

                    <div className="footer-links-grid">

                        <div>
                            <a href={baseUrl + "#home"}>Home</a>
                            <a href={baseUrl + "#area-served"}>Area Served</a>
                            <a href={baseUrl + "#waste-types"}>Waste Types</a>
                            <a href={baseUrl + "#faqs"}>FAQ's</a>
                        </div>

                        <div>
                            <a href={baseUrl + "#about"}>About</a>
                            <a href={baseUrl + "#skip-sizes"}>Skip Sizes</a>
                            <a href={baseUrl + "#blogs"}>Blogs</a>
                            <a href={baseUrl + "#contact"}>Contact Us</a>
                        </div>

                    </div>

                </div>


                {/* contact + other links */}
                <div className="footer-right">

                    <div className="footer-inquiry">

                        <h3>Inquiry :</h3>

                        <div className="inquiry-item">
                            <i className="fa-solid fa-phone"></i>
                            <span>0426177715</span>
                        </div>

                        <div className="inquiry-item">
                            <i className="fa-solid fa-envelope"></i>
                            <span>info@skippybinadelaide.com.au</span>
                        </div>

                    </div>


                    <div className="footer-other-links">

                        <h3>Other Links :</h3>

                        <div className="other-links-grid">
                            <a href="#">Terms &amp; Conditions</a>
                            <a href="#">Privacy Policy</a>
                        </div>

                    </div>

                </div>

            </div>


            {/* bottom bar */}
            <div className="footer-bottom">

                <p className="footer-company-text">
                    This website is a digital asset owned and operated by
                    Global Genie Marketing and IT Services (ABN: 28 676 213 844),
                    headquartered in Darwin, NT. Global Genie specializes in
                    marketing and IT solutions for the skip bin and waste
                    management industry across Australia.
                </p>


                <div className="footer-social">

                    <a href="#">
                        <i className="fa-brands fa-facebook-f"></i>
                    </a>

                    <a href="#">
                        <i className="fa-brands fa-instagram"></i>
                    </a>

                    <a href="#">
                        <i className="fa-brands fa-whatsapp"></i>
                    </a>

                    <a href="#">
                        <i className="fa-brands fa-twitter"></i>
                    </a>

                    <a href="#">
                        <i className="fa-brands fa-linkedin-in"></i>
                    </a>

                </div>


                <p className="footer-copyright">
                    Copyright © 2026 Skippybin Adelaide. All rights reserved.
                    Design, Developed and SEO by Global Genie
                </p>

            </div>

        </footer>
    );
}

export default Footer;