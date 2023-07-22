import { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import Box1 from './components/Box1';
import Box2 from './components/Box2';
import Box3 from './components/Box3';
import Box4 from './components/Box4';
import './index.css';

function App() {
  const [isOpen1, setIsOpen1] = useState(false)
  const [isOpen2, setIsOpen2] = useState(false)
  const [isOpen3, setIsOpen3] = useState(false)

  const handleBoxState1 = () => {
    setIsOpen1(!isOpen1)
    setIsOpen3(false)
    setIsOpen2(false)
  }

  const handleBoxState2 = () => {
    setIsOpen2(!isOpen2)
    setIsOpen1(false)
    setIsOpen3(false)
  }
  const handleBoxState3 = () => {
    setIsOpen3(!isOpen3)
    setIsOpen1(false)
    setIsOpen2(false)
  }
  return (
    <div className={`w-full h-screen flex flex-col gap-2 border-8 border-neutral-100 float-left`}>
      <div className='flex h-[50vh]  gap-2'>
        <div
          id='box1'
          className={`w-full hover:bg-primary text-neutral-100 flex justify-center items-center cursor-pointer transition-all duration-300 ${isOpen1 ? `h-[90vh] border-b-8 border-neutral-100 z-10 bg-neutral-100` : `bg-neutral-900`}  ${isOpen2 ? `w-[10vw] z-0  h-full` : ``} ${isOpen3 ? `h-[10vh] z-0 self-start` : ``} `}
          onClick={handleBoxState1}>
          <Box1 state={isOpen1} stateBox2={isOpen2} stateBox3={isOpen3} />
        </div>
        <div
          id='box2'
          className={`w-full bg-neutral-900 hover:bg-secondary text-neutral-100 hover:text-neutral-900 flex justify-center items-center cursor-pointer transition-all duration-300 ${isOpen2 ? `min-w-[90vw] z-10 float-left` : ``} ${isOpen1 ? `` : ``} `}
          onClick={handleBoxState2}
        >
          <Box2 state={isOpen2} />
        </div>
      </div>
      <div className='flex h-[50vh] gap-2'>
        <div
          id='box3'
          className={`w-full bg-neutral-900 hover:bg-accent text-neutral-100 hover:text-neutral-900 flex justify-center items-center cursor-pointer transition-all duration-300 ${isOpen3 ? `h-[90vh] self-end border-t-8 border-neutral-100 z-10` : ``}  ${isOpen1 ? `h-[10vh] z-0 self-end` : ``} `}
          onClick={handleBoxState3}>
          <Box3 state={isOpen3} />
        </div>
        <div
          id='box4' className={`w-full bg-neutral-100  text-neutral-100  flex justify-center items-center cursor-pointer ${isOpen1 ? `` : ``}`}>

          <Box4 />
        </div>
      </div>
    </div>

  );
}

export default App;
