"use client"
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import Image from 'next/image';
import AccentureLuxuryProductCustomizationRad from "../../public/Accenture-Luxury-Product-Customization_rad-3x2.webp"; 
import AccentureSustainabilityFeedingTheWorldRad from "../../public/Accenture-Sustainability-Feeding-The-World_rad-3x2.webp"; 
import AccentureMicrosoftCloudSupplyChainControlTowerRad from "../../public/Accenture-Microsoft-Cloud-Supply-Chain-Control-Tower_rad-3x2.webp"; 
import AccentureBarlcaysGenerativeAI from "../../public/Accenture-Barlcays-Generative-AI_rad-3x2.webp"; 
import '@splidejs/react-splide/css';
import { IoIosArrowForward } from 'react-icons/io';

const CarouselWithRightCaption = () => {
    return (
        <>
            <div className='bg-black relative'>
                <Splide id='hero_slider' className='md:h-[68vh] lg:h-[90vh] h-300' options={{ type: 'loop', autoplay: true, }} hasTrack={false} aria-label="My Favorite Images" >
                    <div className="custom-wrapper">
                        <SplideTrack className=''>
                            {/* <SplideSlide className='grid lg:grid-cols-2'>
                                <Image className='w-[100% h-auto' src={AccentureLuxuryProductCustomizationRad} alt='SecondCarosal' />
                                <div className='absolute right-[10%] text-white bottom-[10%]'>
                                <h2 className='text-2xl font-medium'>Prada personalizes a cult classic</h2>
                                <p className='text-sm py-4'>Prada leveraged innovative digital twin <br /> technology, offering new experiences in luxury <br /> product personalization.</p>
                                <div className='flex items-center button'>
                                    <p>Read more</p>
                                    <div className='bg-[#A100FF] ml-2'>
                                        <IoIosArrowForward size={20} />
                                    </div>
                                </div>
                                </div>
                            </SplideSlide> */}
                            {/* <SplideSlide className='md:grid sm:grid-cols-2 grid-rows-2'>
                                <Image className='md:w-[100%] w-[40%] h-[50%]' src={AccentureSustainabilityFeedingTheWorldRad} alt='SecondCarosal' />
                                <div className='absolute right-[10%] text-white bottom-[10%]'>
                                <p className='lg:text-2xl text-base lg:font-medium font-extralight'>Prada personalizes a cult classic</p>
                                <p className='sm:text-sm text-xs sm:py-[4%]'>Prada leveraged innovative digital twin <br /> technology, offering new experiences in luxury <br /> product personalization.</p>
                                <div className='flex items-center button'>
                                    <p>Read more</p>
                                    <div className='bg-[#A100FF] ml-2'>
                                        <IoIosArrowForward size={20} />
                                    </div>
                                </div>
                                </div>
                            </SplideSlide> */}
                            <SplideSlide className='grid md:grid-cols-2'>
                                <Image className='lg:w-auto lg:h-auto w-[75%] h-[60%] md:h-full md:w-full' src={AccentureLuxuryProductCustomizationRad} alt='SecondCarosal' />
                                <div className='absolute  text-white sm:bottom-[10%] md:top-[11%] md:right-[2%] top-[59%] lg:top-auto pl-3'>
                                <p className='sm:text-2xl text-base md:font-medium font-extralight'>Prada personalizes a cult classic</p>
                                <p className='sm:text-sm text-xs sm:py-[4%] none-300'>Prada leveraged innovative digital twin <br /> technology, offering new experiences in luxury <br /> product personalization.</p>
                                <div className='flex items-center button'>
                                    <p>Read more</p>
                                    <div className='bg-[#A100FF] ml-2'>
                                        <IoIosArrowForward size={20} />
                                    </div>
                                </div>
                                </div>
                            </SplideSlide>
                            <SplideSlide className='grid md:grid-cols-2'>
                                <Image className='lg:w-auto lg:h-auto w-[75%] h-[60%] md:h-full md:w-full' src={AccentureMicrosoftCloudSupplyChainControlTowerRad} alt='SecondCarosal' />
                                <div className='absolute  text-white sm:bottom-[10%] md:top-[11%] md:right-[1%] top-[59%] lg:top-auto pl-3'>
                                <p className='sm:text-2xl text-base md:font-medium font-extralight'>Prada personalizes a cult classic</p>
                                <p className='sm:text-sm text-xs sm:py-[4%] none-300'>Prada leveraged innovative digital twin <br /> technology, offering new experiences in luxury <br /> product personalization.</p>
                                <div className='flex items-center button'>
                                    <p>Read more</p>
                                    <div className='bg-[#A100FF] ml-2'>
                                        <IoIosArrowForward size={20} />
                                    </div>
                                </div>
                                </div>
                            </SplideSlide>
                            {/* <SplideSlide className='grid md:grid-cols-2'>
                                <Image className='lg:w-auto w-[75%] h-[60%] lg:h-auto' src={AccentureLuxuryProductCustomizationRad} alt='SecondCarosal' />
                                <div className='absolute md:right-[10%] text-white sm:bottom-[10%] md:top-[11%] top-[59%] lg:top-auto pl-3'>
                                <p className='sm:text-2xl text-base md:font-medium font-extralight'>Prada personalizes a cult classic</p>
                                <p className='sm:text-sm text-xs sm:py-[4%] none-300'>Prada leveraged innovative digital twin <br /> technology, offering new experiences in luxury <br /> product personalization.</p>
                                <div className='flex items-center button'>
                                    <p>Read more</p>
                                    <div className='bg-[#A100FF] ml-2'>
                                        <IoIosArrowForward size={20} />
                                    </div>
                                </div>
                                </div>
                            </SplideSlide> */}
                            {/* <SplideSlide className='lg:grid grid-cols-2'>
                                <Image className='lg:w-auto w-[80%] h-[50%] lg:h-auto' src={AccentureSustainabilityFeedingTheWorldRad} alt='SecondCarosal' />
                                <div className='absolute lg:right-[10%] text-white sm:bottom-[10%] top-[50%] sm:top-auto pl-3'>
                                <p className='sm:text-2xl text-base md:font-medium font-extralight'>Prada personalizes a cult classic</p>
                                <p className='sm:text-sm text-xs sm:py-[4%] none-300'>Prada leveraged innovative digital twin <br /> technology, offering new experiences in luxury <br /> product personalization.</p>
                                <div className='flex items-center button'>
                                    <p>Read more</p>
                                    <div className='bg-[#A100FF] ml-2'>
                                        <IoIosArrowForward size={20} />
                                    </div>
                                </div>
                                </div>
                            </SplideSlide> */}
                            {/* <SplideSlide className='lg:grid grid-cols-2'>
                                <Image className='lg:w-auto w-[80%] h-[50%] lg:h-auto' src={AccentureSustainabilityFeedingTheWorldRad} alt='SecondCarosal' />
                                <div className='absolute lg:right-[10%] text-white bottom-[10%]'>
                                <p className='sm:text-2xl text-base md:font-medium font-extralight'>Prada personalizes a cult classic</p>
                                <p className='sm:text-sm text-xs sm:py-[4%]'>Prada leveraged innovative digital twin <br /> technology, offering new experiences in luxury <br /> product personalization.</p>
                                <div className='flex items-center button'>
                                    <p>Read more</p>
                                    <div className='bg-[#A100FF] ml-2'>
                                        <IoIosArrowForward size={20} />
                                    </div>
                                </div>
                                </div>
                            </SplideSlide> */}
                            {/* <SplideSlide className='lg:grid grid-cols-2'>
                                <Image className='w-auto h-auto' src={AccentureMicrosoftCloudSupplyChainControlTowerRad} alt='SecondCarosal' />
                                <div className='absolute right-[10%] text-white bottom-[10%]'>
                                <h2 className='text-2xl font-medium'>Prada personalizes a cult classic</h2>
                                <p className='text-sm py-4'>Prada leveraged innovative digital twin <br /> technology, offering new experiences in luxury <br /> product personalization.</p>
                                <div className='flex items-center button'>
                                    <p>Read more</p>
                                    <div className='bg-[#A100FF] ml-2'>
                                        <IoIosArrowForward size={20} />
                                    </div>
                                </div>
                                </div>
                            </SplideSlide> */}
                        </SplideTrack>
                        <div className="hidden splide__arrows" />
                    </div>
                </Splide>
            </div>

        </>
    );
};

export default CarouselWithRightCaption;
