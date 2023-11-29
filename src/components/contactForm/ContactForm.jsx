import { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    checkbox: false,
  });
  const handleOnChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <div className="formGroup mb-4 flex flex-col">
        <label htmlFor="name" className="mb-2">
          Your Name:
        </label>
        <input
          className="border border-[#c0c0c0] px-4 py-2 outline-none rounded-md"
          onChange={handleOnChange}
          type="text"
          name="name"
          id="name"
          value={formData.name}
        />
      </div>
      <div className="formGroup mb-4 flex flex-col">
        <label htmlFor="email" className="mb-2">
          Your Email:
        </label>
        <input
          className="border border-[#c0c0c0] px-4 py-2 outline-none rounded-md"
          onChange={handleOnChange}
          type="email"
          name="email"
          id="email"
          value={formData.email}
        />
      </div>
      <div className="formGroup mb-4 flex flex-col">
        <label htmlFor="phone" className="mb-2">
          Your Phone:
        </label>
        <input
          className="border border-[#c0c0c0] px-4 py-2 outline-none rounded-md"
          onChange={handleOnChange}
          type="phone"
          name="phone"
          id="phone"
          value={formData.phone}
        />
      </div>
      <div className="formGrup mb-4 flex flex-col">
        <label className="mb-2">
          Your Message (vahicles, date, location, details)
        </label>
        <textarea
          className="border border-[#c0c0c0] px-4 py-2 outline-none rounded-md"
          onChange={handleOnChange}
          type="textarea"
          name="message"
          rows={7}
          value={formData.message}
        />
      </div>
      <div className="contact-checkbox">
        <input
          className="float-left mr-2 mt-[6px] h-4 w-4"
          onChange={() =>
            setFormData({ ...formData, checkbox: !formData.checkbox })
          }
          type="checkbox"
          name="checkbox"
          value={formData.checkbox}
        />
        <p className="mb-10 text-sm">
          By submiting your form, you consent to receiving recurring automated
          marketing messages at the provided phone number. These messages may
          include cart reminders. YOur consent Is not required for making a
          purchase.
        </p>
      </div>
      <button
        className="bg-[#FCC500] hover:bg-[#e7b607] text-white font-semibold text-[17px] py-2 px-3"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
}

export default ContactForm;
