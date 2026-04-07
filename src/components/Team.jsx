import React from 'react'
import Container from './Container'
import { icoLinkedin, icoTwitter, icoX } from '../assets/index'

const Team = () => {
    const team = [
        {
            id: "0",
            name: "Alex Thompson",
            role: "Founder & CEO",
            image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
            bio: "10+ years in SaaS with a passion for innovation",
            social: [
                { icon: icoLinkedin, link: "#", alt: "LinkedIn" },
                { icon: icoX, link: "#", alt: "Twitter" }
            ]
        },
        {
            id: "1",
            name: "Maria Garcia",
            role: "CTO",
            image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maria",
            bio: "Full-stack engineer with expertise in scalable systems",
            social: [
                { icon: icoLinkedin, link: "#", alt: "LinkedIn" },
                { icon: icoX, link: "#", alt: "Twitter" }
            ]
        },
        {
            id: "2",
            name: "James Wilson",
            role: "Head of Product",
            image: "https://api.dicebear.com/7.x/avataaars/svg?seed=James",
            bio: "Customer-focused product strategist",
            social: [
                { icon: icoLinkedin, link: "#", alt: "LinkedIn" },
                { icon: icoX, link: "#", alt: "Twitter" }
            ]
        },
        {
            id: "3",
            name: "Lisa Chen",
            role: "Head of Design",
            image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa",
            bio: "Creative designer passionate about user experience",
            social: [
                { icon: icoLinkedin, link: "#", alt: "LinkedIn" },
                { icon: icoX, link: "#", alt: "Twitter" }
            ]
        }
    ]

    return (
        <div className='py-10 lg:py-20'>
            <Container>
                <div className='flex flex-col items-center gap-10 lg:gap-14'>
                    <div className='flex flex-col items-center gap-5 text-center max-w-2xl'>
                        <h2 className='h2'>Meet Our Team</h2>
                        <p className='body-1 text-n-3'>
                            Talented individuals dedicated to building the best platform in the industry
                        </p>
                    </div>

                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full'>
                        {team.map((member) => (
                            <div key={member.id} className='border border-stroke-1 rounded-2xl overflow-hidden hover:border-p-3 transition duration-300 group'>
                                <div className='relative overflow-hidden bg-n-8 h-64'>
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className='w-full h-full object-cover group-hover:scale-110 transition duration-300'
                                    />
                                </div>

                                <div className='p-6 space-y-4'>
                                    <div>
                                        <h4 className='h5'>{member.name}</h4>
                                        <p className='body-3 text-p-3 font-semibold'>{member.role}</p>
                                    </div>

                                    <p className='body-3 text-n-3'>{member.bio}</p>

                                    <div className='flex gap-3 pt-4 border-t border-stroke-1'>
                                        {member.social.map((social, idx) => (
                                            <a
                                                key={idx}
                                                href={social.link}
                                                title={social.alt}
                                                className='text-n-3 hover:text-p-3 transition duration-300'
                                            >
                                                <img src={social.icon} alt={social.alt} width={20} height={20} />
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Team
