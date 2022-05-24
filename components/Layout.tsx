import Head from "next/head"
import styles from "./Layout.module.css"
import utilStyles from "../styles/utils.module.css"
import Link from "next/link"

const name = "Torichan";
export const siteTitle = "Torichan Blog"


export const Layout = ({children}) => {
    return (
        <div className = {styles.container}>
        <Head>
            <link rel="icon" href="favicon.icon" />
        </Head>
        <header className = {styles.header}>
        <img src="/images/Cat.png"
        className ={`${utilStyles.borderCircle} ${styles.headerHomeImage}`}/>
        <h1 className={utilStyles.heading2X1}>{name}</h1>
        </header>
        <main>{children}</main>
            <div>
                <Link href="/">ホームへ</Link>
            </div>
        </div>
    )
};