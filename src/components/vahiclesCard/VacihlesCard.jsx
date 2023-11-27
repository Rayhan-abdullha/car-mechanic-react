/* eslint-disable react/prop-types */
import { RxAvatar } from "react-icons/rx";
const VacihlesCard = ({ item }) => {
  return (
    <div className="bg-white flex justify-between mb-10 p-5">
      <div className="car-img">
        <img
          src="https://imgd.aeplcdn.com/664x374/n/cw/ec/136217/x7-exterior-right-front-three-quarter-8.jpeg?isig=0&q=80"
          alt=""
        />
      </div>
      <div className="car-info">
        <h3 className="text-[25px] font-bold">{item.name}</h3>
        <p className="mb-5">CLASS: {item.classes}</p>
        <div className="">
          <ul className="gird grid-cols-3">
            <li className="flex gap-1">
              <RxAvatar className="text-[50px]" />
              <span className="mt-[10px]">{item.seat}</span>
            </li>
            <li className="flex gap-1">
              <RxAvatar className="text-[50px]" />
              <span className="mt-[10px]">{item.door}</span>
            </li>
            <li className="flex gap-1">
              <RxAvatar className="text-[50px]" />
              <span className="mt-[10px]">{item.ac}</span>
            </li>
            <li className="flex gap-1">
              <RxAvatar className="text-[50px]" />
              <span className="mt-[10px]">{item.baggage}</span>
            </li>
            <li className="flex gap-1">
              <RxAvatar className="text-[50px]" />
              <span className="mt-[10px]">{item.auto}</span>
            </li>
            <li className="flex gap-1">
              <RxAvatar className="text-[50px]" />
              <span className="mt-[10px]">{item.auto}</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="selectButton">
        <h3 className="text-center font-bold text-[20px]">KWD 1000</h3>
        <button className="bg-green-500 py-2 px-5 text-white uppercase font-bold mt-2">
          Select Car
        </button>
      </div>
    </div>
  );
};

export default VacihlesCard;
