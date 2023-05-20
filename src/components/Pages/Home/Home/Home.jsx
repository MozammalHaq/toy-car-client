import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
import Comments from "../Comments/Comments";
import Gallery from "../Gallery/Gallery";


const Home = () => {
    return (
        <div>
            <Banner/>
            <Gallery/>
            <Categories/>
            <Comments/>
        </div>
    );
};

export default Home;