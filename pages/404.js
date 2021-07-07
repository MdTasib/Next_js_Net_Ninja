import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const NotFound = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        }, 3000);
    }, [router]);
    return (
        <div className='not-found'>
            <h2>Oooopssss.</h2>
            <h3>This page could not be found.</h3>
            <p>Go To <Link href='/'><a>Home</a></Link></p>
        </div>
    );
};

export default NotFound;