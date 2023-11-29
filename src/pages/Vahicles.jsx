import React, { useEffect, useState } from "react";
import FilterSection from "../components/vehicle/FilterSection";
import VacihlesCard from "../components/vehicle/VacihlesCard";
import MainLayout from "../layout/MainLayout";
import { carDemoData } from "../data/data";

const Vahicles = () => {
  const [filter, setFilter] = useState({
    category: "",
    price: "",
    highOrLow: "",
  });
  const [carData, setCarData] = useState(carDemoData);

  useEffect(() => {
    let datafilter = [...carDemoData];
    if (filter.category) {
      datafilter = datafilter.filter((item) => {
        if (item.name.toLowerCase().includes(filter.category.toLowerCase())) {
          return item;
        }
      });
    }
    if (filter.price) {
      datafilter = datafilter.filter((item) => {
        if (item.price === +filter.price) {
          return item;
        }
      });
    }
    if (filter.highOrLow) {
      if (filter.highOrLow.toLowerCase() === "higtolow") {
        datafilter = datafilter.sort((a, b) => a.price - b.price);
      }
      if (filter.highOrLow.toLowerCase() === "lowtohigh") {
        datafilter = datafilter.sort((a, b) => b.price - a.price);
      }
    }
    setCarData(datafilter);
  }, [setFilter, filter]);

  return (
    <MainLayout>
      <div className="bg-[#E9E6DF] py-[50px]">
        <div className="m-auto max-w-[1400px] px-5">
          <FilterSection setFilter={setFilter} filter={filter} />
          {carData.length ? (
            carData.map((card) => (
              <VacihlesCard key={card.id} item={card}></VacihlesCard>
            ))
          ) : (
            <p className="text-[17px] h-[40vh] ml-2">Not Matched!</p>
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default React.memo(Vahicles);
