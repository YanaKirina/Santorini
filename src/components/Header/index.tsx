'use client';

import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';


export default function Header() {
    return (
        <header className={styles.header}>
            <span>КОМФОРТНЫЙ ОТДЫХ В КРЫМУ</span>
            <img src="DELETE.jpg" alt="" />
        </header>
    )
}
