import {logoApp} from '../assets/index'
import Container from './Container';
import Button from './Button';
import { ElipseBlueBlur } from './theme/Header';


const Header = () => {
  return (
    <div className=' border-b border-stroke-1'>
        <Container className={" relative bg-n-9"}>
            <div className=' relative z-10 flex items-center justify-between py-4 lg:py-6'>
                <img src={logoApp} width={100} height={30}  alt="App-logo" />
                <Button theme="secondary" href="/#">Login</Button>
            </div>
            <ElipseBlueBlur/> 
        </Container>
            
    </div>
  );
};

export default Header;



 