import Banner from "../components/Banner";
import Category from "../components/Category/Category";
import Featured from "../components/featured/Featured";


const Home = () => {
    return (
        <div>
            {/* banner */}
            <div className="py-6 xl:mt-14">
                <Banner></Banner>
            </div>
            {/* category */}
            <div className="py-6">
                <Category></Category>
            </div>
            {/* featured */}
            <div className="py-6">
                <Featured></Featured>
            </div>
        </div>
    );
};

export default Home;