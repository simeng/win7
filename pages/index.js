import { useState } from "react"
import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.css"

export default function Home() {
    const [showPopup, setShowPopup] = useState(false)
    return (
        <div className={styles.container}>
            <Head>
                <title>Windows 7</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="background" style={{ width: "300px" }}>
                <div className="window glass">
                    <div className="title-bar">
                        <div className="title-bar-text">
                            Welcome to Windows 7
                        </div>
                        <div className="title-bar-controls">
                            <button aria-label="Close"></button>
                        </div>
                    </div>
                    <div className="window-body">
                        <button onClick={() => setShowPopup(!showPopup)}>
                            Yeah
                        </button>
                    </div>
                </div>
                {showPopup && (
                    <div
                        className="window is-bright"
                        role="dialog"
                        aria-labelledby="dialog-title"
                    >
                        <div className="title-bar">
                            <div className="title-bar-text" id="dialog-title">
                                Yeah boi
                            </div>
                            <div className="title-bar-controls">
                                <button
                                    aria-label="Close"
                                    onClick={() => setShowPopup(false)}
                                ></button>
                            </div>
                        </div>
                        <div className="window-body">
                            <h4 className="instruction instruction-primary">
                                Something failed
                            </h4>
                            <div role="progressbar" className="marquee"></div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
