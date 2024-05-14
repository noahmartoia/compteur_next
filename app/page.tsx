"use client";

import Head from "next/head";
import Image from "next/image";
import Script from 'next/script';
import { Inter } from "next/font/google";
import styles from "../styles/Home.module.css";
import name from "../composants/composants1";
import counter from "../composants/composants2";

const inter = Inter({ subsets: ["latin"] });
let compteur = 0
const p=document.querySelector('#p')
export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <div className={styles.description}>
          <div className={styles.margin}>
           {counter()}
          </div>
          <script src="../src/app.js"></script>
        </div>
    </>
  );
}