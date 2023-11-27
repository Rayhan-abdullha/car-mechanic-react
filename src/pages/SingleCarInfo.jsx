import PhotoDetails from "../components/carDetails/photoDetails";
import MainLayout from "./../layout/MainLayout";

const SingleCarInfo = () => {
  return (
    <MainLayout>
      <div className="carDetails-page py-[100px]">
        <PhotoDetails />
      </div>
    </MainLayout>
  );
};

export default SingleCarInfo;
