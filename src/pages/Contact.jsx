import React, { useState } from 'react'
import Container from '../components/Container'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })
    const [submitted, setSubmitted] = useState(false)

    const contactInfo = [
        {
            id: "0",
            icon: "📧",
            title: "Email",
            content: "support@example.com",
            link: "mailto:support@example.com"
        },
        {
            id: "1",
            icon: "📞",
            title: "Phone",
            content: "+1 (555) 123-4567",
            link: "tel:+15551234567"
        },
        {
            id: "2",
            icon: "📍",
            title: "Address",
            content: "123 Innovation St, Tech City, TC 12345",
            link: "#"
        },
        {
            id: "3",
            icon: "🕒",
            title: "Hours",
            content: "Mon-Fri 9AM-6PM EST",
            link: "#"
        }
    ]

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setSubmitted(true)
        setFormData({ name: '', email: '', subject: '', message: '' })
        setTimeout(() => setSubmitted(false), 3000)
    }

    return (
        <>
            <Header />

            {/* Hero Section */}
            <section className='py-20 lg:py-28'>
                <Container>
                    <div className='flex flex-col items-center gap-6 text-center max-w-3xl mx-auto'>
                        <h1 className='h1'>Get in Touch</h1>
                        <p className='body-1 text-n-3'>
                            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                        </p>
                    </div>
                </Container>
            </section>

            {/* Contact Info Cards */}
            <section className='py-10 lg:py-20 bg-n-8'>
                <Container>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                        {contactInfo.map((info) => (
                            <a
                                key={info.id}
                                href={info.link}
                                className='border border-stroke-1 rounded-xl p-6 hover:bg-n-7 hover:border-p-3 transition duration-300 text-center'
                            >
                                <div className='text-4xl mb-4'>{info.icon}</div>
                                <h4 className='h5 mb-2'>{info.title}</h4>
                                <p className='body-3 text-n-3'>{info.content}</p>
                            </a>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Contact Form */}
            <section className='py-10 lg:py-20'>
                <Container>
                    <div className='max-w-2xl mx-auto'>
                        <div className='border border-stroke-1 rounded-2xl p-8 lg:p-12'>
                            <h2 className='h2 mb-8 text-center'>Send us a Message</h2>

                            <form onSubmit={handleSubmit} className='space-y-6'>
                                {/* Name */}
                                <div>
                                    <label className='block body-2 font-semibold mb-2'>Full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="John Doe"
                                        className='w-full px-4 py-3 rounded-lg bg-n-8 border border-stroke-1 focus:border-p-3 focus:outline-none transition duration-300'
                                        required
                                    />
                                </div>

                                {/* Email */}
                                <div>
                                    <label className='block body-2 font-semibold mb-2'>Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="john@example.com"
                                        className='w-full px-4 py-3 rounded-lg bg-n-8 border border-stroke-1 focus:border-p-3 focus:outline-none transition duration-300'
                                        required
                                    />
                                </div>

                                {/* Subject */}
                                <div>
                                    <label className='block body-2 font-semibold mb-2'>Subject</label>
                                    <input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        placeholder="How can we help?"
                                        className='w-full px-4 py-3 rounded-lg bg-n-8 border border-stroke-1 focus:border-p-3 focus:outline-none transition duration-300'
                                        required
                                    />
                                </div>

                                {/* Message */}
                                <div>
                                    <label className='block body-2 font-semibold mb-2'>Message</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Tell us more about your inquiry..."
                                        rows="6"
                                        className='w-full px-4 py-3 rounded-lg bg-n-8 border border-stroke-1 focus:border-p-3 focus:outline-none transition duration-300 resize-none'
                                        required
                                    ></textarea>
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className='w-full bg-p-3 hover:bg-p-2 text-white py-4 rounded-lg font-semibold transition duration-300'
                                >
                                    Send Message
                                </button>

                                {submitted && (
                                    <p className='text-center text-p-3 animate-pulse'>
                                        ✓ Message sent successfully! We'll be in touch soon.
                                    </p>
                                )}
                            </form>
                        </div>
                    </div>
                </Container>
            </section>

            <Footer />
        </>
    )
}

export default Contact