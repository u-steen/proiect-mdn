// o pagina in caz de url nu exista
import {Link} from 'react-router-dom';

export default function NotFoundPage() {
    return (
        <div className='bg-black min-h-screen'>
            <div className='text-center text-2xl text-white'>
                404 Not Found
            </div>
            <div className='text-center text-xl'>
                    <Link to="/" className="text-blue-500 hover:underline">Go to Homepage</Link>
            </div>
        </div>
    );
}