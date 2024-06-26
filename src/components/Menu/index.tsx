'use client';

import Link from 'next/link';
import Image from 'next/image';
import styles from './Menu.module.css';


export default function Menu() {
    return (
        <nav className={styles.nav}>
                <button className={styles.menu}>
                    <div>
                        <div className={styles.line}></div>
                        <div className={styles.line}></div>
                    </div>
                    <img src="santorini.svg"/>
                </button>
                <div className={styles.logo}>
                    <img src="logo.svg" alt="" />
                </div>
                <button className={styles.button}>
                    <span className={styles.span}>ЗАБРОНИРОВАТЬ</span>
                    <Image
                        src="Header.svg"
                        alt=""
                        width={19}
                        height={19}
                    />
                </button>
        </nav>
    );
}