import Navbar from '../Pages/Navbar/Navbar'
import error from '../assets/images/404/download.png'
const Error = () => {
    return (
        <div>
            <Navbar />
            <img className='flex items-center justify-center w-full mx-auto h-[50vh]' src={error} alt="" />
        </div>
    )
}

export default Error