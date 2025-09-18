
import Link from 'next/link'
import styles from './assignment.module.css'

export default function Assignment() {
   
    return (
        <main className = {styles.page}>
            <h1 className = {styles.ModuleTitle} >Assignment 1</h1>
            <div className={styles.roundedBorders}>
        <p>
          You must fill out this spreadsheet with at least your name by Friday at 11:59pm:
        </p>
        <p>
          <a
            href="https://docs.google.com/spreadsheets/d/1GNSNiIGfSdqGnIvBoqy5scciwosHDKMHrdErX-0uDBc/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Spreadsheet (name submission)
          </a>
        </p>

        <p>
          Then you need to fill out the other fields and upload your video before class:
        </p>
        <p>
          <a
            href="https://drive.google.com/drive/folders/1IdYcbum1L-BeVEzQfwawQby2vtYuBvFV?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Drive Folder (video upload)
          </a>
        </p>

        <p>
          When you've at least submitted your name, submit to this assignment with your project's name.
        </p>

        <p>The other required fields are:</p>
        <ul>
          <li>Your name</li>
          <li>Your project’s proposed name</li>
          <li>One sentence blurb describing the project (no more than 128 characters)</li>
          <li>
            Link to a one-minute video version of your pitch
          </li>
          <li>
            Link to a slide or supporting doc that also has your pitch
          </li>
          <li>
            Make sure you make the files accessible to everyone properly
          </li>
        </ul>
      </div>
            
            
            
            </main>
    )}