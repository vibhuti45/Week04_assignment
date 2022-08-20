import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/alok_potrait.png" alt="site logo" width={100} height={150} />
      </div>
     
      <Link href="/"><a>Home</a></Link>
      <Link href="/sports"><a>Sports</a></Link>
      <Link href="/tech"><a>Tech</a></Link>
      <Link href="/ninjas/"><a>Music</a></Link>
    </nav>
  );
}
 
export default Navbar;