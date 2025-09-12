
import Link from 'next/link'
import styles from "./dashboard.module.css";


export default function dashboard() {
   
    return (
        <main className={styles.page} >
            <h1 >dashboard</h1>
            
            
           <Link href="/blog/dashboard/courseID" > MATH243</Link>
            </main>
    )}


