import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import cart from '../../assets/images/about_us/parts.jpg'
import BookingRow from "./BookingRow";
import Swal from "sweetalert2";
const CheckOutDetails = () => {
    const { user } = useContext(AuthContext)
    const [bookings, setBookings] = useState([])

    const handleDelete = id => {
        const proceed = confirm("Are you sure you want to delete")
        // const proceed = Swal.fire({
        //     title: 'Are you sure?',
        //     text: "You won't be able to revert this!",
        //     icon: 'warning',
        //     showCancelButton: true,
        //     confirmButtonColor: '#3085d6',
        //     cancelButtonColor: '#d33',
        //     confirmButtonText: 'Yes, delete it!'
        // })
        if (proceed) {
            fetch(`http://localhost:5000/booking/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount) {
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        )
                        const remaining = bookings.filter(booking => booking._id !== id)
                        setBookings(remaining)
                    }
                }

                )
        }
    }

    const handleConfirm = id => {
        fetch(`http://localhost:5000/booking/${id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: "confirm" })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    const remaining = bookings.filter(booking => booking._id !== id)
                    const updated = bookings.find(booking => booking._id === id)
                    updated.status = 'confirm'
                    const newBookings = [updated, ...remaining]
                    setBookings(newBookings)
                }
            })
    }

    const uri = `http://localhost:5000/booking?email=${user.email}`
    useEffect(() => {
        fetch(uri)
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [])
    return (
        <div>
            <img className="h-[60vh] w-full" src={cart} alt="" />

            <h2 className="text-center text-3xl font-bold text-orange-500 my-10">Your Bookings:{bookings.length}</h2>


            {/*  */}
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                {/* <label>
                                    <input type="checkbox" className="checkbox" />
                                </label> */}
                            </th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Price</th>
                            <th>date</th>
                            <th>Confirm or not</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map(booking => <BookingRow key={booking._id} booking={booking} handleConfirm={handleConfirm} handleDelete={handleDelete}></BookingRow>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default CheckOutDetails;