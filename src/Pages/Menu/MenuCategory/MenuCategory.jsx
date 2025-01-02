import { Link } from "react-router";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";


const MenuCategory = ({ items, title, img }) => {
    return (
        <div className="mt-32">
            {title && <Cover img={img} title={title}></Cover>}
            <div className="grid md:grid-cols-2 gap-10 mb-16 mt-10">
                {
                    items.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <div className="text-center">
                <Link to={`/order/${title}`}>
                    <button className="btn btn-outline mt-8 border-0 border-b-4">Order Now</button>
                </Link>
            </div>
        </div>
    );
};

export default MenuCategory;