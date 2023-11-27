import Faq from "../components/faq/Faq";
import MainLayout from "./../layout/MainLayout";
const About = () => {
  return (
    <MainLayout>
      <div className="">
        <div className="m-auto max-w-[1400px] px-12 py-[50px] md:py-[80px]">
          <div className="flex justify-center items-center flex-col">
            <h2 className="text-[25px] md:text-[30px] font-semibold mb-5 uppercase">
              About Us
            </h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi in
              ipsam maxime, aut neque beatae explicabo sunt. Reiciendis fugiat
              quo quasi quas, commodi sunt repellat iusto dolorum minima fugit
              minus suscipit repellendus velit, quaerat explicabo vero ipsam
              aspernatur. Provident blanditiis hic repudiandae ad est vero eius
              eaque maxime repellendus quaerat numquam laudantium, labore, quod
              sunt nisi autem, facilis vitae veniam recusandae et itaque ex unde
              impedit. Suscipit, temporibus ipsum odit ea tempore ab eligendi
              fugiat repellendus doloremque soluta? Iste iure cum sequi
              assumenda? Voluptates, odio, provident non dignissimos illo
              tempore exercitationem facilis, eos deserunt nisi error voluptatum
              enim quas corporis. Tenetur enim architecto praesentium mollitia
              vel distinctio, ut placeat dignissimos suscipit.
            </p>
          </div>
        </div>
      </div>
      <div className="m-auto max-w-[1400px] px-12">
        <Faq />
      </div>
    </MainLayout>
  );
};

export default About;
