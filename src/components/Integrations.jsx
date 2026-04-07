import React from 'react'
import Container from './Container'
import { logoGoogle, logoSlack, logoAmazon, logoZoom, logoNetflix } from '../assets/index'

const Integrations = () => {
    const integrations = [
        {
            id: "0",
            name: "Google Workspace",
            logo: logoGoogle,
            description: "Sync with Google Drive and Gmail"
        },
        {
            id: "1",
            name: "Slack",
            logo: logoSlack,
            description: "Get instant notifications"
        },
        {
            id: "2",
            name: "Amazon AWS",
            logo: logoAmazon,
            description: "Cloud infrastructure integration"
        },
        {
            id: "3",
            name: "Zoom",
            logo: logoZoom,
            description: "Seamless video conferencing"
        },
        {
            id: "4",
            name: "Netflix",
            logo: logoNetflix,
            description: "Content delivery optimization"
        }
    ]

    return (
        <div className='py-10 lg:py-20'>
            <Container>
                <div className='flex flex-col items-center gap-10 lg:gap-14'>
                    <div className='flex flex-col items-center gap-5 text-center max-w-2xl'>
                        <h2 className='h2'>Powerful Integrations</h2>
                        <p className='body-1 text-n-3'>
                            Connect with your favorite tools and platforms. Streamline your workflow with our extensive integration ecosystem.
                        </p>
                    </div>

                    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 w-full justify-between'>
                        {integrations.map((integration) => (
                            <div key={integration.id} className='border border-stroke-1 rounded-xl p-6 flex flex-col items-center text-center justify-between gap-4 hover:bg-n-8 hover:border-p-3 transition duration-300 cursor-pointer group '>
                                <img
                                    src={integration.logo}
                                    alt={integration.name}
                                    width={48}
                                    height={48}
                                    className='group-hover:scale-110 transition duration-300'
                                />
                                <div>
                                    <h4 className='h5'>{integration.name}</h4>
                                    <p className='body-3 text-n-3'>{integration.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button className='bg-p-3 text-white px-6 lg:px-8 py-3 lg:py-4 rounded-lg hover:bg-p-2 transition duration-300 mt-5'>
                        Explore All Integrations
                    </button>
                </div>
            </Container>
        </div>
    )
}

export default Integrations
