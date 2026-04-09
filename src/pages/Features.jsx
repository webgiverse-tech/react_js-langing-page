import React, { useState } from 'react'
import Container from '../components/Container'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { features } from '../constants'

const FeaturesPage = () => {
    const [activeFeature, setActiveFeature] = useState("0")

    const featureDetails = {
        "0": {
            title: "Real-Time Analytics Dashboard",
            description: "Get instant insights with our powerful analytics dashboard. Track metrics, monitor performance, and make data-driven decisions in real-time.",
            benefits: [
                "Live data updates every second",
                "Customizable widgets and layouts",
                "Export reports in multiple formats",
                "Advanced filtering and drill-down capabilities"
            ]
        },
        "1": {
            title: "Team Collaboration Tools",
            description: "Foster seamless communication and collaboration within your team. Share updates, provide feedback, and stay aligned on goals.",
            benefits: [
                "Real-time commenting and discussions",
                "Thread-based conversations",
                "Mention teammates for quick notifications",
                "Rich formatting and media support"
            ]
        },
        "2": {
            title: "Personalized Experience",
            description: "Customize every aspect of your workspace to match your workflow and preferences.",
            benefits: [
                "Drag-and-drop customization",
                "Custom themes and layouts",
                "Notification preferences",
                "Personalized dashboards per user"
            ]
        },
        "3": {
            title: "Advanced Reporting",
            description: "Generate comprehensive reports with detailed analytics and insights for better business intelligence.",
            benefits: [
                "50+ pre-built report templates",
                "Scheduled automated reports",
                "Custom report builder",
                "Data visualization tools"
            ]
        },
        "4": {
            title: "User Management",
            description: "Manage team members and control access permissions with granular control.",
            benefits: [
                "Role-based access control",
                "Custom permission sets",
                "Activity logging and audits",
                "Bulk user management"
            ]
        },
        "5": {
            title: "Smart Organization",
            description: "Keep your projects organized with powerful organizing and search capabilities.",
            benefits: [
                "Nested folder structures",
                "Advanced tagging system",
                "Full-text search",
                "Saved searches and filters"
            ]
        }
    }

    const activeDetails = featureDetails[activeFeature]

    return (
        <>
            <Header />

            {/* Hero Section */}
            <section className='py-20 lg:py-28'>
                <Container>
                    <div className='flex flex-col items-center gap-6 text-center max-w-3xl mx-auto'>
                        <h1 className='h1'>Powerful Features</h1>
                        <p className='body-1 text-n-3'>
                            Everything you need to succeed with our comprehensive feature set designed for modern teams.
                        </p>
                    </div>
                </Container>
            </section>

            {/* Feature Explorer */}
            <section className='py-10 lg:py-20 bg-n-8'>
                <Container>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-start'>
                        {/* Feature List */}
                        <div className='space-y-4'>
                            {features.map((feature) => (
                                <button
                                    key={feature.id}
                                    onClick={() => setActiveFeature(feature.id)}
                                    className={`w-full p-6 rounded-xl text-left transition duration-300 ${activeFeature === feature.id
                                            ? 'bg-p-3 text-white border-p-3'
                                            : 'border border-stroke-1 hover:border-p-3'
                                        }`}
                                >
                                    <div className='flex items-start gap-4'>
                                        <img src={feature.image} alt={feature.alt} width={24} height={24} />
                                        <div>
                                            <h4 className='h5'>{feature.title}</h4>
                                            <p className={`body-3 ${activeFeature === feature.id ? 'text-white opacity-90' : 'text-n-3'}`}>
                                                {feature.text}
                                            </p>
                                        </div>
                                    </div>
                                </button>
                            ))}
                        </div>

                        {/* Feature Details */}
                        <div className='border border-stroke-1 rounded-2xl p-8 sticky top-24'>
                            <h3 className='h3 mb-4'>{activeDetails.title}</h3>
                            <p className='body-1 text-n-3 mb-8'>{activeDetails.description}</p>

                            <h4 className='h5 mb-4'>Key Benefits:</h4>
                            <ul className='space-y-3'>
                                {activeDetails.benefits.map((benefit, idx) => (
                                    <li key={idx} className='flex items-start gap-3'>
                                        <span className='text-p-3 font-bold mt-1'>✓</span>
                                        <span className='body-2 text-n-3'>{benefit}</span>
                                    </li>
                                ))}
                            </ul>

                            <button className='w-full bg-p-3 hover:bg-p-2 text-white py-3 rounded-lg font-semibold mt-8 transition duration-300'>
                                Learn More
                            </button>
                        </div>
                    </div>
                </Container>
            </section>

            <Footer />
        </>
    )
}

export default FeaturesPage
