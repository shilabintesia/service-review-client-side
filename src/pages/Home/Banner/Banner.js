import React from 'react';
import banner1 from '../../../assets/banner/banner1.jpg'
import banner2 from '../../../assets/banner/banner2.jpg'
import banner3 from '../../../assets/banner/banner3.jpg'
import banner4 from '../../../assets/banner/banner4.jpg'


const Banner = () => {
    return (
        <div>
            <div id="carouselExampleCaptions" className="carousel slide relative text-white" data-bs-ride="carousel">
                <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="0"
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="2"
                        aria-label="Slide 3"
                    ></button>
                </div>
                <div className="carousel-inner relative w-full overflow-hidden">
                    <div className="carousel-item active relative float-left w-full">
                        <img
                            src={banner1}
                            className="block w-full"
                            alt="..."
                        />
                        <div className="carousel-caption hidden md:block absolute text-center">
                            <h1 className="text-4xl font-bold">Eat-Pray-Love Restaurants</h1>
                            <p className='text-bold'>“If you clear out all of that space in your mind you would have a door way.”
                            </p>
                        </div>
                    </div>
                    <div className="carousel-item relative float-left w-full">
                        <img
                            src={banner2}
                            className="block w-full"
                            alt="..."
                        />
                        <div className="carousel-caption hidden md:block absolute text-center">
                            <h2 className='font-bold text-2xl'>Eat-Pray-Love Restaurants</h2>
                            <p className='text-bold'>“This is a good sign, having a broken heart. It means we have tried for something.”
                            </p>
                        </div>
                    </div>
                    <div className="carousel-item relative float-left w-full">
                        <img
                            src={banner3}
                            className="block w-full"
                            alt="..."
                        />
                        <div className="carousel-caption hidden md:block absolute text-center">
                            <h2 className='font-bold text-2xl'>Eat-Pray-Love Restaurants</h2>
                            <p className='text-bold'>“To lose balance sometimes for love is part of living a balanced life.
                            </p>
                        </div>
                    </div>
                    <div className="carousel-item relative float-left w-full">
                        <img
                            src={banner4}
                            className="block w-full"
                            alt="..."
                        />
                        <div className="carousel-caption hidden md:block absolute text-center">
                            <h2 className='font-bold text-2xl'>Eat-Pray-Love Restaurants</h2>
                            <p className='text-bold'> “We don't realize that, somewhere within us all, there does exist a supreme self who is eternally at peace.”
                            </p>
                        </div>
                    </div>
                </div>
                <button
                    className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Banner;