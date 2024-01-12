import React from 'react'
import SendIcon from '@mui/icons-material/Send';
import Switcher from './components/Switcher'
import { Button, Flex } from 'antd';
import Cart from './components/Cart/Cart';
import "../src/App.css"

// import { Switch } from "@mui/material"

const App = () => {
  return (
    <div className='w-[100%] h-auto dark:bg-black'>
      <header className='header'>
        <nav className='flex dark:bg-gray-800 bg-gray-100 items-center justify-evenly pt-[30px]'>
          <img src="src/assets/Logo (1).png" alt="" />
          <ul className='hidden lg:flex gap-[20px] text-[18px] dark:text-white'>
            <li>Home</li>
            <li>About</li>
            <li>Pages</li>
            <li>Shop</li>
            <li>Project</li>
            <li>News</li>
          </ul>
          <div className='flex items-center gap-[20px]'>
            <img src="src/assets/Search.png" className='hidden sm:block w-[250px]' alt="" />
            <img src="src/assets/Cart.png" className='hidden sm:block w-[100px]' alt="" />
            <div className='text-[20px]'><Switcher /></div>
          </div>
        </nav>
        <section className='mt-[20px] lg:flex justify-evenly lg:mt-[100px] items-center'>
          <div className='text-[40px] font-[600] text-center dark:text-white text-green-900 lg:w-[500px] lg:text-start'>
            <h1>Choose the best 
            healthier way 
            of life</h1>
            <Button className='dark:text-white'>Explore Now</Button>
          </div>
          <img src="src/assets/Снимок экрана 2023-12-22 185205.png" alt="" />
        </section>
      </header>
      <main className='main'>
        <section className='dark:bg-gray-900 px-[20px] flex justify-evenly mt-[50px] bg-gray-100 py-[50px] flex-wrap gap-[30px]'>
          <img src="src/assets/1.png" className='w-[500px]' alt="" />
          <img src="src/assets/2.png" className='w-[500px]' alt="" />
        </section>
        <section className='lg:flex justify-evenly py-[30px]'>
          <img src="src/assets/Photo.png" className='lg:w-[600px]' alt="" />
          <div className='lg:w-[500px]'>
            <h1 className='text-[30px] lg:text-start font-[600] dark:text-white text-center mt-[30px]'>We Believe in Working
            Accredited Farmers</h1>
            <p>Simply dummy text of the printing and typesetting industry. Lorem had ceased to 
            been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
            <div className='flex p-[10px] gap-[10px] w-[300px] sm:w-[400px]'>
              <img src="src/assets/Icon.png" alt="" />
              <div>
                <h3 className='text-[20px] font-[600] dark:text-white'>Organic Foods Only</h3>
                <p className='dark:text-white'>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
              </div>
            </div>
            <div className='flex p-[10px] gap-[10px] w-[300px] sm:w-[400px]'>
              <img src="src/assets/Icon.png" alt="" />
              <div>
                <h3 className='text-[20px] font-[600] dark:text-white'>Organic Foods Only</h3>
                <p className='dark:text-white'>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
              </div>
            </div>
            <Button className='bg-green-950 text-white px-[40px] h-[40px]'>Shop Now</Button>
          </div>
        </section>
        <section className='bg-gray-100 py-[100px] dark:bg-gray-950 text-center'>
          <h1 className='text-center text-[35px] font-[700] text-green-950'>Our Products</h1>
          <div className='flex flex-wrap gap-[10px] justify-evenly my-[50px] text-start'>
            <Cart title="Vegetable" img={"src/assets/Photo (1).png"} name={"Calabrese Broccoli"} price={"13.00"} />
            <Cart title="Vegetable" img={"src/assets/Photo (2).png"} name={"Calabrese Broccoli"} price={"13.00"} />
            <Cart title="Vegetable" img={"src/assets/Photo (3).png"} name={"Calabrese Broccoli"} price={"13.00"} />
            <Cart title="Vegetable" img={"src/assets/Photo (4).png"} name={"Calabrese Broccoli"} price={"13.00"} />
            <Cart title="Vegetable" img={"src/assets/Photo (5).png"} name={"Calabrese Broccoli"} price={"13.00"} />
            <Cart title="Vegetable" img={"src/assets/image 13 (1).png"} name={"Calabrese Broccoli"} price={"13.00"} />
            <Cart title="Vegetable" img={"src/assets/image 14.png"} name={"Calabrese Broccoli"} price={"13.00"} />
            <Cart title="Vegetable" img={"src/assets/Photo (6).png"} name={"Calabrese Broccoli"} price={"13.00"} />
          </div>
          <Button className='px-[50px] h-[40px] bg-green-950 text-white'>Load More</Button>
        </section>
        <section className='section text-center pt-[50px]'>
          <h1 className='text-[35px] font-[700] mb-[100px]'>What Our Customer Saying?</h1>
          <img src="src/assets/Star.png" className='m-auto' alt="" />
          <p className='text-[18px] font-[600]'>Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy <br /> text of the printing and typesetting industry. Lorem Ipsum has been.</p>
          <h3 className='text-[25px] font-[600] my-[20px]'>Sara Taylor</h3>
          <p className='text-[20px] font-[600]'>Consumer</p>
          <img src="src/assets/Counters.png" className='m-auto my-[20px]' alt="" />
        </section>
        <section className='p-[100px] bg-[#274C5B] text-white'>
          <div className='flex justify-around gap-[30px] flex-wrap'>
            <h1 className='text-[35px] font-[600]'>We Offer Organic For You</h1>
            <Button className='px-[40px] h-[50px] bg-yellow-600 text-[20px] text-white'>View All Product</Button>
          </div>
          <div className='flex flex-wrap gap-[10px] justify-evenly my-[50px] text-start'>
            <Cart title="Vegetable" img={"src/assets/Photo (1).png"} name={"Calabrese Broccoli"} price={"13.00"} />
            <Cart title="Vegetable" img={"src/assets/Photo (2).png"} name={"Calabrese Broccoli"} price={"13.00"} />
            <Cart title="Vegetable" img={"src/assets/Photo (3).png"} name={"Calabrese Broccoli"} price={"13.00"} />
            <Cart title="Vegetable" img={"src/assets/Photo (4).png"} name={"Calabrese Broccoli"} price={"13.00"} />
          </div>
        </section>
        <img src="src/assets/Gallery.png" alt="" />
      </main>
      <footer className='footer px-[10%] py-[5%] flex justify-between gap-[30px] dark:bg-gray-900 dark:text-white flex-wrap'>
        <div>
          <p>Contact Us</p>
          <p>Contact Us</p>
          <p>Contact Us</p>
          <p>Contact Us</p>
          <p>Contact Us</p>
        </div>
        <div>
          <p>Contact Us</p>
          <p>Contact Us</p>
          <p>Contact Us</p>
          <p>Contact Us</p>
          <p>Contact Us</p>
        </div>
        <div>
          <p>Contact Us</p>
          <p>Contact Us</p>
          <p>Contact Us</p>
          <p>Contact Us</p>
          <img src="src/assets/Follow.png" className='w-[200px]' alt="" />
        </div>
      </footer>
    </div>
  )
}

export default App