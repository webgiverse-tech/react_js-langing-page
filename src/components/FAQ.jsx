import React, { useState } from 'react'
import Container from './Container'
import { icoArrowRight } from '../assets/index'

const FAQ = () => {
    const [openId, setOpenId] = useState("0")

    const faqs = [
        {
            id: "0",
            question: "How do I get started with the platform?",
            answer: "Getting started is simple! Sign up for a free account, configure your workspace, and start using our features immediately. Our onboarding wizard will guide you through the setup process in just a few minutes."
        },
        {
            id: "1",
            question: "Can I upgrade or downgrade my plan anytime?",
            answer: "Absolutely! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate your billing accordingly. No hidden fees or long-term commitments required."
        },
        {
            id: "2",
            question: "What payment methods do you accept?",
            answer: "We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and bank transfers for enterprise accounts. All payments are processed securely through industry-leading payment gateways."
        },
        {
            id: "3",
            question: "Is my data secure with your platform?",
            answer: "Yes, we take security very seriously. All data is encrypted in transit and at rest using industry-standard 256-bit AES encryption. We're SOC 2 Type II compliant and conduct regular security audits."
        },
        {
            id: "4",
            question: "Do you offer API access?",
            answer: "Yes! Our Pro and Enterprise plans include full API access with comprehensive documentation. You can integrate our platform with any third-party tool or build custom applications."
        },
        {
            id: "5",
            question: "What's your refund policy?",
            answer: "We offer a 30-day money-back guarantee for all plans. If you're not satisfied for any reason, contact our support team for a full refund, no questions asked."
        }
    ]

    return (
        <div className='py-10 lg:py-20'>
            <Container>
                <div className='flex flex-col items-center gap-10 lg:gap-14'>
                    <div className='flex flex-col items-center gap-5 text-center max-w-2xl'>
                        <h2 className='h2'>Frequently Asked Questions</h2>
                        <p className='body-1 text-n-3'>
                            Everything you need to know about our platform. Can't find the answer? Contact our support team.
                        </p>
                    </div>

                    <div className='w-full max-w-3xl space-y-4'>
                        {faqs.map((faq) => (
                            <div
                                key={faq.id}
                                className='border border-stroke-1 rounded-xl overflow-hidden hover:border-p-3 transition duration-300'
                            >
                                <button
                                    onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                                    className='w-full px-6 py-4 flex items-center justify-between hover:bg-n-8 transition duration-300'
                                >
                                    <h4 className='h5 text-left'>{faq.question}</h4>
                                    <img
                                        src={icoArrowRight}
                                        alt="toggle"
                                        width={20}
                                        height={20}
                                        className={`transition duration-300 ${openId === faq.id ? 'rotate-90' : ''}`}
                                    />
                                </button>

                                {openId === faq.id && (
                                    <div className='px-6 py-4 bg-n-8 border-t border-stroke-1'>
                                        <p className='body-2 text-n-3'>{faq.answer}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default FAQ
