
const ChefCard = ({ chef }) => {
    const { image, title, material } = chef
    return (
        <div>
            <div className="card bg-base-100  shadow-xl">
                <figure>
                    <img className="h-[300px]"
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body space-y-3">
                    <h2 className="card-title">{title}</h2>
                    <p>{material}</p>
                    <div className="card-actions justify-center">
                        <button className="btn btn-outline">Add card</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefCard;