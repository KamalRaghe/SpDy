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
    <div className="center" style={{scale:"0.4",height:'100%'}} >
      <img className="opening center-abs" style={{position:"absolute",top: '90px'}} src={'/Spdy.jpeg'} ></img>
    </div>

  );
}
