import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./ourServices.JSON')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div id="services m-auto" >
            <h1 className='text-light mx-5 my-5 '>Our <span>Services</span> </h1>
            <div className="row row-cols-1 row-cols-md-3 g-4 mx-5">
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}></Service>)
                }
            </div>


        </div>
    );
};

export default Services;