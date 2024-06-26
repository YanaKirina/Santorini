'use client';

import Link from 'next/link';
import Image from 'next/image';
import styles from './Rest.module.css';

export default function Rest() {
    return (
        <div className={styles.rest}>
            <h2>АКТИВНЫЙ ОТДЫХ В ОТЕЛЕ <br/> САНТОРИНИ</h2>
            <div>
                <button>МОРСКИЕ ПРОГУЛКИ</button>
                <button>РЫБАЛКА</button>
                <button>ЭКСТРИМ</button>
            </div>
            <div className={styles.container}>
                <div className={styles.top}>
                    <img src="windsurfing.png"/>
                    <img src="kitesurfing.png"/>
                </div>
                <div className={styles.bottom}>
                    <img src="enduro.png"/>
                    <img src="safari.png"/>
                </div>
                
            </div>
        </div>
    )
}