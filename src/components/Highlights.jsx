import { useGSAP } from '@gsap/react'
import React from 'react'
import gsap from 'gsap'
import { rightImg, watchImg } from '../utils'

function Highlights() {
    useGSAP(()=>{
        gsap.to("#title",{
            opacity:1,
            y:0,
            delay:1
        })
        gsap.to(".link",{
            opacity:1,
            y:0,
            delay:1
        })
    },[])


  return (
    <div>
      <section className='common-padding w-screen overflow-hidden h-full bg-zinc'>
        <div className='screen-max-width'>
            <div className='mb-12 w-full md:flex items-end justify-between'>
                <h1 id="title" className='section-heading'>Get the highlights</h1>
                <div id="links" className='flex flex-wrap items-end gap-5'>
                    <p className='link '>Watch the film <img className='pl-2' src={watchImg} alt="watch" /></p>
                    <p className='link'>Watch the event <img className='pl-2' src={rightImg} alt="right" /></p>
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Highlights
