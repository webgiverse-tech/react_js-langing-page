import React from 'react'
import Container from './Container'

const Testimonials = () => {
    const testimonials = [
        {
            id: "0",
            name: "Sarah Johnson",
            role: "CEO at TechFlow",
            image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
            rating: 5,
            text: "This platform transformed how our team works. The real-time analytics and collaboration features are game-changers. Highly recommended!"
        },
        {
            id: "1",
            name: "Marcus Chen",
            role: "Product Manager at CloudSync",
            image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus",
            rating: 5,
            text: "Outstanding customer support and intuitive interface. We saw a 40% increase in productivity within the first month of implementation."
        },
        {
            id: "2",
            name: "Emma Rodriguez",
            role: "Founder at DataHub",
            image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
            rating: 5,
            text: "The best investment we made for our business. Seamless integration with our existing tools and the ROI is incredible."
        },
        {
            id: "3",
            name: "David Park",
            role: "CTO at Innovation Labs",
            image: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
            rating: 5,
            text: "Superior performance and reliability. Their team goes above and beyond to ensure our success. A+ service!"
        }
    ]

    return (
        <div className='py-10 lg:py-20'>
            <Container>
                <div className='flex flex-col items-center gap-10 lg:gap-14'>
                    <div className='flex flex-col items-center gap-5 text-center max-w-2xl'>
                        <h2 className='h2'>Loved by Industry Leaders</h2>
                        <p className='body-1 text-n-3'>
                            See what our customers have to say about their experience with our platform
                        </p>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full'>
                        {testimonials.map((testimonial) => (
                            <div key={testimonial.id} className='border border-stroke-1 rounded-2xl p-6 hover:bg-n-8 transition duration-300 space-y-4 flex flex-col'>
                                <div className='flex gap-1'>
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <span key={i} className='text-p-3'>★</span>
                                    ))}
                                </div>

                                <p className='body-2 text-n-3 flex-grow'>{testimonial.text}</p>

                                <div className='flex items-center gap-3 pt-4 border-t border-stroke-1'>
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        width={40}
                                        height={40}
                                        className='rounded-full'
                                    />
                                    <div>
                                        <h4 className='h5'>{testimonial.name}</h4>
                                        <p className='body-3 text-n-3'>{testimonial.role}</p>
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

export default Testimonials
