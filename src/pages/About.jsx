import React from 'react'
import Container from '../components/Container'
import Header from '../components/Header'
import Footer from '../components/Footer'

const About = () => {
    const values = [
        {
            id: "0",
            title: "Innovation",
            description: "We constantly push boundaries to deliver cutting-edge solutions"
        },
        {
            id: "1",
            title: "Excellence",
            description: "We maintain the highest standards in everything we do"
        },
        {
            id: "2",
            title: "Customer First",
            description: "Your success is our primary focus and mission"
        },
        {
            id: "3",
            title: "Transparency",
            description: "We believe in honest and open communication"
        }
    ]

    const milestones = [
        { year: "2020", event: "Company Founded" },
        { year: "2021", event: "Reached 10K Users" },
        { year: "2022", event: "Series A Funding" },
        { year: "2023", event: "100K Active Users" },
        { year: "2024", event: "Global Expansion" }
    ]

    return (
        <>
            <Header />

            {/* Hero Section */}
            <section className='py-20 lg:py-28'>
                <Container>
                    <div className='flex flex-col items-center gap-6 text-center max-w-3xl mx-auto'>
                        <h1 className='h1'>About Us</h1>
                        <p className='body-1 text-n-3'>
                            We're on a mission to revolutionize how businesses manage their operations through innovative technology and exceptional customer service.
                        </p>
                    </div>
                </Container>
            </section>

            {/* Story Section */}
            <section className='py-10 lg:py-20 bg-n-8'>
                <Container>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
                        <div className='space-y-6'>
                            <h2 className='h2'>Our Story</h2>
                            <p className='body-1 text-n-3'>
                                Founded in 2020, we started with a simple idea: make enterprise software accessible to everyone. What began as a small team of passionate developers has grown into a global company trusted by over 100,000 users worldwide.
                            </p>
                            <p className='body-1 text-n-3'>
                                Today, we continue to innovate and expand our platform, helping businesses of all sizes streamline their operations and achieve their goals faster than ever before.
                            </p>
                        </div>
                        <div className='bg-gradient-to-br from-p-3 to-p-2 rounded-2xl p-8 h-96 flex items-center justify-center'>
                            <p className='text-white text-center text-lg font-semibold'>
                                📈 Growth visualization would go here
                            </p>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Values Section */}
            <section className='py-10 lg:py-20'>
                <Container>
                    <div className='flex flex-col items-center gap-12'>
                        <div className='text-center max-w-2xl'>
                            <h2 className='h2 mb-4'>Our Values</h2>
                            <p className='body-1 text-n-3'>
                                These principles guide every decision we make and every product we build
                            </p>
                        </div>

                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full'>
                            {values.map((value) => (
                                <div key={value.id} className='border border-stroke-1 rounded-xl p-6 hover:bg-n-8 transition duration-300 space-y-4'>
                                    <h3 className='h4'>{value.title}</h3>
                                    <p className='body-2 text-n-3'>{value.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </section>

            {/* Timeline Section */}
            <section className='py-10 lg:py-20 bg-n-8'>
                <Container>
                    <div className='flex flex-col items-center gap-12'>
                        <div className='text-center max-w-2xl'>
                            <h2 className='h2 mb-4'>Our Journey</h2>
                            <p className='body-1 text-n-3'>
                                From startup to market leader
                            </p>
                        </div>

                        <div className='w-full max-w-2xl'>
                            {milestones.map((milestone, idx) => (
                                <div key={idx} className='flex gap-6 pb-8 relative'>
                                    <div className='flex flex-col items-center'>
                                        <div className='w-4 h-4 bg-p-3 rounded-full'></div>
                                        {idx < milestones.length - 1 && (
                                            <div className='w-1 h-20 bg-stroke-1 mt-2'></div>
                                        )}
                                    </div>
                                    <div className='pt-1'>
                                        <p className='h5 text-p-3'>{milestone.year}</p>
                                        <p className='body-2 text-n-3'>{milestone.event}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </section>

            <Footer />
        </>
    )
}

export default About
