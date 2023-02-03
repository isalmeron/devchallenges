import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.scss";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>IISP - Home</title>
        <meta
          name="description"
          content="Irving Salmeron devchallenges site for frontend path"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div>This site serves for my dev challenges on the FrontEnd path</div>
        <div>
          <ul>
            <li>
              <Link href="/buttons">Buttons challenge</Link>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
}
