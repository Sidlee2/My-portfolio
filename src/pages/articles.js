import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React, { useRef } from 'react'
import article1 from '../../public/images/articles/web-developer.jpeg'
import article2 from '../../public/images/articles/problem-solving.jpeg'
import article3 from '../../public/images/articles/music-piano.jpeg'
import article4 from '../../public/images/articles/playing-chess.jpeg'
import article5 from '../../public/images/articles/badminton.jpg'
import article6 from '../../public/images/articles/cricket.jpeg'
import article7 from '../../public/images/articles/lawn-tennis.jpg'
import article8 from '../../public/images/articles/football.jpg'
import article9 from '../../public/images/articles/athletics.jpg'
import article10 from '../../public/images/articles/movies.webp'




import { motion, useMotionValue } from 'framer-motion'
import TransitionEffect from '@/components/TransitionEffect'

const FramerImage = motion(Image);

const MovingImg = ({ title, img, link }) => {

    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const imgRef = useRef(null);

    function handleMouse(event){
        imgRef.current.style.display = "inline-block";
        x.set(event.pageX);
        y.set(-10);
    }

    function handleMouseLeave(event){
        imgRef.current.style.display = "none";
        x.set(0);
        y.set(0);
    }

    return (
        <Link href={link} target="_blank"
        onMouseMove={handleMouse}
        onMouseLeave={handleMouseLeave}
        >
            <h2 className='capitalize text-xl font-semibold hover:underline'>{title}</h2>
            <FramerImage style={{x:x, y:y}} 
            initial={{opacity:0}}
            whileInView={{opacity:1, transition:{duration:0.2}}}
            ref={imgRef} src={img} alt={title} className='z-10 w-96 h-auto hidden absolute rounded-lg md:!hidden' />
        </Link>
    )
}

const Article = ({ img, title, date, link }) => {
    return (
        <motion.li 
        initial={{y:200}}
        whileInView={{y:0, transition:{duration:0.5, ease:"easeInOut"}}}
        viewport={{once: true}}
        className='relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4 dark:border-light dark:bg-dark dark:text-light sm:flex-col'>
            <MovingImg title={title} img={img} link={link} />
            <span className='text-primary font-semibold pl-4 dark:text-primaryDark sm:self-start sm:pl-0 xs:text-sm'>{date}</span>
        </motion.li>
    )
}


const FeaturedArticle = ({ img, title, time, summary, link }) => {
    return (
        <li className='relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl dark:bg-dark dark:border-light'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl' />
            <Link href={link} target="_blank" className='w-full inline-block cursor-pointer overflow-hidden rounded-lg'>
                <FramerImage src={img} alt={title} className='w-full h-auto'
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </Link>
            <Link href={link} target='_blank'>
                <h2 className='capitalize text-2xl font-bold my-2 mt-4 hover:underline xs:text-lg'>{title}</h2>
            </Link>
            <p className='text-sm mb-2'>{summary}</p>
            <span className='text-primary font-semibold dark:text-primaryDark'></span>
        </li>
    )
}

const articles = () => {
    return (
        <>
            <Head>
                <title>Siddharth   |   Articles Page</title>
                <meta name="description" content="any description" />
            </Head>
            <TransitionEffect />
            <main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light'>
                <Layout className='pt-16'>
                    <AnimatedText text="Hobbies spark passion and creativity" className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl' />
                    <ul className='grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16'>
                        <FeaturedArticle
                            title="Web Developer by Passion: Transforming Concepts into Dynamic Web Experiences"
                            summary="As a web developer, I am passionate about turning creative ideas into functional, user-friendly websites. With a keen eye for design and a solid understanding of front-end and back-end technologies, I craft seamless digital experiences that are both visually appealing and highly interactive. Continuously learning and experimenting with new frameworks and tools, I strive to stay ahead in the ever-evolving world of web development."
                            time="9 min read"
                            link="/"
                            img={article1}
                        />
                        <FeaturedArticle
                            title="Problem-Solving Enthusiast: Mastering Algorithms and Coding Challenges"
                            summary="Problem-solving through coding is a passion I pursue daily on platforms like LeetCode. I thrive on tackling complex challenges, enhancing my understanding of algorithms, and refining my problem-solving skills. Each problem I solve not only strengthens my technical abilities but also fuels my love for coding, helping me stay sharp and continuously improve as a developer."
                            time="9 min read"
                            link="/"
                            img={article2}
                        />
                    </ul>
                    <h2 className='font-bold text-4xl w-full text-center my-16 mt-32'>Other Hobbies</h2>
                    <ul>
                        <Article
                            title="Music Enthusiast: Composing Harmony and Expressing Creativity"
                            date="2011-present"
                            link="/"
                            img={article3}
                        />
                        <Article
                            title="Chess Aficionado: Strategizing Moves and Mastering the Game"
                            date="2010-present"
                            link="/"
                            img={article4}
                        />
                        <Article
                            title="Badminton Enthusiast: Sharpening Reflexes and Elevating My Game"
                            date="2012-present"
                            link="/"
                            img={article5}
                        />
                        <Article
                            title="Cricket Passionate: Mastering the Game with Strategy and Skill"
                            date="2011-present"
                            link="/"
                            img={article6}
                        />
                        <Article
                            title="Lawn Tennis Enthusiast: Relishing the Excitement and Mastery of the Sport"
                            date="2021-present"
                            link="/"
                            img={article7}
                        />
                        <Article
                            title="Football Fanatic: Immersed in the Passion, Strategy, and Thrills of the Game"
                            date="2014-present"
                            link="/"
                            img={article8}
                        />
                        <Article
                            title="Athletics Aficionado: Embracing Speed, Strength, and the Pursuit of Excellence"
                            date="2016-present"
                            link="/"
                            img={article9}
                        />

                        <Article
                            title="Movie Buff: Immersed in Storytelling and the Art of Filmmaking"
                            date="2007-present"
                            link="/"
                            img={article10}
                        />

                    </ul>
                </Layout>
            </main>
        </>
    )
}

export default articles
