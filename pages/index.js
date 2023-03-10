import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '@/component/navbar/navbar'
import Footer from '@/component/footer/footer'
const inter = Inter({ subsets: ['latin'] })
export default function Home() {

  const articles = [
    {
      name: "Chaussure",
      Link:"./sneakers.jpg"
    },
    {
      name: "Vêtements",
      Link:"./sneakers.jpg"
    },
    {
      name: "bijoux",
      Link:"./sneakers.jpg"
    },
    {
      name: "bijoux",
      Link:"./sneakers.jpg"
    }
  ];
  const Article = ({name, Link }) => (
    <div className={styles.article}>
      <p>{name}</p>
      <div>
        <img src={Link}/>
      </div>
    </div>
  );
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
          <Navbar/>
          <div className={styles.sectionOne}>
            <div>
              <h2>Sélectionner votre catégorie</h2>              
                <div className={styles.articleList}>
                  {articles.map(article => (
                    <Article
                      key={article.id}
                      name={article.name}
                      Link={article.Link}
                    />
                  ))}
                </div>
            </div>
          </div>
      </main>
      <Footer/>
    </>
  )
}