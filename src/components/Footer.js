import React from 'react'
import Link from 'next/link'
import Layout from './Layout'

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light sm:text-base'>
        <Layout className='py-8 flex items-center justify-between lg-flex-col lg:py-6'>
            <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
            <div className='flex items-center lg:py-2'>
            Build by <span className='text-primary dark:text-primaryDark text-2xl px-1'>&#9825;</span><Link href="/" className='underline underline-offset-2' target={"_blank"}>Siddharth</Link>
            </div>
            <Link href="/" target={"_blank"} className='underline underline-offset-2'>Say hello</Link>
        </Layout>
    </footer>
  )
}

export default Footer
