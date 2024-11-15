import Accordion from "../../Components/Home/Accordion";
import Banner from "../../Components/Home/Banner";
import FeaturedProduct from "../../Components/Home/featuredProduct";
import UserReviews from "../../Components/Home/UserReviews";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      
      <div className="container mx-auto my-24">
        <h1 className="text-center text-3xl font-semibold mb-6">Featured Product</h1>
      <FeaturedProduct></FeaturedProduct>
      </div>

      <div className="container mx-auto my-24">
        <h1 className="text-center text-3xl font-semibold mb-6">User Review</h1>
      <UserReviews></UserReviews>
      </div>

      <div className="container mx-auto my-24">
        <h1 className="text-center text-3xl font-semibold mb-6">Frequently Asked Questions</h1>
      <Accordion></Accordion>
      </div>
      
    </div>
  );
};

export default Home;
