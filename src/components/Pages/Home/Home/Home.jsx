import useTitle from "../../../../hooks/useTitle";
import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
import Comments from "../Comments/Comments";
import Gallery from "../Gallery/Gallery";
import Information from "../Information/Information";


const Home = () => {
    useTitle("Home")
    return (
        <div>
            <Banner/>
            <Gallery/>
            <Categories/>
            <Comments/>
            <Information/>
        </div>
    );
};

export default Home;