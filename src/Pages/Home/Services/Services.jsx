import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="mt-10">
            <div className="text-center space-y-5 ">
                <h3 className="text-3xl text-orange-600 font-bold">Our Services</h3>
                <h3 className="text-5xl font-bold">Our Services Area</h3>
                <p>The majority have suffered alternation in some from,by injected homurs.Or randomised <br /> words which dont look even slightly believable.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;