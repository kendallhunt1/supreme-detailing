import React from 'react';
import './OurServices.css';

const OurServices = () => {

    const packages = [
        {
            name: 'Basic',
            services: [
                {service: 'Hand Wash/Dry'},
                {service: 'Wheel/Tire Cleaning and Dressing'},
                {service: 'Interior Wipe Down'},
                {service: 'Wipe Down Door Jams'},
                {service: 'Quick Basic Vacuum'},
                {service: 'Spray Wax'},
                {service: 'Basic Window Cleaning (Inside and Out)'}
            ]
        },
        {
            name: 'Complete',
            services: [
                {service: 'Hand Wash/Dry'},
                {service: 'Wheel/Tire Cleaning and Dressing'},
                {service: 'Interior Wipe Down'},
                {service: 'Wipe Down Door Jams'},
                {service: 'Wax Door Jams'},
                {service: 'Quick Basic Vacuum'},
                {service: '1 Coat of Normal Wax on Applicator'},
                {service: 'Basic Window Cleaning (Inside and Out)'},
                {service: 'Air Freshener'}
            ]
        },
        {
            name: 'Supreme',
            services: [
                {service: 'Extensive Wash/Dry'},
                {service: 'Wheel/Tire Cleaning and Dressing'},
                {service: 'Interior Wipe Down'},
                {service: 'Trim Restoration'},
                {service: 'Leather Treatment'},
                {service: 'Wipe Down Door Jams'},
                {service: 'Wax Door Jams'},
                {service: 'Extensive Vacuum'},
                {service: '2 Coat of Normal Wax on Applicator'},
                {service: 'Window Cleaning, and Treatment (Inside and Out)'},
                {service: 'Air Freshener'}
            ]
        }
    ]

    return (
        <div className="ourServices">
            <div className="text">
                <h3>Our Packages</h3>
                <p>Our services are all top of the line, and come from a place of passion. Each vehicle, and service is different, and we wanted to be able to provide something for every circumstance. From just giving simple washes, and details to paint correction, and much more.
                Our goal is to be able to help you accomplish absolutely anything that you want to accomplish.
                </p>
            </div>
            <div className="packages">
                {
                    packages.map((item) =>
                    <div className="package" id={item.name}>
                        <h1>{item.name}</h1>
                        <div className="listOfServices">
                            {item.services.map((sub) => 
                            <span>
                                {sub.service}
                            </span>
                            )}
                        </div>
                    </div>
                    )
                }
            </div>
        </div>
    )
}

export default OurServices;