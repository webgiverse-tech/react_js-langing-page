
import { Container } from './Container';
import { branding } from '../assets/index';

const Branding = () => {
    <Container>
        <div className='flex flex-wrap items-center justify-between lg:gap-1 max-w-5xl w-full mx-auto py-5 lg:py-10'>
            {branding.map((brand, index) => (
                <img key={brand.id} src={brand.image} width={180} height={96} alt={brand.alt} className='w-24 h-auto object-contain grayscale opacity-50'/>
            ))}
        </div>
     </Container>
};

export default Branding;
