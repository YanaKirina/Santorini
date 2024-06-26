'use client';

import Link from 'next/link';
import Image from 'next/image';
import styles from './Enjoyed.module.css';


export default function Enjoy() {
    return (
        <section className={styles.section}>
            <h2>ВАМ ПОНРАВИТСЯ У НАС</h2>
            <div>
                <div className={styles.left}>
                    <div>
                        <span>01</span>
                        <span>ПАСТА БАР</span>
                        <Link href={"/"} className={styles.aaa}>ПОДРОБНЕЕ </Link>
                    </div>
                    <div>
                        <span>02</span>
                        <span>АРОМА-САД</span>
                        <Link href={"/"}>ПОДРОБНЕЕ</Link> </div>
                    <div>
                        <span>03</span>
                        <span>ПЛЯЖ</span>
                        <Link href={"/"}>ПОДРОБНЕЕ </Link>
                    </div>
                    <div>
                        <span>04</span>
                        <span>ТЕРРИТОРИЯ ОТЕЛЯ</span>
                        <Link href={"/"}>ПОДРОБНЕЕ</Link>
                    </div>
                    <div></div>
                </div>
                <img src="cocktail.png" alt="" />
            </div>
        </section>


    )
}