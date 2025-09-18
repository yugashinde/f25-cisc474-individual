
import Link from 'next/link'

import styles from './modules.module.css'
export default function Modules() {
   
    return (
        <main className = {styles.page}>
            <h1 className = {styles.ModuleTitle}> Modules </h1>
            <div className = {styles.roundedBorders}> 
            <table className={styles.modulesTable}>
          <thead>
            <tr>
              <th>Title</th>
              <th>Type</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Assignment 1</td>
              <td>Assignment</td>
              <td>
              <Link href="/blog/dashboard/courseID/modules/assignment1">Assignment 1</Link> 
            </td>
            </tr>
            <tr>
              <td>Week 1 Slides</td>
              <td>PPT</td>
              <td>
                <Link href="/blog/dashboard/courseID/modules/week1-ppt">
                  View
                </Link>
              </td>
            </tr>
            <tr>
              <td>Survey 1</td>
              <td>Survey</td>
              <td>
                <Link href="/blog/dashboard/courseID/modules/survey1">
                  Take Survey
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
            
            
            </div>
            
            </main>
    )}