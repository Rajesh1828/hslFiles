import React from 'react'
import './Contact.css'
import { assets } from '../../../assets/assets'
import { Building2, MapPin, Mail, Phone, FileText, MapIcon, Building,User } from 'lucide-react';


const ContactHero = () => {
    return (
        <div>
            <img src={assets.ab_b} alt="" className='w-full h-[350px]' />
            <div className='absolute inset-x-0 top-[300px] left-0 flex justify-center items-center'>

            <h2 className='text-3xl font-bold text-center md:text-4xl gradient-text'>Contact</h2>
            </div>
            <div className='justify-center items-center '>

    <h2 className='text-xl font-bold text-center md:text-4xl  mb-2 mt-2 inter'>Make a call Request for more information</h2>
    <p className=' text-center inter'>Looking for custom solutions or want to collaborate? Get in touch with our team today and let's make something great together.</p>
            </div>



            <div className='flex md:flex-row flex-col justify-center items-center gap-8  '>
                {/* left-side */}
               <div className='mt-10 mb-10'>
                <img src={assets.conatct} className='w-full rounded-2xl' alt="" />

               </div>
               {/* Rightside */}
               <div className='md:w-2xl'>
                <h2 className='text-xl font-bold text-center md:text-4xl  mb-2 mt-2 inter underline underline-offset-5 link-underline-opacity-10 '><Building className='w-8 h-8 inline text-red-700'/> Our Address</h2>
                <p className=' text-center inter'>Need assistance or have a question about our services? Fill out the contact form and our support team will be in touch shortly.</p>
                 <p className=' text-center font-bold inter'> <Building2 className='w-5 h-5 inline text-red-700'/> Sri Jaya Durga Enterprises</p>
                 <p className=' text-center inter'><MapPin className='w-5 h-5 inline text-red-700' /> D. No. 22-12-138,REVENUE WARD - 31, ASSESSEMENT No. 1021088719, BESIDE NUKALAMMA TEMPLE,LALAPET Door No. 5-41-13/2, <span> <MapIcon className='w-5 h-5 inline text-red-700'/></span> Brodipet, 6/9,522002,Guntur, Guntur-522003, Andhra Pradesh, India</p>
                 <p className=' text-center inter text-2xl font-medium'> <User className='w-7 h-7 inline text-red-700'/> M. Suresh Madisetty </p>
                 <p className=' text-center inter text-xl font-bold'><Phone className='w-5 h-5 inline text-red-700'/> 9849186401</p>
                 <p className=' text-center inter text-xl font-bold'> <Mail className='w-5 h-5 inline text-red-700'/> <a href="mailto:u2hZt@example.com">srijayadurgaenterprises2000@gmail</a> </p>
               </div>
            </div>
        </div>
    )
}

export default ContactHero