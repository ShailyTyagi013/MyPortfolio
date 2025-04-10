import { delay, motion } from 'framer-motion'

function Navigation() {
    return (
        <>
        
                <header className="p-4   ">

                    <nav className=" md:flex md:items-center md:justify-between w-[92%] mx-auto  ">
                        <div className=" font-bold text-2xl">
                            <h1 className="text-white">Shaily's <span className="text-orange-500">Portfolio</span></h1>

                        </div>
                        <div className=" text-white ">
                            <ul className="md:flex md:items-center gap-[4vw] ">
                                <li><a href="#home" className=" hover:text-orange-500">Home</a></li>
                                <li><a href="#projects" className=" hover:text-orange-500">Projects</a></li>
                                <li><a href="#about" className=" hover:text-orange-500">About</a></li>
                                <li><a href="#contact" className=" hover:text-orange-500">Contact</a></li>
                            </ul>
                        </div>
                    </nav>
                </header>
                <hr className="text-white mx-4  " />

                <div class="  w-full min-h-screen mt-8 px-5 flex flex-col justify-between items-center" id='home'>
                    <motion.div
                    initial={{x: -1000}}
                    animate={{x:0,
                        opacity:0,
                        
                     }}
                    transition={{
                        duration:2,
                        delay:1,
                        repeat: Infinity
                    }}
                     class="  flex flex-col mt-8 pt-8 relative md:text-sm/35 text-sm ">
                    <p class=" text-orange-500 text-[8vw] ">INDEPENDENT</p>
                        <p class=" text-orange-500 text-[8vw] ">FRONTEND</p>
                        <p class=" text-orange-500 text-[8vw] ">WEB DEVELOPER</p>



                        <div class="text-[1.2vw] text-white leading-[1.5vw] relative " >
                            <p className="float-right">Welcome to <span class="italic lowercase font-playfair">my  </span><span class="italic lowercase font-playfair">portfolio</span></p></div>

                            <img src="/src/assets/Portfolio.jpg" className="md:hidden mt-8 py-8"></img>
                    </motion.div>
                    
                </div>
            
        </>
    )
}
export default Navigation;