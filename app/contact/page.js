import ContactForm from "@/components/ContactForm";
export const metadata = {
  title: { absolute: "Contact Us | Get in Touch with BrandKarlo Digital Marketing Agency" },
  description: "Get in touch with BrandKarlo for a free consultation. Reach our digital marketing team in New Delhi, India by phone, email or contact form.",
  alternates: {
    canonical: "https://www.brandkarlo.in/contact",
  },
  openGraph: {
    type: "website",
    title: "Contact Us | Get in Touch with BrandKarlo Digital Marketing Agency",
    description: "Get in touch with BrandKarlo for a free consultation. Reach our digital marketing team in New Delhi, India by phone, email or contact form.",
    url: "https://www.brandkarlo.in/contact",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Get in Touch with BrandKarlo Digital Marketing Agency",
    description: "Get in touch with BrandKarlo for a free consultation. Reach our digital marketing team in New Delhi, India by phone, email or contact form.",
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
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* Contact End */}
        

      
        
    </>
  );
}
