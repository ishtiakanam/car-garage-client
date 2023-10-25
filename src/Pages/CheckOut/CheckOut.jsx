import { useLoaderData } from "react-router-dom";
import checkOut from '../../assets/images/checkout/checkout.png'
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
const CheckOut = () => {
    const service = useLoaderData()
    const { _id, img, title, price } = service
    const { user } = useContext(AuthContext)

    const handleBookedService = e => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const date = form.date.value
        const email = form.email.value
        const amount = form.amount.value
        const order = {
            customerName: name,
            email,
            date,
            img,
            service: title,
            service_id: _id,
            price: amount
        }
        console.log(order);
        // const user = { name, date, email, amount }
        // console.log(user);

        fetch('http://localhost:5000/booking', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Successfully inserted',
                        showClass: {
                            popup: 'animate__animated animate__fadeInDown'
                        },
                        hideClass: {
                            popup: 'animate__animated animate__fadeOutUp'
                        }
                    })
                }
            })
    }

    return (
        <div>

            <img className="my-10 w-full" src={checkOut} alt="" />

            <h2 className="text-center text-orange-500 font-bold text-3xl">Booked Service:{title}</h2>

            {/* text area */}

            <form onSubmit={handleBookedService}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" defaultValue={user?.displayName} placeholder="Name" name="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input type="date" name="date" placeholder="Date" className="input input-bordered" required />
                    </div>
                    {/*  */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" defaultValue={user?.email} placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Due Amount</span>
                        </label>
                        <input type="text" name="amount" defaultValue={'$' + price} className="input input-bordered" required />
                    </div>
                </div>

                <textarea placeholder="About my website" className="textarea textarea-bordered textarea-lg w-full my-5" ></textarea>

                <div className="form-control mt-6">
                    <input className="btn btn-block bg-orange-600 text-white" type="submit" value="Order Confirm" />
                </div>
            </form>
            {/* <div className="card-body">
            </div> */}
        </div>
    );
};

export default CheckOut;