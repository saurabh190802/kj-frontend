import styles from '@/styles/Navbar.module.css';
import Link from 'next/link';
import { useState  } from 'react';
import { useRouter } from 'next/router';

export default function Navbar(){

    const [links,setLinks] = useState([
        ['Home','/'], // true tells that the current link is active
        ['About','/about'],
        ['Report Issue','/issue'],
    ])

    const { pathname } = useRouter();


    return (
        <div className={styles.navbar}>
            <div className={styles.left_nav}>
                <Link href="">Khajana Darshan</Link>
            </div>
            <div className={styles.right_nav}>
                {links.map((link,idx) => {
                    return (
                        pathname !== link[1] ? (
                            <Link href={link[1]} key={idx}>
                                {link[0]}
                            </Link>
                        ) : (<a key={idx} className={styles.active}>{link[0]}</a>)
                    )
                })}
            </div>
        </div>
    )
}