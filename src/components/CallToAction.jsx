import Container  from './Container';
import Button from './Button';
import { icoArrowRight } from '../assets';


const CallToAction = () => {
  return (
    <Container>
          <div className='flex flex-col items-center gap-5 max-w-4xl w-full mx-auto py-5 lg:py-10'>
              <div className=' flex flex-col items-center rounded-xl lg:rounded-3xl bg-gradient-to-tl from-p-3 to-p-4 p-6 lg:p-16 gap-8'>
                  <h2 className=' h2 text-center'>
                      Ready to get started?
                  </h2>
                  <p className=' body-1 text-n-3 text-center'>
                    Join thousands of startups using our modern Sass framework to build beautiful, responsive websites.
                </p>
                <Button className='btn flex flex-wrap font-medium py-3 px-6 rounded-lg text-center transition duration-300' theme="secondary">
                    Get Started Now
                    <img src={icoArrowRight} alt="Arrow Right" />
                </Button>
            </div>
          </div>
      </Container>


  )
}

export default CallToAction
