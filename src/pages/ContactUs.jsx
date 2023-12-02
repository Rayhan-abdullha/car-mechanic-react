import ContactForm from "../components/contactForm/ContactForm";
import MainLayout from "./../layout/MainLayout";
const ContactUs = () => {
  return (
    <MainLayout>
      <div className="contact-form m-auto max-w-[800px] px-12 py-[70px] md:py-[80px]">
        <div className="form-title text-center mb-[60px]">
          <h2 className="text-[#363636] text-[36px] mb-5 font-bold">
            Contact Us
          </h2>
          <p className="text-[24px]">Feel free to contact us from here.</p>
        </div>
        <ContactForm />
      </div>
    </MainLayout>
  );
};

export default ContactUs;
