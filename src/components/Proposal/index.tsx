'use client';

import Link from 'next/link';
import Image from 'next/image';
import styles from './Proposal.module.css';

export default function Proposal() {
    return (
        <div className={styles.proposal}>
            <div className={styles.title}>
                <img src="special-left.svg" />
                <span>НАШИ <br /> СПЕЦПРЕДЛОЖЕНИЯ</span>
                <img src="special-right.svg" />
            </div>
            <div>
                <div className={styles.container}>
                    <div className={styles.back}/>
                    <div className={styles.content}>
                        <span>12/06.22</span>
                        <h3>СКИДКА НА ПРОЖИВАНИЕ 10% ОТ 5 СУТОК</h3>
                        <p>Аренда номера Делюкс на 4 человек с видом на море и собвенной терассой. Коктейли в подарок единоразово при размещении.</p>
                        <Link href={"/"}>
                            ПОДРОБНЕЕ
                        </Link>
                    </div>
                </div>
                <div className={styles.container}>
                <div className={styles.back}/>
                    <div className={styles.content}>
                        <span>12/06.22</span>
                        <h3>КОМПЛИМЕНТ МОЛОДОЖЁНАМ И 1-СУТКИ В ПОДАРО</h3>
                        <p>Аренда номера Делюкс на 4 человек с видом на море и собвенной терассой. Коктейли в подарок единоразово при размещении.</p>
                        <Link href={"/"}>
                            ПОДРОБНЕЕ
                        </Link>
                    </div>
                </div>
                <div className={styles.container}>
                <div className={styles.back}/>
                    <div className={styles.content}>
                        <span>12/06.22</span>
                        <h3>СКИДКА НА ПРОЖИВАНИЕ 10% ОТ 5 СУТОК</h3>
                        <p>Аренда номера Делюкс на 4 человек с видом на море и собвенной терассой. Коктейли в подарок единоразово при размещении.</p>
                        <Link href={"/"}>
                            ПОДРОБНЕЕ
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}