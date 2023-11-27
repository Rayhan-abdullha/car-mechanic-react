import ContactForm from "../components/contactForm/ContactForm";
import MainLayout from "./../layout/MainLayout";

const ContactUs = () => {
  return (
    <MainLayout>
      <div className="contact-form sm:w-[50%] m-auto sm:p-[60px] ">
        <div className="form-title text-center mb-[60px]">
          <h2 className="text-[#363636] text-[36px] mb-5 font-bold">
            Contact Us
          </h2>
          <p className="text-[24px]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit
          </p>
        </div>
        <ContactForm />
      </div>
    </MainLayout>
  );
};

export default ContactUs;