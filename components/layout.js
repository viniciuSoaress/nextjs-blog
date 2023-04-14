import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';


const name = 'Vinicius Soares'
export const siteTitle = 'Next.js Sample Website'

export default function Layout({ children, home }) {
    return (
        <div className={styles.conteiner}>
            <Head>
                <link rel='icon' href='/favicon.ico' />
                <meta
                    name='description'
                    content='learn how to build a personal websit using Next.js'
                />
                {/* <meta
                    property='og:image'
                    content={`https://og-image.vercel.app/${encodeURL(siteTitle),}.png?theme=light=&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesing%2Fnextjs-black-logo.svg`}
                /> */}
                <meta name='og:title' content={siteTitle} />
                <meta name='twier:card' content='summary_large_image' />
            </Head>
            <header className={styles.header}>
                {home ? (
                    <>
                        <Image
                            priority
                            src='/images/profile.jpg'
                            className={utilStyles.borderCircle}
                            height={144}
                            width={144}
                            alt='foto de perfil'
                        />
                        <h1 className={utilStyles.heading2xl}>{name}</h1>
                    </>
                ) : (
                    <>
                        <Link href='/'>
                            <Image
                                priority
                                src='/images/profile.jpg'
                                className={utilStyles.borderCircle}
                                width={108}
                                height={108}
                                alt='foto de perfil'

                            />
                        </Link>
                        <h2 className={utilStyles.headinglg}>
                            <Link href='/'>
                                {name}
                            </Link>
                        </h2>
                    </>
                )}
            </header>
            <main>{children}</main>
            {!home && (
                <div className={styles.backToHome}>
                    <Link href='/'>Back to home</Link>
                </div>
            )}
        </div>
    )
}