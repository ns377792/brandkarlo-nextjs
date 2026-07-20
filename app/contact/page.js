export const metadata = {
  title: "Contact Us | Get in Touch with BrandKarlo Digital Marketing Agency",
  description: "Get in touch with BrandKarlo for a free consultation. Reach our digital marketing team in New Delhi, India by phone, email or contact form.",
  alternates: {
    canonical: "/contact",
  },
};

export default function Page() {
  return (
    <>

        <div className="navbar-offset-spacer"></div>


        {/* Contact Start */}
        <div className="container-fluid py-5">
            <div className="container px-lg-5">
                <div className="row justify-content-center">
                    <div className="col-lg-7">
                        <div className="section-title position-relative text-center mb-5 pb-2 wow fadeInUp" data-wow-delay="0.1s">
                            <span className="section-kicker position-relative d-inline text-primary ps-4">Contact Us</span>
                            <h1 className="mt-2">Contact For Any Query</h1>
                        </div>
                        <div className="wow fadeInUp" data-wow-delay="0.3s">
                            <h2 className="text-center mb-4">Fill out the form below and we'll get back to you soon.</h2>
                            <form>
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="name" name="name" placeholder="Your Name" required />
                                            <label htmlFor="name">Your Name</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="email" className="form-control" id="email" name="email" placeholder="Your Email" required />
                                            <label htmlFor="email">Your Email</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="subject" name="subject" placeholder="Subject" required />
                                            <label htmlFor="subject">Subject</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <textarea className="form-control" placeholder="Leave a message here" id="message" name="message" style={{ height: '150px' }} required></textarea>
                                            <label htmlFor="message">Message</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button className="btn btn-primary w-100 py-3" type="submit">Send Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* Contact End */}
        

      
        
    </>
  );
}
