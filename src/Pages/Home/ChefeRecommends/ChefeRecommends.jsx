import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import ChefCard from "../../../components/ChefCard/ChefCard";

const ChefeRecommends = () => {

    const [chefs, setChefs] = useState([])
    
    useEffect(()=>{
        fetch('chef.json')
        .then(res=>res.json())
        .then(data=>setChefs(data))
    },[])
    return (
        <section className="my-32">
           <SectionTitle
           subheading='Should Try'
           heading='CHEF RECOMMENDS'
           >
           </SectionTitle>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {
                chefs.map(chef=><ChefCard chef={chef}></ChefCard>)
            }
           </div>
        </section>
    );
};

export default ChefeRecommends;