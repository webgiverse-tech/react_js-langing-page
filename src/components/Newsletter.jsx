import React, { useState } from 'react'
import Container from './Container'
import Button from './Button'
const Newsletter = () => {
    const [email, setEmail] = useState('')
    const [subscribed, setSubscribed] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (email) {
            setSubscribed(true)
            setEmail('')
            setTimeout(() => setSubscribed(false), 3000)
        }
    }

    return (
        <div className='py-10 lg:py-20'>
            <Container>
                <div className='relative rounded-2xl overflow-hidden'>
                    <div className='bg-gradient-to-tl from-p-3 to-p-4 p-8 lg:p-14'>
                        <div className='flex flex-col items-center gap-6 text-center max-w-2xl mx-auto'>
                            <h2 className='h2 text-white'>Stay Updated</h2>
                            <p className='body-1 text-white opacity-90'>
                                Get the latest features, tips, and industry insights delivered to your inbox every week.
                            </p>

                            <form onSubmit={handleSubmit} className='w-full flex flex-col sm:flex-row gap-3 mt-4'>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className='flex-1 px-4 py-3 lg:py-4 rounded-lg bg-p-2 bg-opacity-20 border border-blue-950 border-opacity-90 text-white placeholder-white placeholder-opacity-60 focus:outline-none focus:border-opacity-100 transition duration-300'
                                    required
                                />
                                <Button
                                    type="submit" 
                                    theme="secondary"
                                    className='px-6 lg:px-8 py-3 lg:py-4  rounded-lg font-semibold hover:bg-opacity-90 transition duration-300 whitespace-nowrap'
                                >
                                    Subscribe
                                </Button>
                            </form>

                            {subscribed && (
                                <p className='text-white text-sm mt-4 animate-pulse'>
                                    ✓ Thanks for subscribing! Check your inbox.
                                </p>
                            )}

                            <p className='body-3 text-white opacity-75'>
                                We respect your privacy. Unsubscribe at any time.
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Newsletter
