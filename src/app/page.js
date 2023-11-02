// 'use client'
import Image from 'next/image'
import A1A from "../../public/A1-A.webp";
import AddedMedia from "../../public/Added Media-1.svg";
// import Experience from "../../public/Experience.png";
import { IoIosArrowForward } from 'react-icons/io';
// import Link from 'next/link';
import 'animate.css';
import Link from 'next/link';
import CarouselWithRightCaption from './Carousel';

export default function Home() {

  return (
    <>
      {/* REINVENT WHAT YOUR */}
      <div className='bg-black'>
        <div className='text-white text-center py-5'>
          <h1 className='lg:text-8xl md:text-6xl sm:text-4xl font-black flex justify-start'>REINVENT WHAT YOUR</h1>
          <h1 className='lg:text-8xl md:text-6xl sm:text-4xl font-black flex justify-end'>BUSINESS COULD BE</h1>
          <div className='sm:text-3xl font-medium flex justify-center pt-5 items-center gap-5'>
            <p>Let there be change</p>
            <div className='bg-[#A100FF]'>
              <IoIosArrowForward size={20} />
            </div>
          </div>
        </div>
      </div>

      {/* 360 */}
      <div className='bg-black py-16 text-white text-center'>
        <div className='md:w-2/4 w-11/12 mx-auto'>
          <p className='lg:text-8xl md:text-6xl text-4xl font-bold'>360<sup>&#9675;</sup> Value</p>
          <p className='lg:text-4xl md:text-2xl text-lg'>Every day, we embrace change and create value for all our stakeholders, in every part of the world.</p>
        </div>
      </div>

      {/* carousel */}
      <CarouselWithRightCaption />

      {/* Global recognition and awards */}
      <div className='bg-black '>
        <div className='w-[87%] mx-auto pt-[25%]'>
          <p className='text-white lg:text-8xl md:text-6xl sm:text-4xl text-center sticky top-[35%]'>Global recognition and awards</p>
          <div className='text-white z-10 relative'>
            <div className='py-[45%]'>
              <div>
                <div className="hover-effect-container1 md:w-[47%] relative">
                  <figure className="hover-effect-figure">
                    <h2 className='absolute -bottom-[80%] p-3 text'>We&apos;re one of Fortune&apos;s World&apos;s Most Admired Companies</h2>
                    <figcaption className='bg-[#460073]'>
                      <div className="hover-effect-content p-5">
                        <p>We are celebrating our 21st consecutive year on the list and 10th consecutive year as No. 1 in IT Services.</p>
                        <Link href="/" className='flex items-center self-end me-5'>Expand <IoIosArrowForward size={20} /></Link>
                      </div>
                    </figcaption>
                  </figure>
                </div>
                <div className='my-20 ms-auto md:flex justify-end h-[340px]'>
                  <div className="hover-effect-container2 md:w-[47%]">
                    <figure className="hover-effect-figure">
                      <h2 className='absolute -bottom-[80%] p-3 text'>We&apos;re one of Fortune&apos;s World&apos;s Most Admired Companies</h2>
                      <figcaption className='bg-[#E2062E]'>
                        <div className="hover-effect-content p-5">
                          <p>We are celebrating our 21st consecutive year on the list and 10th consecutive year as No. 1 in IT Services.</p>
                          <Link href="/" className='flex items-center self-end me-5'>Expand <IoIosArrowForward size={20} /></Link>
                        </div>
                      </figcaption>
                    </figure>
                  </div>
                </div>
                <div className='md:flex justify-center h-[340px]'>
                  <div className="hover-effect-container3 md:w-[47%]">
                    <figure className="hover-effect-figure">
                      <h2 className='absolute -bottom-[80%] p-3 text'>We&apos;re one of Fortune&apos;s World&apos;s Most Admired Companies</h2>
                      <figcaption className='bg-[#0041F0]'>
                        <div className="hover-effect-content p-5">
                          <p>We are celebrating our 21st consecutive year on the list and 10th consecutive year as No. 1 in IT Services.</p>
                          <Link href="/" className='flex items-center self-end me-5'>Expand <IoIosArrowForward size={20} /></Link>
                        </div>
                      </figcaption>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className='bg-black '>
        <div className='w-[87%] mx-auto pt-[25%]'>
          <p className='text-white lg:text-8xl md:text-6xl sm:text-4xl text-center sticky top-[35%]'>Global recognition and awards</p>
          <div className='text-white z-10 relative'>
            <div className='py-[45%]'>
              <div>
                <div onMouseEnter={onEnter1} className='bg-[#460073] relative sm:w-[47%] h-[340px]'>
                  <div  className={`${hover1} `}>
                    <div className='flex  flex-col justify-end h-full'>
                    <h3 className='sm:text-2xl p-5 absolut bottom- text-left'>We&apos;re one of Fortune&apos;s World&apos;s Most Admired Companies</h3>
                    </div>
                    <h3 className='sm:text-2xl p-5 absolut bottom- self-start'>We are celebrating our 21st consecutive year on the list and 10th consecutive year as No. 1 in IT Services.</h3>
                  </div>
                </div>
                <div className='bg-[#E2062E] my-20 ms-auto sm:me-[14%] relative sm:w-[47%] h-[340px]'>
                  <div>
                    <h3 className='sm:text-2xl p-5 absolute bottom-0'>We&apos;re one of Fortune&apos;s World&apos;s Most Admired Companies</h3>
                  </div>
                </div>
                <div className='bg-[#0041F0] sm:ms-[19%] relative sm:w-[47%] h-[340px]'>
                  <div>
                    <h3 className='sm:text-2xl p-5 absolute bottom-0'>We&apos;re one of Fortune&apos;s World&apos;s Most Admired Companies</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* OUR CULTURE */}
      <div className='bg-black pt-[20%]'>
        {/* <div className='grid grid-cols-2'> */}
        <div className='sm:flex justify-between'>
          <div>
            <Image src={A1A} className='w-[90%] h-auto' alt='A1A' />
            <Image src={AddedMedia} className='w-[90%] h-auto' alt='AddedMedia' />
          </div>
          <div className='text-white sm:mt-[184px] ps-5 sm:ps-0 pb-6 me-20 sm:w-[350px]'>
            <p className='font-medium text-[0.875rem]'>OUR CULTURE</p>
            <p className='lg:text-2xl my-6'>We combine technology with human ingenuity to solve some of the world&apos;s biggest challenges. When you work with us, the possibilities are endless.</p>
            <div className='text-base font-medium flex items-center gap-3'>
              <p>Join us</p><div className='bg-[#A100FF] w-5'><IoIosArrowForward size={20} /></div>
            </div>
          </div>
        </div>
      </div>
      {/* Let there be change */}
      <div className='bg-black'>
        <div className='w-[87%] mx-auto'>
          <div className='text-white'>
            <h4 className='text-4xl font-medium pb-20'>Let there be change</h4>
            <div className='lg:grid grid-cols-2'>
              <div>
                <div className='grid grid-cols-2 mb-8'>
                  <ul className='grid gap-3 text-sm'>
                    <li className='hover:text-[#A2A2A0] hover:cursor-pointer hoverText'>Preference Center <hr /> </li>
                    <li className='text-[#A2A2A0] hover:cursor-pointer hoverText'>Careers</li>
                    <li className='hover:text-[#A2A2A0] hover:cursor-pointer hoverText'>About Us<hr /></li>
                    <li className='hover:text-[#A2A2A0] hover:cursor-pointer hoverText'>Contact Us<hr /></li>
                    <li className='hover:text-[#A2A2A0] hover:cursor-pointer hoverText'>Locations<hr /></li>
                    <li className='hover:text-[#A2A2A0] hover:cursor-pointer hoverText'>Sitemap<hr /></li>
                  </ul>
                  <ul className='grid gap-3 text-sm'>
                    <li className='hover:text-[#A2A2A0] hover:cursor-pointer hoverText'>Privacy Statement<hr /></li>
                    <li className='hover:text-[#A2A2A0] hover:cursor-pointer hoverText'>Terms & Conditions<hr /></li>
                    <li className='hover:text-[#A2A2A0] hover:cursor-pointer hoverText'>Cookie Policy/Settings<hr /></li>
                    <li className='hover:text-[#A2A2A0] hover:cursor-pointer hoverText'>Accessibility Statement<hr /></li>
                    <li className='hover:text-[#A2A2A0] hover:cursor-pointer hoverText'>Do Not Sell/Share My Personal Information (for CA)<hr /></li>
                  </ul>
                </div>
                <p>&copy; 2023 Accenture. All Rights Reserved.</p>
              </div>
              <div>
                dv kj
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}



export const metadata = {
  title: "Your connected workspace for wiki, docs &amp; projects | accenture",
  description: "A new tool that blends your everyday work apps into one. It&#x27;s the all-in-one workspace for you and your team.",
  openGraph: {
    title: 'Your connected workspace for wiki, docs &amp; projects | accenture',
    description: "A new tool that blends your everyday work apps into one. It's the all-in-one workspace for you and your team.",
    images: '../../public/LetThereBeChange_Metadata.webp',
  }
}