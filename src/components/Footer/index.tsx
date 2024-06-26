'use client';

import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';


export default function Footer() {
    return (
        <footer className={styles.footer}>

            <div className={styles.footer_top}>
                <div className={styles.top}>
                    <div className={styles.left}>
                        <div>
                            <img src="santorini.svg" className={styles.img}/>
                        </div>
                        <div>
                            <div className={styles.span}>
                                <img src="telephone.svg"/>
                                <a href="tel:89120388044">8(912) 038-80-44</a>
                            </div>
                            <span>298690, Россия, Крым, г. Ялта, пгт Форос, Форосский спуск, 1</span>
                        </div>
                    </div>
                    <div className={styles.right}>
                        <div>
                            <Link href={"/"}>НОМЕРА И ЦЕНЫ</Link>
                            <Link href={"/"}>ОБ ОТЕЛЕ</Link>
                            <Link href={"/"}>УСЛУГИ</Link>
                            <Link href={"/"}>УСЛОВИЯ ПРОЖИВАНИЯ</Link>
                            <Link href={"/"}>НОВОСТИ</Link>
                            <Link href={"/"}>КОНТАКТЫ</Link>
                            <Link href={"/"}>ФОТО ОТЕЛЯ</Link>
                            <Link href={"/"}>КАК ДОБРАТЬСЯ</Link>
                            <Link href={"/"}>ОТЗЫВЫ ГОСТЕЙ</Link>
                        </div>
                        <div>
                            <Link href={"/"}>ДОСТОПРИМЕЧАТЕЛЬНОСТИ</Link>
                            <Link href={"/"}>ПАСТА-БАР</Link>
                            <Link href={"/"}>АКТИВНЫЙ ОТДЫХ</Link>
                            <Link href={"/"}>ЭКСТРИМ</Link>
                            <Link href={"/"}>МОРСКИЕ ПРОГУЛКИ</Link>
                            <Link href={"/"}>РЫБАЛКА</Link>
                            <Link href={"/"}>СПЕЦПРЕДЛОЖЕНИЯ</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.footer_bottom}>
                <div>
                    <span>© 2022 Cанторини. Все права защищены.</span>
                    <div className={styles.social}>
                        <Link href={"/"}>
                            <img src="VK.svg" />
                        </Link>
                        <Link href={"/"}>
                            <img src="YouTube.svg" />
                        </Link>
                        <Link href={"/"}>
                            <img src="Yandex.svg" />
                        </Link>
                    </div>
                    <span className={styles.span}>Политика конфиденциальности</span>
                </div>

            </div>
        </footer>
    );
}