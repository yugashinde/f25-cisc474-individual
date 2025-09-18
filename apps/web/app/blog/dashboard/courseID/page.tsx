
import Link from 'next/link'
import styles from "./course.module.css";


export default function CourseID() {
   
    return (
    
      
      
      <main className={styles.page}>
        <h1 className = {styles.ModuleTitle}>MATH243</h1>
        <div className = {styles.roundedBorders}>   
        
            
            
            <div className = {styles.gradecomponent}>
            <Link href="/blog/dashboard/courseID/grades">Grades</Link>
            
            <Link href="/blog/dashboard/courseID/modules">Modules</Link> 
            
            <p >Assignments page linking not done yet</p> 
            
            <p >Announment page linking not done yet</p>
            </div>

            </div>
            </main>
            
            
            
    )}