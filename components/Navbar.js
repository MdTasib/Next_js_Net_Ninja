import Link from 'next/link';

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <h3>Tasib Exclusive</h3>
            </div>
            <Link href='/'>Home</Link><br />
            <Link href='/about'>About</Link><br />
            <Link href='/ninja'>Ninja</Link>
        </nav>
    );
};

export default Navbar;