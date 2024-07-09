import Banner from "../components/Banner";
import Category from "../components/Category/Category";


const Home = () => {
    return (
        <div>
            {/* banner */}
            <div className="py-6">
                <Banner></Banner>
            </div>
            {/* category */}
            <div className="py-6">
                <Category></Category>
            </div>
        </div>
    );
};

export default Home;