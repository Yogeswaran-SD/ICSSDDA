import React from 'react'
import { Link } from 'react-router-dom'




export default function Header() {
    return (
        <>
            {/* <div className=' absolute'>
                <div className='fixed top-0 right-0 left-0 z-10 '>
                    <div className='flex '>
                        <div className=' relative z-5 w-full' style={{ clipPath: 'polygon(0% 0, 100% 0, 90% 100%, 0 100%)' }}>
                            <div className='bg-[#B2C7F6] w-full '
                            >
                                <div className=' text-[#093FB4] text-4xl font-bold py-5 px-20'>ICSSDDA</div>
                            </div>
                        </div>

                        <div className='bg-[#093FB4] w-full py-5 space-x-20 text-[#F5F5F5] flex justify-end '>
                            <Link>Home</Link>
                            <Link>AboutUs</Link>
                            <Link>Author's Desk</Link>
                            <Link>Contact Us</Link>
                        </div>
                    </div>
                </div>
            </div> */}

            <div>
                <div className='bg-[#093FB4] grid grid-cols-2 text-2xl h-20' >
                    <div className='bg-[#B2C7F6] text-3xl font-bold' style={{ clipPath: 'polygon(0% 0, 100% 0, 95% 100%, 0 100%)' }} >
                        <h1 className='text-[#093FB4] pt-5 mx-5' >ICSSDDA</h1>
                    </div>
                    <div className="hidden lg:block ">
                        <div className='flex justify-center items-center gap-10 '>
                            <Link className='text-[#F5F5F5]'><p className="">Home</p></Link>
                            <Link className='text-[#F5F5F5]'><p className="">AboutUs</p></Link>
                            <Link className='text-[#F5F5F5]'><p className="">Author's Desk</p></Link>
                            <Link className='text-[#F5F5F5]'><p className="">Contact Us</p></Link>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}
