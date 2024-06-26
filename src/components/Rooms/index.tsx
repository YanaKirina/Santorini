'use client';

import Link from 'next/link';
import Image from 'next/image';
import styles from './Rooms.module.css';

export default function Rooms() {
    return (
        <div>
            <div className={styles.container}>
                <img src="circle-left.svg" alt="" />
                <div>
                    <span>НОМЕРА</span>
                    <span>Выбери свой номер</span>
                </div>
                <img src="circle-right.svg" alt="" />
            </div>
            <div className={styles.carousel}>
                <div>
                    <img src="luxury.png" />
                </div>
                <div>
                    <img src="standart.png" />
                </div>
                <div>
                    <img src="deluxe.png" />
                </div>
            </div>
        <div>

            </div>
            
        </div>
    )
}