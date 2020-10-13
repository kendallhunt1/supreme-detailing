import React from 'react';
import './AboutUs.css';

const AboutUs = () => {

const profiles = [
    {
        id: "one",
        name: 'Ryan Lemaster',
        profileImage: "https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/03/GettyImages-1092658864_hero-1024x575.jpg?w=1155&h=1528",
        description: 'Life Long Car Enthusiast, and Dog Lover. The Best in the Business.',
        phoneNumber: '(740) 804-8522'
    },
    {
        id: "two",
        name: 'Marc Stevens',
        profileImage: "https://image.shutterstock.com/image-photo/close-portrait-smiling-handsome-man-260nw-1011569245.jpg",
        description: 'Our Beautiful Bearded Detailer, That will Keep Your Vehicle in the Best Hands.',
        phoneNumber: '(740) 601-6330'
    }
]
    return (
        <div className="aboutUs">
            <div className="about">
                <h1>About Us</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, amet. Excepturi, explicabo omnis! Laboriosam consequatur dolores vero quia ut dicta quam deleniti quasi iusto distinctio. Incidunt harum veritatis, eveniet minus sapiente tempora omnis molestiae corrupti earum atque facere tenetur nobis neque assumenda, aut voluptate labore mollitia. Voluptatibus ut sint expedita. Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dignissimos voluptatem eum, expedita, ut, optio ab a libero magni sint veritatis. Dolores blanditiis ad similique magnam rerum laborum architecto cum officia. Quam, qui voluptates beatae accusantium a ipsum dolorum sunt aliquid impedit tenetur, veniam id ad saepe architecto totam doloribus.
                </p>
            </div>
            <div className="profileCards">
                <div className="profileCardWrapper">
                  {profiles.map(item => {
                      return (
                        <div className="profileCard">
                            <div className={item.id} />
                            <div className="cardInformation">
                                <h1>{item.name}</h1>
                                <h2>Head Detailer</h2>
                                <h2>{item.phoneNumber}</h2>
                            </div>
                        </div>
                      )
                  })}  
                </div>
            </div>
        </div>
    )
}

export default AboutUs;