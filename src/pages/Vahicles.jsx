import FilterSection from "../components/vehicle/FilterSection";
import VacihlesCard from "../components/vehicle/VacihlesCard";
import MainLayout from "../layout/MainLayout";
const data = [
  {
    id: 2,
    name: "Bmwx52 Similar",
    classes: "Economy",
    seat: "4 Seats",
    door: "2 Door",
    ac: "Ac",
    fuel: "fuel",
    baggage: "2 Baggage",
    auto: "autometic",
  },
  {
    id: 2,
    name: "Bmwx52 Similar",
    classes: "Economy",
    seat: "4 Seats",
    door: "2 Door",
    ac: "Ac",
    fuel: "fuel",
    baggage: "2 Baggage",
    auto: "autometic",
  },
  {
    id: 1,
    name: "Bmwx52 Similar",
    classes: "Economy",
    seat: "4 Seats",
    door: "2 Door",
    ac: "Ac",
    fuel: "fuel",
    baggage: "2 Baggage",
    auto: "autometic",
  },
];
const Vahicles = () => {
  return (
    <MainLayout>
      <div className="bg-[#E9E6DF] py-[50px]">
        <div className="m-auto max-w-[1400px] px-5">
          <FilterSection />
          {data.map((card) => (
            <VacihlesCard key={card.id} item={card}></VacihlesCard>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default Vahicles;
