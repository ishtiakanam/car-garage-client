import parts from '../../assets/images/about_us/parts.jpg'
import person from '../../assets/images/about_us/person.jpg'
const About = () => {
    return (
        // <div className="hero min-h-screen bg-base-200 mt-10">
        <div className="hero  bg-base-200 mt-10">
            <div className="hero-content flex-col lg:flex-row">
                <div className='lg:w-1/2 relative'>
                    <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
                    {/* <img src={parts} className="max-w-sm rounded-lg shadow-2xl relative bottom-10 left-10" /> */}
                    {/* <img src={parts} className="max-w-sm rounded-lg shadow-2xl absolute top-[880px] left-[300px]" /> */}
                    <img src={parts} className="w-1/2 rounded-lg shadow-2xl absolute right-5 top-1/2 border-8 border-white" />
                </div>
                <div className='lg:w-1/2 space-y-5'>
                    <h3 className='text-3xl text-orange-600 font-bold'>About Us</h3>
                    <h1 className="text-5xl font-bold">We are qualified & of experience in this field.</h1>
                    <p className="py-6">There are many variations of passages of lorem ipsum available.But the the majority have suffered alternation in some from,by injected homurs.Or randomised words which dont look even slightly believable.
                        <br />
                        <p>  The majority have suffered alternation in some from,by injected homurs.Or randomised words which dont look even slightly believable.</p>
                    </p>
                    <button className="btn btn-outline text-white bg-orange-600">Get more info</button>
                </div>
            </div>
        </div>
    );
};

export default About;