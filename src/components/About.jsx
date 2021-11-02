import React from 'react';
import { NavLink } from 'react-router-dom';

const About = () => {
    return (
        <div>
            <div className="container py-5 my-5">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className='text-primary fw-bold' >About Us</h1>
                        <p className="lead">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, ducimus aspernatur harum quidem provident unde laudantium. Ullam expedita, rerum maxime nostrum neque hic. Saepe, ipsum dolorum. Ullam ipsum error in. Lorem ipsum dolor sit amet consectetur, adipisicing elit. C upiditate commodi porro autem fugiat quos quasi eligendi at dolorem velit odit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae alias eligendi ratione qui fuga, cum sapiente in, ducimus aut odio dolores accusamus quibusdam nam eum! Tempora hic repudiandae et minima.
                        </p>
                        <NavLink to='/contact' className='btn btn-outline-primary' >Contact Us</NavLink>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center ">
                        <img src='/assets/images/about.png' alt="About Us" height='400px' width='400px' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
