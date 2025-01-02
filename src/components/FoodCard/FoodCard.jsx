import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";



const FoodCard = ({ item }) => {

    const { _id, name, image, price, recipe } = item
    const navigate = useNavigate()
    const location = useLocation()
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()
    const [, refetch] = useCart()


    const handleAddToCart = () => {
        // console.log(food)
        if (user && user.email) {
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price
            }

            axiosSecure.post('/carts', cartItem)
                .then(res => {
                    console.log(res.data)
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `${name} add to your cart`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                        
                        refetch()
                    }
                })

        }
        else {
            Swal.fire({
                title: "You are not logged in ",
                text: "Please login to add to the cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, login"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })

                }
            });
        }

    }

    return (
        <div className="card bg-base-100 shadow-xl">
            <figure>
                <img className="w-full"
                    src={image}
                    alt="Shoes" />
            </figure>
            <p className="bg-black text-white right-0 absolute mr-4 mt-4 px-4">${price}</p>
            <div className="card-body flex flex-col text-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center">
                    <button onClick={handleAddToCart} className="btn btn-outline mt-8 border-0 border-b-4 bg-slate-100 border-orange-400">Add to Card</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;