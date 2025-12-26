import Banner from "../components/Banner";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <h1>Home</h1>
      <Banner orang="joko" />
    </div>
  );
};

export default Home;
