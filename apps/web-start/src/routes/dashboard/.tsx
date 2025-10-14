import { Outlet } from '@tanstack/react-router'
import { Link } from '@tanstack/react-router';
import styles from './dashboard.module.css'


export default function DashBoardPage() {

    const courses = [
        { id: 'MATH243', name: 'Calculus 3' },
        { id: 'CISC272', name: 'Parallel Programming' },
        { id: 'CISC484', name: 'Intro to ML' },
    ];
    return (
        <div> <h1 className={styles.dashboardTitle}> DASHBOARD </h1>
            <div className={styles.roundedBorders}>
                
      <Outlet /> {}
            </div>

        </div>

    )
}