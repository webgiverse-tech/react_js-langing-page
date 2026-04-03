import { grid } from '../../assets'

const Grid = () => {
  return (
    <img src={grid} alt="grid"  className='hidden md:block absolute -top-[1.125rem] left-0 z-10 w-full h-full object-contain object-top pointer-events-none opacity-50'/>
  );
};

export default Grid;