function ContactInfo() {
  return (
    <div className="contact-section text-black m-auto max-w-[1400px] px-12 my-[70px]">
      <h2 className="text-[20px] sm:text-[30px] font-semibold uppercase mb-5 text-center">
        Contact Us
      </h2>
      <div className="bg-slate-100 md:flex md:justify-between md:items-start py-[50px] md:gap-3 lg:gap-24 px-12 rounded-md ">
        <div className="space-y-2 text-xl basis-2/4 ">
          <p className="text-black font-medium">
            9001 John W.Carpenter Fwy, Dallas, TX 95247
          </p>
          <p className="text-black font-medium">7 days a week 10:30am-6:00pm</p>
          <p className="underline font-medium">465-851-1013</p>
          <p className="underline font-medium">info@mtbexotics.com</p>
        </div>
        <h2 className="mb-5 md:mb-0 font-semibold text-[26px]  ">
          Contact Us anytime if You have trouble finding our Showroom
        </h2>
      </div>
    </div>
  );
}

export default ContactInfo;
