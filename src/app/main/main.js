import styles from "./main.module.css";
import Image from "next/image";

export default function Main() {
    return (
        <main id="main" className={styles.main}>

            <section className={styles.title}>

                <div className={styles.logoImg}>
                    <Image
                        src={"/images/Cat_Transparent.png"}
                        unoptimized={true}
                        fill
                        alt="BLACK & CREAM"
                        sizes="width: 100%"
                        style={{ objectFit: "fill"}}
                    />
                </div>
                <div className={styles.titleText}>
                    <h1>블랙앤크림커피바</h1>
                    <p>직원 홈페이지에 오신 것을 환영합니다 :)</p>
                </div>

            </section>

        </main>
    )
}