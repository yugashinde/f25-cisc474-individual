
import Link from 'next/link'
import styles from "./dashboard.module.css";


export default function dashboard() {
   
    return (
        <main className={styles.page} >
            <h1 className = {styles.dashboardTitle}> DASHBOARD </h1>
            <div className = {styles.roundedBorders}> 
            

            <div className={styles.modulecomponent}> 
            
                <Link href="/blog/dashboard/courseID" > MATH243 - Calculus 3 </Link> 
                
                </div>
                <div className={styles.modulecomponent}> 
            
                <p> CISC272 - Parallel Programming </p>
                
                </div>
                <div className={styles.modulecomponent}> 
            
                <p> CISC484 - Introduction to Machine Learning </p>
                
                </div>



                
                
            </div>
            </main>
    )

}
