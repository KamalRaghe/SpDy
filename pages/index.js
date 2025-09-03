import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className="border center" style={{padding:"0px",margin:"0px"}} >
      <img className="border center" style={{scale:"0.6",position:"relative",top:"-200px"}} src={'/Spdy.jpeg'} ></img>
    </div>
  );
}
