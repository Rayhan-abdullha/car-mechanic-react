/* eslint-disable react/prop-types */
import { RxAvatar } from "react-icons/rx";
const VacihlesCard = ({ item }) => {
  return (
    <div className="bg-white flex  mb-10 p-5">
      <div className="car-img basis-2/4">
        <img
          src="https://imgd.aeplcdn.com/664x374/n/cw/ec/136217/x7-exterior-right-front-three-quarter-8.jpeg?isig=0&q=80"
          alt=""
          className="w-[80%] mx-auto"
        />
      </div>
      <div className="w-full basis-2/4">
        <div className="flex justify-between w-full ">
          <div className="car-info">
            <h3 className="text-[25px] font-bold">{item.name}</h3>
            <p className="mb-5">CLASS: {item.classes}</p>
          </div>
          <div className="selectButton">
            <h3 className="text-center font-bold text-[20px]">KWD 1000</h3>
            <button className="bg-green-500 py-2 px-5 text-white uppercase font-bold mt-2">
              Select Car
            </button>
          </div>
        </div>
        <div className="w-[100%]">
          <ul className="grid grid-cols-1 lg:grid-cols-2 gap-y-3 text-gray-600">
            <li className="flex gap-1 items-center ">
              <RxAvatar className="text-[40px] text-gray-600" />
              <span className="">{item.seat}</span>
            </li>
            <li className="flex gap-1 items-center ">
              <RxAvatar className="text-[40px] text-gray-600" />
              <span className="">{item.ac}</span>
            </li>
            <li className="flex gap-1 items-center ">
              <RxAvatar className="text-[40px] text-gray-600" />
              <span className="">{item.door}</span>
            </li>
            <li className="flex gap-1 items-center ">
              <RxAvatar className="text-[40px] text-gray-600" />
              <span className="">{item.fuel}</span>
            </li>
            <li className="flex gap-1 items-center ">
              <RxAvatar className="text-[40px] text-gray-600" />
              <span className="">{item.baggage}</span>
            </li>
            <li className="flex gap-1 items-center ">
              <RxAvatar className="text-[40px] text-gray-600" />
              <span className="">{item.auto}</span>
            </li>
          </ul>
        </div>
        <div className="flex gap-4 text-green-900 font-medium text-lg mt-4">
          <div className="flex items-center gap-1">
            <img
              className="w-6"
              alt="svgImg"
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAsMCwyNTYsMjU2IgpzdHlsZT0iZmlsbDojMDAwMDAwOyI+CjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxnIHRyYW5zZm9ybT0ic2NhbGUoNS4zMzMzMyw1LjMzMzMzKSI+PGNpcmNsZSBjeD0iMjQiIGN5PSIyNCIgcj0iMjAiIGZpbGw9IiM0ZGUxNWQiPjwvY2lyY2xlPjxwYXRoIGQ9Ik0yMi40OTEsMzAuNjljLTAuNTc2LDAgLTEuMTUyLC0wLjIyIC0xLjU5MSwtMC42NTlsLTYuMDgzLC02LjA4NGMtMC44NzksLTAuODc4IC0wLjg3OSwtMi4zMDMgMCwtMy4xODJjMC44NzgsLTAuODc5IDIuMzA0LC0wLjg3OSAzLjE4MiwwbDYuMDgzLDYuMDg0YzAuODc5LDAuODc4IDAuODc5LDIuMzAzIDAsMy4xODJjLTAuNDM5LDAuNDM5IC0xLjAxNSwwLjY1OSAtMS41OTEsMC42NTl6IiBmaWxsPSIjZmZmZmZmIj48L3BhdGg+PHBhdGggZD0iTTIyLjQ5MSwzMC42OWMtMC41NzYsMCAtMS4xNTIsLTAuMjIgLTEuNTkxLC0wLjY1OWMtMC44NzksLTAuODc4IC0wLjg3OSwtMi4zMDMgMCwtMy4xODJsOS41MzksLTkuNTM5YzAuODc4LC0wLjg3OSAyLjMwNCwtMC44NzkgMy4xODIsMGMwLjg3OSwwLjg3OCAwLjg3OSwyLjMwMyAwLDMuMTgybC05LjUzOSw5LjUzOWMtMC40MzksMC40MzkgLTEuMDE1LDAuNjU5IC0xLjU5MSwwLjY1OXoiIGZpbGw9IiNmZmZmZmYiPjwvcGF0aD48L2c+PC9nPgo8L3N2Zz4="
            />

            <p>Amendment</p>
          </div>
          <div className="flex items-center gap-1">
            <img
              className="w-6"
              alt="svgImg"
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAsMCwyNTYsMjU2IgpzdHlsZT0iZmlsbDojMDAwMDAwOyI+CjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxnIHRyYW5zZm9ybT0ic2NhbGUoNS4zMzMzMyw1LjMzMzMzKSI+PGNpcmNsZSBjeD0iMjQiIGN5PSIyNCIgcj0iMjAiIGZpbGw9IiM0ZGUxNWQiPjwvY2lyY2xlPjxwYXRoIGQ9Ik0yMi40OTEsMzAuNjljLTAuNTc2LDAgLTEuMTUyLC0wLjIyIC0xLjU5MSwtMC42NTlsLTYuMDgzLC02LjA4NGMtMC44NzksLTAuODc4IC0wLjg3OSwtMi4zMDMgMCwtMy4xODJjMC44NzgsLTAuODc5IDIuMzA0LC0wLjg3OSAzLjE4MiwwbDYuMDgzLDYuMDg0YzAuODc5LDAuODc4IDAuODc5LDIuMzAzIDAsMy4xODJjLTAuNDM5LDAuNDM5IC0xLjAxNSwwLjY1OSAtMS41OTEsMC42NTl6IiBmaWxsPSIjZmZmZmZmIj48L3BhdGg+PHBhdGggZD0iTTIyLjQ5MSwzMC42OWMtMC41NzYsMCAtMS4xNTIsLTAuMjIgLTEuNTkxLC0wLjY1OWMtMC44NzksLTAuODc4IC0wLjg3OSwtMi4zMDMgMCwtMy4xODJsOS41MzksLTkuNTM5YzAuODc4LC0wLjg3OSAyLjMwNCwtMC44NzkgMy4xODIsMGMwLjg3OSwwLjg3OCAwLjg3OSwyLjMwMyAwLDMuMTgybC05LjUzOSw5LjUzOWMtMC40MzksMC40MzkgLTEuMDE1LDAuNjU5IC0xLjU5MSwwLjY1OXoiIGZpbGw9IiNmZmZmZmYiPjwvcGF0aD48L2c+PC9nPgo8L3N2Zz4="
            />

            <p>Theft Protection</p>
          </div>
          <div className="flex items-center gap-1">
            <img
              className="w-6"
              alt="svgImg"
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAsMCwyNTYsMjU2IgpzdHlsZT0iZmlsbDojMDAwMDAwOyI+CjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxnIHRyYW5zZm9ybT0ic2NhbGUoNS4zMzMzMyw1LjMzMzMzKSI+PGNpcmNsZSBjeD0iMjQiIGN5PSIyNCIgcj0iMjAiIGZpbGw9IiM0ZGUxNWQiPjwvY2lyY2xlPjxwYXRoIGQ9Ik0yMi40OTEsMzAuNjljLTAuNTc2LDAgLTEuMTUyLC0wLjIyIC0xLjU5MSwtMC42NTlsLTYuMDgzLC02LjA4NGMtMC44NzksLTAuODc4IC0wLjg3OSwtMi4zMDMgMCwtMy4xODJjMC44NzgsLTAuODc5IDIuMzA0LC0wLjg3OSAzLjE4MiwwbDYuMDgzLDYuMDg0YzAuODc5LDAuODc4IDAuODc5LDIuMzAzIDAsMy4xODJjLTAuNDM5LDAuNDM5IC0xLjAxNSwwLjY1OSAtMS41OTEsMC42NTl6IiBmaWxsPSIjZmZmZmZmIj48L3BhdGg+PHBhdGggZD0iTTIyLjQ5MSwzMC42OWMtMC41NzYsMCAtMS4xNTIsLTAuMjIgLTEuNTkxLC0wLjY1OWMtMC44NzksLTAuODc4IC0wLjg3OSwtMi4zMDMgMCwtMy4xODJsOS41MzksLTkuNTM5YzAuODc4LC0wLjg3OSAyLjMwNCwtMC44NzkgMy4xODIsMGMwLjg3OSwwLjg3OCAwLjg3OSwyLjMwMyAwLDMuMTgybC05LjUzOSw5LjUzOWMtMC40MzksMC40MzkgLTEuMDE1LDAuNjU5IC0xLjU5MSwwLjY1OXoiIGZpbGw9IiNmZmZmZmYiPjwvcGF0aD48L2c+PC9nPgo8L3N2Zz4="
            />

            <p>Collision Damage waiver</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VacihlesCard;
