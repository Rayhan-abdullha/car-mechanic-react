import { useState } from "react";
import MainLayout from "../layout/MainLayout";

const Services = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    searviceType: "",
    vehicleType: "",
    location: "",
    destination: "",
    date: "",
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
    console.log(formData);
  };

  return (
    <MainLayout>
      <div className="m-auto max-w-[1400px] px-5 py-[50px] md:py-[80px]">
        <div className="flex justify-center items-center flex-col mb-10">
          <h2 className="text-[25px] md:text-[30px] font-semibold mb-5 uppercase">
            Lemo Services
          </h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </div>

        <div className="sm:flex sm:justify-between sm:h-[500px]">
          <div className="sm:basis-[50%]">
            <img
              className="h-[100%] object-cover w-[100%]"
              src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhcnN8ZW58MHx8MHx8fDA%3D"
              alt="notfound"
            />
          </div>
          <div className="bg-black py-5 sm:basis-[50%]">
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
                name=""
                onChange={handleChange}
                value={formData.lastName}
                placeholder="Last Name"
              />
              <select onChange={handleChange} className="py-2 rounded-md">
                <option value="test">Test</option>
                <option value="test">Test</option>
                <option value="test">Test</option>
                <option value="test">Test</option>
                <option value="test">Test</option>
              </select>
              <select onChange={handleChange} className="py-2 rounded-md">
                <option value="test">Test</option>
                <option value="test">Test</option>
                <option value="test">Test</option>
                <option value="test">Test</option>
                <option value="test">Test</option>
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
                name="vehicle"
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
              <select onChange={handleChange}>
                <option value="test">Test</option>
                <option value="test">Test</option>
                <option value="test">Test</option>
                <option value="test">Test</option>
                <option value="test">Test</option>
              </select>
              <select onChange={handleChange}>
                <option value="test">Test</option>
                <option value="test">Test</option>
                <option value="test">Test</option>
                <option value="test">Test</option>
                <option value="test">Test</option>
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
                className="p-2 rounded-md"
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
