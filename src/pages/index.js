import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../app/page.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>CRUD Example with NextJs and Express Js</h1>
      <p><Link href="/users">&gt;&gt; Manage Users</Link></p>
    </main>
  );
}
