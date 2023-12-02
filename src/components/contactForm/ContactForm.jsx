import { useEffect, useState } from "react";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function ContactForm() {
  const [sentEmail, setSentEmail] = useState(false);
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

  const sendEmail = (e) => {
    e.preventDefault();

    let additionalData = localStorage.getItem("quote");
    additionalData = JSON.parse(additionalData);
    const templateMessate = { ...formData, ...additionalData };

    emailjs
      .send(
        "service_b1c2ynm",
        "template_bkkrm9c",
        templateMessate,
        "user_ZolwYIVUoOatUHmZjVVDB"
      )
      .then(
        (result) => {
          if (result.text === "OK") {
            setSentEmail(true);
            localStorage.removeItem("quote");
          }
        },
        (error) => {
          setSentEmail(false);
        }
      );
  };

  useEffect(() => {
    if (sentEmail) {
      setTimeout(() => {
        setSentEmail(false);
      }, 3000);
    }
  }, [sentEmail]);

  return (
    <form onSubmit={sendEmail} className="flex flex-col">
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
      {sentEmail ? (
        <button
          className="bg-[#00aa00]  hover:bg-[#43e707] text-white font-semibold text-[17px] py-2 px-3"
          type="submit"
        >
          Message Sent
        </button>
      ) : (
        <button
          className="bg-[#f8ac07]  hover:bg-[#e7b607] text-white font-semibold text-[17px] py-2 px-3"
          type="submit"
        >
          Submit
        </button>
      )}
    </form>
  );
}

export default ContactForm;
