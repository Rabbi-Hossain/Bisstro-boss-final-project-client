import { Helmet } from "react-helmet-async";
import Bannar from "../Bannar/Bannar";
import Category from "../Category/Category";
import ChefeRecommends from "../ChefeRecommends/ChefeRecommends";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bisstro Boss | Home</title>
            </Helmet>
            <Bannar></Bannar>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <ChefeRecommends></ChefeRecommends>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;