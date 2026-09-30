function Blog() {
    const baseUrl = import.meta.env.BASE_URL;
    const blogs = [
        {
            image: baseUrl + "images/blog1.jpg",
            title: "Skip Bin Hire in Blackwood: Pricing, Availability & Delivery Guide",
            description:
                "Looking for skip bin hire in Blackwood? This guide covers pricing, delivery options, availability, accepted waste types, and tips for choosing the right skip bin..."
        },
        {
            image: baseUrl + "images/blog2.jpg",
            title: "How to Hire a Skip Bin: A Step-by-Step Guide for Beginners",
            description:
                "Planning a cleanup, renovation, or construction project? This first-time skip bin hire guide explains bin sizes, waste types, permits, costs..."
        },
        {
            image: baseUrl + "images/blog3.jpg",
            title: "End-of-Lease Clean-Up in Adelaide: How to Use a Skip Bin",
            description:
                "Moving out? Learn how hiring a skip bin in Adelaide can simplify end-of-lease rubbish removal, reduce stress, and help you leave your property clean..."
        }
    ];

    return (
        <section className="blog-section">

            <div className="blog-header">

                <div className="blog-label">
                    Our Blog & Article
                </div>

                <h2>Read our latest blogs</h2>

                <p>
                    Stay updated with latest industry insights.
                </p>

            </div>

            <div className="blog-container">

                {blogs.map((blog, index) => (
                    <article className="blog-card" key={index}>

                        <img
                            src={blog.image}
                            alt={blog.title}
                        />

                        <h3>{blog.title}</h3>

                        <p>{blog.description}</p>

                        <a href="#">
                            Learn More →
                        </a>
                        

                    </article>
                    
                ))}

            </div>
            <button className="view-all">View All</button>

        </section>
    );
}

export default Blog;