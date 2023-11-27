function ContactInfo() {
  return (
    <div className="contact-section text-black m-auto max-w-[1400px] px-5 my-[70px]">
      <h2 className="text-[20px] sm:text-[30px] font-semibold uppercase mb-5 text-center">
        Contact Us
      </h2>
      <div className="bg-slate-100 md:flex md:justify-between md:items-center py-[50px] md:gap-3 px-5 rounded-md">
        <h2 className="mb-5 md:mb-0 font-semibold text-[20px] text-center">
          Contact Us if You have Trouble Finding Our Showroom
        </h2>
        <div className="flex flex-col gap-5">
          <p>
            <strong>Address: </strong> 9001 John W.Carpenter Fwy, Dallas, TX
            95247 7 days a week 10:30am-6:00pm
          </p>
          <p>
            <strong>Phone: </strong> 465-851-1013
          </p>
          <p>
            <strong>Email:</strong> info@mtbexotics.com
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
