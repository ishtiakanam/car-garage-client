import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const ServiceCard = ({ service }) => {
    const { _id, title, img, price } = service
    return (
        <div className="card  bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl h-[250px]" />
            </figure>
            <div className="card-body space-y-2">
                <h2 className="card-title font-bold">Title{title}</h2>
                <div className="flex items-center">
                    <p className="text-xl text-orange-600 font-bold">Price:${price}</p>
                    {/* <button className="btn  btn-outline text-orange-600"> */}
                    {/* <h3> <FaArrowRightLong /></h3> */}
                    {/* </button> */}
                    <Link to={`/checkout/${_id}`}>
                        <button>
                            <FaArrowRight className='text-orange-600 font-bold text-2xl' />
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;