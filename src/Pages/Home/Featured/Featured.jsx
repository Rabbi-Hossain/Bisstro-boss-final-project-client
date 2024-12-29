import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {

    return (
        <div className="featured-item bg-fixed pt-8 my-20">
            <SectionTitle
            subheading='Check it out'
            heading='Featured Item'
            ></SectionTitle>
            <div className="md:flex bg-slate-500 bg-opacity-40 justify-center items-center px-36 pt-12  pb-20  text-white">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10 ml-4">
                    <h2>Aug 20, 2029</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt quam delectus cum sint voluptatem debitis dolorum voluptatum, exercitationem eum, vero vel id. Corporis, commodi quibusdam tempora impedit illum ipsa optio minus illo dolorem reiciendis rem repudiandae ut a voluptas ipsam, sed cum. Eum sint nobis exercitationem dolores vel doloremque dignissimos?</p>
                    <button className="btn btn-outline mt-8 border-0 border-b-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;