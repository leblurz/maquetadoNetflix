
import './Home.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import dune from '../img/dune3.jpeg'
import title from '../img/dune.png';
import { FaPlay } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";

import i1 from '../img/carousel/1.png'
import i2 from '../img/carousel/2.jpeg'
import i3 from '../img/carousel/3.jpg'
import i4 from '../img/carousel/4.jpg'
import i5 from '../img/carousel/5.jpg'
import i6 from '../img/carousel/6.jpg'
import i7 from '../img/carousel/7.png'
import i8 from '../img/carousel/8.jpg'
import i9 from '../img/carousel/9.jpg'
import i10 from '../img/carousel/10.jpg'
import i11 from '../img/carousel/11.jpg'
import i12 from '../img/carousel/12.jpg'

import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsYoutube } from "react-icons/bs";

export default function Home () {

    return (
        <div className='containerHome'>
            <div className='containerScreenHome'>
                <div className='absolutContaine'>
                    <img className='backgroundImage' src={dune} alt='' />
                    <div className='containerTittleAndText'>
                        <img className='titleDune' src={title} alt='Title' />
                        <div className='containerText'>
                            <span className='textDune'>
                            Paul Atreides, a brilliant and gifted young man born into a great destiny 
                            beyond his understanding, must travel to the most dangerous planet 
                            in the universe to ensure the future of his family and his people.
                            </span>
                        </div>
                        <div className='containButtons'>
                            <button className='buttonTittle'>
                                <div className='flexButton'>
                                    <FaPlay className='playButton'/> 
                                    <span>
                                        Play
                                    </span>
                                </div>
                            </button>
                            <button className='buttonTittle2'>
                                <div className='flexButton'>
                                    <AiOutlineInfoCircle className='playButton2'/> 
                                    <span>
                                        More Info
                                    </span>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
        

                <div className='containerSlider'>
                    <h2 className='tittleSlider'>My List</h2>
                    <div className='containerImagesSlider'>
                        <div className='minContainSlide'><img className='imageSlider' src={i1}/><div className='backHover'></div></div>
                        <div className='minContainSlide'><img className='imageSlider' src={i2}/><div className='backHover'></div></div>
                        <div className='minContainSlide'><img className='imageSlider' src={i3}/><div className='backHover'></div></div>
                        <div className='minContainSlide'><img className='imageSlider' src={i4}/><div className='backHover'></div></div>
                        <div className='minContainSlide'><img className='imageSlider' src={i5}/><div className='backHover'></div></div>
                        <div className='minContainSlide'><img className='imageSlider'src={i7}/><div className='backHover'></div></div>
                    </div>
                </div>

                <div className='containerSlider'>
                    <h2 className='tittleSlider'>Only on Netflix</h2>
                    <div className='containerImagesSlider'>
                        <div className='minContainSlide'><img className='imageSlider' src={dune}/></div>
                        <div className='minContainSlide'><img className='imageSlider' src={i6}/></div>
                        <div className='minContainSlide'><img className='imageSlider' src={i8}/></div>
                        <div className='minContainSlide'><img className='imageSlider' src={i9}/></div>
                        <div className='minContainSlide'><img className='imageSlider' src={i10}/></div>
                        <div className='minContainSlide'><img className='imageSlider'src={i11}/></div>
                    </div>
                </div>

                <div className='containerSlider'>
                    <h2 className='tittleSlider'>Trending Now</h2>
                    <div className='containerImagesSlider'>
                        <div className='minContainSlide'><img className='imageSlider' src={i12}/></div>
                        <div className='minContainSlide'><img className='imageSlider' src={i5}/></div>
                        <div className='minContainSlide'><img className='imageSlider' src={i2}/></div>
                        <div className='minContainSlide'><img className='imageSlider' src={i8}/></div>
                        <div className='minContainSlide'><img className='imageSlider' src={i9}/></div>
                        <div className='minContainSlide'><img className='imageSlider'src={i7}/></div>
                    </div>
                </div>

                <footer>
                    <div className='containerIcons'>
                        <FaFacebookF className='iconFooter'/>
                        <BsInstagram className='iconFooter'/>
                        <AiOutlineTwitter className='iconFooter'/>
                        <BsYoutube className='iconFooter'/>
                    </div>
                    <div className='containerGranFooter'>
                        <div className='containTextFooter'>
                            <h5 className='textFooter'>Audio Description</h5>
                            <br/>
                            <h5 className='textFooter'>Audio Description</h5>
                            <br/>
                            <h5 className='textFooter'>Audio Description</h5>
                        </div>
                        <div className='containTextFooter'>
                            <h5 className='textFooter'>Help Center</h5>
                            <br/>
                            <h5 className='textFooter'>Help Center</h5>
                            <br/>
                            <h5 className='textFooter'>Help Center</h5>
                        </div>
                        <div className='containTextFooter'>
                            <h5 className='textFooter'>Gift Cards</h5>
                            <br/>
                            <h5 className='textFooter'>Gift Cards</h5>
                            <br/>
                            <h5 className='textFooter'>Gift Cards</h5>
                        </div>
                        <div className='containTextFooter'>
                            <h5 className='textFooter'>Privacy</h5>
                            <br/>
                            <h5 className='textFooter'>Privacy</h5>
                            <br/>
                            <h5 className='textFooter'>Privacy</h5>
                        </div>
                    </div>
                    <div className='containerBtnFooter'>
                        <button className='btnFooter'><span className='spanBtn'>Service Code</span></button>
                    </div>
                    <div>

                    </div>
                </footer>

            </div>
        </div>
    )
}