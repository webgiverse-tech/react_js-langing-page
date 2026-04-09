import React, { useState } from 'react'
import Container from '../components/Container'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Blog = () => {
    const [selectedCategory, setSelectedCategory] = useState("all")

    const articles = [
        {
            id: "0",
            title: "10 Best Practices for Enterprise Software Implementation",
            excerpt: "Learn the proven strategies that ensure smooth and successful software deployment in large organizations.",
            category: "Best Practices",
            author: "Sarah Johnson",
            date: "Apr 5, 2024",
            image: "🔧",
            readTime: "8 min read"
        },
        {
            id: "1",
            title: "The Future of Cloud Computing in 2024",
            excerpt: "Exploring emerging trends and technologies that will shape cloud infrastructure in the coming years.",
            category: "Technology",
            author: "Marcus Chen",
            date: "Apr 3, 2024",
            image: "☁️",
            readTime: "6 min read"
        },
        {
            id: "2",
            title: "How to Build a High-Performance Team",
            excerpt: "Strategies for creating a productive and motivated team in a remote or hybrid work environment.",
            category: "Team",
            author: "Emma Rodriguez",
            date: "Mar 30, 2024",
            image: "👥",
            readTime: "10 min read"
        },
        {
            id: "3",
            title: "Data Security: What Every Business Should Know",
            excerpt: "Essential information about protecting your business data and complying with modern security standards.",
            category: "Security",
            author: "David Park",
            date: "Mar 28, 2024",
            image: "🔒",
            readTime: "7 min read"
        },
        {
            id: "4",
            title: "Automation Tools That Will Transform Your Workflow",
            excerpt: "Discover the top automation tools that can save your team hundreds of hours every month.",
            category: "Technology",
            author: "Lisa Chen",
            date: "Mar 25, 2024",
            image: "⚙️",
            readTime: "9 min read"
        },
        {
            id: "5",
            title: "Customer Success Stories: Real Results from Real Clients",
            excerpt: "See how leading companies are using our platform to achieve remarkable growth and efficiency.",
            category: "Case Studies",
            author: "James Wilson",
            date: "Mar 22, 2024",
            image: "🏆",
            readTime: "5 min read"
        }
    ]

    const categories = ["all", "Best Practices", "Technology", "Team", "Security", "Case Studies"]

    const filteredArticles = selectedCategory === "all"
        ? articles
        : articles.filter(article => article.category === selectedCategory)

    return (
        <>
            <Header />

            {/* Hero Section */}
            <section className='py-20 lg:py-28'>
                <Container>
                    <div className='flex flex-col items-center gap-6 text-center max-w-3xl mx-auto'>
                        <h1 className='h1'>Blog</h1>
                        <p className='body-1 text-n-3'>
                            Stay updated with the latest insights, tips, and industry trends from our expert team.
                        </p>
                    </div>
                </Container>
            </section>

            {/* Categories */}
            <section className='py-6 lg:py-10 border-b border-stroke-1'>
                <Container>
                    <div className='flex flex-wrap gap-3 justify-center'>
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-4 lg:px-6 py-2 rounded-lg transition duration-300 capitalize ${selectedCategory === category
                                        ? 'bg-p-3 text-white'
                                        : 'border border-stroke-1 text-n-3 hover:border-p-3'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Articles Grid */}
            <section className='py-10 lg:py-20'>
                <Container>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                        {filteredArticles.map((article) => (
                            <article key={article.id} className='border border-stroke-1 rounded-xl overflow-hidden hover:border-p-3 transition duration-300 flex flex-col group cursor-pointer'>
                                <div className='bg-gradient-to-br from-n-8 to-n-7 h-48 flex items-center justify-center text-6xl group-hover:scale-110 transition duration-300'>
                                    {article.image}
                                </div>

                                <div className='p-6 flex flex-col flex-grow'>
                                    <p className='body-3 text-p-3 font-semibold mb-3'>{article.category}</p>

                                    <h3 className='h5 mb-3 group-hover:text-p-3 transition duration-300'>
                                        {article.title}
                                    </h3>

                                    <p className='body-2 text-n-3 mb-4 flex-grow'>
                                        {article.excerpt}
                                    </p>

                                    <div className='flex items-center justify-between pt-4 border-t border-stroke-1 text-sm text-n-3'>
                                        <span>{article.author}</span>
                                        <span>{article.readTime}</span>
                                    </div>

                                    <p className='text-xs text-n-4 mt-2'>{article.date}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </Container>
            </section>

            <Footer />
        </>
    )
}

export default Blog
