import Image, { type ImageProps } from "next/image";
import { Button } from "@repo/ui/button";
import styles from "./page.module.css";
import Link from 'next/link'

type Props = Omit<ImageProps, "src"> & {
    srcLight: string;
    srcDark: string;
};

const ThemeImage = (props: Props) => {
    const { srcLight, srcDark, ...rest } = props;

    return (
        <>
            <Image {...rest} src={srcLight} className="imgLight" />
            <Image {...rest} src={srcDark} className="imgDark" />
        </>
    );
};

export default function Home() {
    return (
        <div className={styles.page}>
            <div className = {styles.roundedBorders}> 
            <main className={styles.main}>
                <h1>Pending Sign In/Log In SET UP</h1>
                <Link href="/blog/dashboard">Dashboard</Link>
                <ol>
                    <li>
                        Get started by editing{" "}
                        <code>apps/web/app/page.tsx</code>
                    </li>
                    <li>Save and see your changes instantly.</li>
                </ol>

                <Button appName="web" className={styles.secondary}>
                    Open alert
                </Button>
            </main>
            <footer className={styles.footer}>
                <a
                    href="https://vercel.com/templates?search=turborepo&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        aria-hidden
                        src="/window.svg"
                        alt="Window icon"
                        width={16}
                        height={16}
                    />
                    Examples
                </a>
                <a
                    href="https://turborepo.com?utm_source=create-turbo"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        aria-hidden
                        src="/globe.svg"
                        alt="Globe icon"
                        width={16}
                        height={16}
                    />
                    Go to turborepo.com →
                </a>
            </footer>
            </div>
        </div>
    );
}
