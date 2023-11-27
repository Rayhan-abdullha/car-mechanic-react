import VacihlesCard from "../components/vahiclesCard/VacihlesCard";
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
      <div className="bg-[#f5f5dc] py-[100px]">
        <div className="m-auto max-w-[1400px] px-5">
          <div className="sort-section flex bg-white p-5 mb-10 shadow-md">
            <h3 className="text-[20px] mr-5">Sort results by: </h3>
            <button className="bg-[#ebebeb] mr-3 px-3 py-2">Car Name</button>
            <button className="bg-[#ebebeb] px-3 py-2">Price</button>
          </div>

          {data.map((card) => (
            <VacihlesCard key={card.id} item={card}></VacihlesCard>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default Vahicles;
