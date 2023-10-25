import slider1 from '../../assets/images/banner/1.jpg'
import slider2 from '../../assets/images/banner/2.jpg'
import slider3 from '../../assets/images/banner/3.jpg'
import slider4 from '../../assets/images/banner/4.jpg'
const Banner = () => {
    return (
        <div className="carousel w-full h-[600px]">
            <div id="slide1" className="carousel-item rounded-lg relative w-full">
                <img src={slider1} className="w-full " />
                {/* <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"> */}
                {/* <div className="absolute flex gap-5 transform -translate-y-1/2 left-50 right-20 bottom-10"> */}
                {/* <div className="absolute flex h-full bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] text-white transform -translate-y-1/2 left-5 right-5 bottom-6"> */}
                <div className="absolute flex items-center rounded-lg h-full bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] text-white bottom-0">
                    <div className='space-y-7  pl-12'>
                        <h2 className='text-6xl font-bold'>Affordable <br /> Price For Car <br /> Servicing.</h2>
                        <p>There are many variations of passages of<br /> available. But The majority have suffered<br /> alternation in some form.</p>
                        <div className='flex flex-col md:flex-row gap-2'>
                            <button className='btn btn-outline btn-primary mr-5'>Discover more</button>
                            <button className='btn btn-outline btn-secondary'>Latest project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex gap-5 justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle text-black hover:bg-orange-600 hover:text-white">❮</a>
                    <a href="#slide2" className="btn btn-circle text-black hover:bg-orange-600 hover:text-white">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={slider2} className="w-full" />
                {/*  */}
                <div className="absolute flex items-center h-full bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] text-white bottom-0">
                    <div className='space-y-7  pl-12'>
                        <h2 className='text-6xl font-bold'>Affordable <br /> Price For Car <br /> Servicing.</h2>
                        <p>There are many variations of passages of<br /> available. But The majority have suffered<br /> alternation in some form.</p>
                        <div className='flex flex-col md:flex-row gap-2'>
                            <button className='btn btn-outline btn-primary mr-5'>Discover more</button>
                            <button className='btn btn-outline btn-secondary'>Latest project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex gap-5 transform -translate-y-1/2 left-50 right-20 bottom-10">
                    <a href="#slide1" className="btn btn-circle text-black hover:bg-orange-600 hover:text-white">❮</a>
                    <a href="#slide3" className="btn btn-circle text-black hover:bg-orange-600 hover:text-white">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={slider3} className="w-full" />
                {/*  */}
                <div className="absolute flex items-center h-full bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] text-white bottom-0">
                    <div className='space-y-7  pl-12'>
                        <h2 className='text-6xl font-bold'>Affordable <br /> Price For Car <br /> Servicing.</h2>
                        <p>There are many variations of passages of<br /> available. But The majority have suffered<br /> alternation in some form.</p>
                        <div className='flex flex-col md:flex-row gap-2'>
                            <button className='btn btn-outline btn-primary mr-5'>Discover more</button>
                            <button className='btn btn-outline btn-secondary'>Latest project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex gap-5 transform -translate-y-1/2 left-50 right-20 bottom-10">
                    <a href="#slide2" className="btn btn-circle text-black hover:bg-orange-600 hover:text-white">❮</a>
                    <a href="#slide4" className="btn btn-circle text-black hover:bg-orange-600 hover:text-white">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={slider4} className="w-full" />
                {/*  */}
                <div className="absolute flex items-center h-full bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] text-white bottom-0">
                    <div className='space-y-7  pl-12'>
                        <h2 className='text-6xl font-bold'>Affordable <br /> Price For  Car <br /> Servicing.</h2>
                        <p>There are many variations of passages of<br /> available. But The majority have suffered<br /> alternation in some form.</p>
                        <div className='flex flex-col md:flex-row gap-2'>
                            <button className='btn btn-outline btn-primary mr-5'>Discover more</button>
                            <button className='btn btn-outline btn-secondary'>Latest project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex gap-5 transform -translate-y-1/2 left-50 right-20 bottom-10">
                    <a href="#slide3" className="btn btn-circle text-black hover:bg-orange-600 hover:text-white">❮</a>
                    <a href="#slide1" className="btn btn-circle text-black hover:bg-orange-600 hover:text-white">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;