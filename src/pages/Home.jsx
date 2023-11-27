import RentalRequirement from "../components/RentalRequirement/RentalRequirement";
import MainLayout from "./../layout/MainLayout";
const Home = () => {
  return (
    <MainLayout>
      <main>
        <div
          className="h-[500px] w-full bg-cover bg-top"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1632685062337-095b722134ca?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
          }}
        />

        <RentalRequirement />
      </main>
    </MainLayout>
  );
};

export default Home;
