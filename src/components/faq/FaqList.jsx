/* eslint-disable react/prop-types */
import { useState } from "react";

// eslint-disable-next-line no-unused-vars
const FaqList = ({ title, questions }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const toggleAnswer = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <div className="max-w-2xl">
      <h3 className="text-[20px] font-semibold ml-[3px] mb-5">{title}</h3>
      {questions.map((item, index) => (
        <div key={item.id} className="mb-4">
          <div
            className="flex items-center gap-5 cursor-pointer transition duration-300 ease-in-out border-b pb-4"
            onClick={() => toggleAnswer(index)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-[17px] w-[17px] transform transition-transform rounded-[50px] bg-orange-300 text-white ${
                activeIndex === index ? "rotate-90" : ""
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={activeIndex === index ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"}
              />
            </svg>
            <h2 className="text-md font-semibold">{item.question}</h2>
          </div>
          <div
            className={`overflow-hidden transition-max-height duration-300 ml-[23px] ${
              activeIndex === index ? "max-h-40" : "max-h-0"
            }`}
          >
            <p className="text-gray-600 mt-2">{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FaqList;
