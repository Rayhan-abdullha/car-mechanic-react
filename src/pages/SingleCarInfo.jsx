import PhotoDetails from "../components/carDetails/photoDetails";
import MainLayout from "./../layout/MainLayout";
import GoogleMapLocation from "./../components/googleMapLocation/GoogleMapLocation";
import ContactInfo from "./../components/contactForm/ContactInfo";
import RentalRequirement from "./../components/RentalRequirement/RentalRequirement";
import { Link, Element } from "react-scroll";

const SingleCarInfo = () => {
  return (
    <MainLayout>
      <div className="carDetails-page pt-[70px] md:pt-[100px]">
        <PhotoDetails />
        <section className="m-auto max-w-[1400px] px-5 my-[70px]">
          <nav className="mb-5">
            <ul className="flex justify-evenly gap-1">
              <li>
                <Link
                  to="discription"
                  smooth={true}
                  duration={500}
                  className="text-17px uppercase text-[#989898] font-semibold cursor-pointer hover:text-orange-400"
                >
                  Discription
                </Link>
              </li>
              <li>
                <Link
                  to="location"
                  smooth={true}
                  duration={500}
                  className="text-17px uppercase text-[#989898] font-semibold cursor-pointer hover:text-orange-400"
                >
                  Location
                </Link>
              </li>
              <li>
                <Link
                  to="requirement"
                  smooth={true}
                  duration={500}
                  className="text-17px uppercase text-[#989898] font-semibold cursor-pointer hover:text-orange-400"
                >
                  Requirements
                </Link>
              </li>
            </ul>
          </nav>
          <p className="text-[20px] text-center my-[100px] leading-[30px]">
            Rent a Black Bentley Bentayga - a 5 -seate <br />
            Luxury SUV with 4.0 -liter twin - turbocharged V8 engine, 542 hp,
            and 568 lb-fb Torque.
          </p>

          <div className="style-section my-10">
            <h3 className="text-[20px] font-semibold mb-10">Style</h3>
            <div className="flex flex-wrap gap-10 grow">
              <div className="grow basis-[300px] shrink-0 border border-stone-300 py-2 text-center">
                <h5 className="uppercase text-[12px] mb-2">make</h5>
                <h3 className="text-[18px] font-semibold">Bentley</h3>
              </div>
              <div className="grow basis-[300px] shrink-0 border border-stone-300 py-2 text-center">
                <h5 className="uppercase text-[12px] mb-2">model</h5>
                <h3 className="text-[18px] font-semibold">Bentayga</h3>
              </div>
              <div className="grow basis-[300px] shrink-0 border border-stone-300 py-2 text-center">
                <h5 className="uppercase text-[12px] mb-2">color</h5>
                <h3 className="text-[18px] font-semibold">Black</h3>
              </div>

              <div className="grow basis-[300px] shrink-0 border border-stone-300 py-2 text-center">
                <h5 className="uppercase text-[12px] mb-2">class</h5>
                <h3 className="text-[18px] font-semibold">Luxury suv</h3>
              </div>
              <div className="grow basis-[300px] shrink-0 border border-stone-300 py-2 text-center">
                <h5 className="uppercase text-[12px] mb-2">body</h5>
                <h3 className="text-[18px] font-semibold">Suv</h3>
              </div>
              <div className="grow basis-[300px] shrink-0 border border-stone-300 py-2 text-center">
                <h5 className="uppercase text-[12px] mb-2">Seats</h5>
                <h3 className="text-[18px] font-semibold">5</h3>
              </div>
            </div>
          </div>
          <div className="style-section my-10">
            <h3 className="text-[20px] font-semibold mb-10">Performance</h3>
            <div className="flex flex-wrap gap-10 grow">
              <div className="grow basis-[300px] shrink-0 border border-stone-300 py-2 text-center">
                <h5 className="uppercase text-[12px] mb-2">make</h5>
                <h3 className="text-[18px] font-semibold">Bentley</h3>
              </div>
              <div className="grow basis-[300px] shrink-0 border border-stone-300 py-2 text-center">
                <h5 className="uppercase text-[12px] mb-2">model</h5>
                <h3 className="text-[18px] font-semibold">Bentayga</h3>
              </div>
              <div className="grow basis-[300px] shrink-0 border border-stone-300 py-2 text-center">
                <h5 className="uppercase text-[12px] mb-2">color</h5>
                <h3 className="text-[18px] font-semibold">Black</h3>
              </div>

              <div className="grow basis-[300px] shrink-0 border border-stone-300 py-2 text-center">
                <h5 className="uppercase text-[12px] mb-2">class</h5>
                <h3 className="text-[18px] font-semibold">Luxury suv</h3>
              </div>
              <div className="grow basis-[300px] shrink-0 border border-stone-300 py-2 text-center">
                <h5 className="uppercase text-[12px] mb-2">body</h5>
                <h3 className="text-[18px] font-semibold">Suv</h3>
              </div>
              <div className="grow basis-[300px] shrink-0 border border-stone-300 py-2 text-center">
                <h5 className="uppercase text-[12px] mb-2">Seats</h5>
                <h3 className="text-[18px] font-semibold">5</h3>
              </div>
              <div className="grow basis-[300px] shrink-0 border border-stone-300 py-2 text-center">
                <h5 className="uppercase text-[12px] mb-2">Seats</h5>
                <h3 className="text-[18px] font-semibold">5</h3>
              </div>
              <div className="grow basis-[300px] shrink-0 border border-stone-300 py-2 text-center">
                <h5 className="uppercase text-[12px] mb-2">Seats</h5>
                <h3 className="text-[18px] font-semibold">5</h3>
              </div>
            </div>
          </div>
        </section>

        <Element name="discription" className="element">
          <section className="m-auto max-w-[1400px] px-5 my-[50px]">
            <h3 className="mb-5 text-[20px] font-semibold">Description</h3>
            <div className="flex flex-col sm:flex-row justify-between gap-5">
              <p className="text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate, officia eveniet hic id odit velit voluptatibus optio
                placeat cupiditate eum consectetur eius quasi nesciunt impedit
                dolore fuga doloremque, consequuntur exercitationem expedita
                praesentium voluptatem. Officiis rerum eaque fuga natus, hic
                delectus nisi tenetur voluptate nihil, ea maxime aspernatur
                inventore excepturi aut neque temporibus cupiditate. Eveniet
                tenetur beatae explicabo voluptatum. Distinctio sed repellat
                possimus nobis repudiandae dolores pariatur sint, ipsam quidem
                soluta, libero a aperiam vel nulla fugit accusantium dignissimos
                omnis provident explicabo quasi id suscipit ipsa. Amet quis nemo
                omnis cum? Amet voluptatum voluptas dolore. Eaque a ut qui et
                assumenda?
              </p>
              <p className="text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate, officia eveniet hic id odit velit voluptatibus optio
                placeat cupiditate eum consectetur eius quasi nesciunt impedit
                dolore fuga doloremque, consequuntur exercitationem expedita
                praesentium voluptatem. Officiis rerum eaque fuga natus, hic
                delectus nisi tenetur voluptate nihil, ea maxime aspernatur
                inventore excepturi aut neque temporibus cupiditate. Eveniet
                tenetur beatae explicabo voluptatum. Distinctio sed repellat
                possimus nobis repudiandae dolores pariatur sint, ipsam quidem
                soluta, libero a aperiam vel nulla fugit accusantium dignissimos
                omnis provident explicabo quasi id suscipit ipsa. Amet quis nemo
                omnis cum? Amet voluptatum voluptas dolore. Eaque a ut qui et
                assumenda?
              </p>
            </div>
          </section>
        </Element>

        <Element name="location" className="element">
          <GoogleMapLocation />
        </Element>

        <ContactInfo />

        <Element name="requirement" className="element">
          <RentalRequirement />
        </Element>
      </div>
    </MainLayout>
  );
};

export default SingleCarInfo;
