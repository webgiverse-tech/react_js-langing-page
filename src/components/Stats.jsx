import React from 'react'
import Container from './Container'

const Stats = () => {
    const stats = [
        {
            id: "0",
            number: "50K+",
            label: "Active Users",
            description: "Join thousands of satisfied customers"
        },
        {
            id: "1",
            number: "99.9%",
            label: "Uptime Guarantee",
            description: "Enterprise-grade reliability"
        },
        {
            id: "2",
            number: "24/7",
            label: "Support Available",
            description: "Always here to help you succeed"
        },
        {
            id: "3",
            number: "$2M+",
            label: "Processed Monthly",
            description: "Trusted by leading companies"
        }
    ]

    return (
        <div className='py-10 lg:py-20 relative'>
            <Container>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
                    {stats.map((stat) => (
                        <div key={stat.id} className='flex flex-col items-center text-center space-y-4 p-6 rounded-xl hover:bg-n-8 transition duration-300'>
                            <h2 className='h2 text-p-3'>{stat.number}</h2>
                            <h4 className='h4'>{stat.label}</h4>
                            <p className='body-2 text-n-3'>{stat.description}</p>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Stats
