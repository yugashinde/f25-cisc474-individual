
import Link from 'next/link'

import styles from "./grades.module.css";
export default function Grades() {
   
    return (
        <main className={styles.page}>

            <h1 className = {styles.ModuleTitle}>Grades</h1>
            <div className={styles.roundedBorders}>
            <table className ="gradesTable">
    <thead>
      <tr>
        <th>Assignment</th>
        <th>Due Date</th>
        <th>Score</th>
        <th>Feedback</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Homework 1</td>
        <td>Sept 1, 2025</td>
        <td>85%</td>
        <td>Good work!</td>
      </tr>
      <tr>
        <td>Quiz 1</td>
        <td>Sept 5, 2025</td>
        <td>90%</td>
        <td>Excellent</td>
      </tr>
      <tr>
        <td>Project 1</td>
        <td>Sept 10, 2025</td>
        <td>78%</td>
        <td>Needs more detail</td>
      </tr>
    </tbody>
  </table>
  </div>
            
            
            
            </main>
    )}