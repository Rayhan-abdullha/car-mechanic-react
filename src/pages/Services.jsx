import { useState } from "react";
import MainLayout from "../layout/MainLayout";

const Services = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    serviceType: "",
    vehicleType: "",
    location: "",
    destination: "",
    date: "",
    hours: "",
    guest: "",
    time: "",
    phone: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("quote", JSON.stringify(formData));
  };

  return (
    <MainLayout>
      <div className="m-auto max-w-[1400px] px-12 py-[50px] md:py-[80px]">
        <div className="flex justify-center items-center flex-col mb-10">
          <h2 className="text-[25px] md:text-[30px] font-semibold mb-5 uppercase">
            Lemo Services
          </h2>
          <p>Limo Services Texts will be given by client.</p>
        </div>

        <div className="sm:flex sm:justify-between sm:h-[500px] gap-4">
          <div className="sm:basis-[60%]">
            <img
              className="h-[100%] object-cover w-[100%]"
              src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhcnN8ZW58MHx8MHx8fDA%3D"
              alt="notfound"
            />
          </div>
          <div className="bg-black py-5 sm:basis-[40%]">
            <h3 className="text-white text-[20px] font-semibold text-center mb-5 uppercase">
              Instant Online Quote
            </h3>
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-2 gap-4 px-5"
            >
              <input
                className="p-2 rounded-md"
                type="text"
                name="firstName"
                onChange={handleChange}
                value={formData.firstName}
                placeholder="First Name"
              />
              <input
                className="p-2 rounded-md"
                type="text"
                name="lastName"
                onChange={handleChange}
                value={formData.lastName}
                placeholder="Last Name"
              />
              <select
                onChange={handleChange}
                className="py-2 rounded-md"
                name="serviceType"
              >
                <option value="test">Select A Service Type</option>
                <option value="test">Service A</option>
                <option value="test">Service B</option>
                <option value="test">Service C</option>
                <option value="test">Service D</option>
              </select>
              <select
                onChange={handleChange}
                className="py-2 rounded-md"
                name="vehicleType"
              >
                <option value="test">Select A Vehicle Type</option>
                <option value="Vehicle A">Vehicle A</option>
                <option value="Vehicle B">Vehicle B</option>
                <option Vehicle C="test">
                  Vehicle C
                </option>
                <option value="Vehicle D">Vehicle D</option>
              </select>
              <input
                className="p-2 rounded-md"
                type="text"
                name="location"
                onChange={handleChange}
                value={formData.location}
                placeholder="Pick Up Location"
              />
              <input
                className="p-2 rounded-md"
                type="text"
                name="destination"
                onChange={handleChange}
                value={formData.destination}
                placeholder="Destination"
              />
              <input
                className="p-2 rounded-md"
                type="date"
                name="date"
                onChange={handleChange}
                value={formData.date}
                placeholder="Date"
              />

              <input
                className="p-2 rounded-md"
                type="time"
                name="time"
                onChange={handleChange}
                value={formData.time}
                placeholder="Pick Up Time"
              />

              <select
                onChange={handleChange}
                name="hours"
                className="p-2 rounded-md"
              >
                <option value="">#Hours</option>
                <option value="1:00">1:00</option>
                <option value="2:00">2:00</option>
                <option value="3:00">3:00</option>
                <option value="4:00">4:00</option>
              </select>
              <select
                onChange={handleChange}
                name="guest"
                className="p-2 rounded-md"
              >
                <option value="">#Hours</option>
                <option value="guest1">Guest 1</option>
                <option value="guest2">Guest 2</option>
              </select>
              <input
                className="p-2 rounded-md"
                type="phone"
                name="phone"
                onChange={handleChange}
                value={formData.phone}
                placeholder="Phone"
              />
              <input
                className="p-2 rounded-md w-full block"
                type="email"
                name="email"
                onChange={handleChange}
                value={formData.email}
                placeholder="Email"
              />
              <button
                type="submit"
                className="text-white w-full bg-[#EA3323] col-span-2 py-2 font-semibold text-[17px] hover:bg-red-600 rounded-md"
              >
                Get Quote
              </button>
            </form>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Services;
