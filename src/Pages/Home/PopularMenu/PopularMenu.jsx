
// import { useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";

import MenuItem from "../../Shared/MenuItem/MenuItem";


const PopularMenu = () => {
    
    const [menu] = useMenu()
    const popular = menu.filter(item=>item.category === 'popular')
    console.log(popular)
    
    // const [menu, setMenu] = useState([])

    // useEffect(() => {
    //     fetch('menu.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             const popularItems = data.filter(item => item.category === 'popular')
    //             setMenu(popularItems)
    //         })

    // }, [])

    return (
        <section className="mb-12">
            <SectionTitle
                subheading='Check it out'
                heading='Popular items'
            >
            </SectionTitle>

            <div className="grid md:grid-cols-2 gap-10 ">
                {
                    popular.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <div className="text-center mt-6">
                <button className="btn btn-outline mt-8 border-0 border-b-4">Order Now</button>
            </div>
        </section>
    );
};

export default PopularMenu;