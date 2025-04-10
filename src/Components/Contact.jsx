function Contact() {
    return (
        <>

            <div class="  w-full min-h-screen mt-8 px-5 flex flex-col justify-between items-center" id="contact">
                <div class="  flex items-center flex-col mt-8 pt-8 relative md:text-sm/35 text-sm ">
                    <p class=" text-orange-500 text-[8vw] ">WANT TO DISCUSS A</p>
                    <p class=" text-orange-500 text-[8vw] italic  font-playfair">NEW PROJECT ?</p>

                    <div class="text-[1.2vw] text-white leading-[1.5vw] relative m-8 " >
                        <button className="text-white bg-transparent hover:bg-transparent hover:border hover:border-orange-500 rounded-full py-2 px-4 border-b-4 border-orange-500"><a href="mailto:someone@gmail.com">SEND ME A MAIL</a></button>
                    </div>
                    <div className=" font-bold text-2xl">
                        <h1 className="text-white">Shaily's <span className="text-orange-500">Portfolio</span></h1>

                    </div>
                    <p class="text-[1.2vw] text-white leading-[1.5vw] ">THANKS FOR YOUR VISIT!</p>
                    <p class="text-[1.2vw] text-white leading-[1.5vw] ">YOU CAN CHECK OUT MY NETWORKS</p>
                    <p class="text-[1.2vw] text-white leading-[1.5vw]  ">TO FOLLOW MY NEW ADVENTURES!</p>

                </div>
                <div class="text-white text-[1.2rem] uppercase flex flex-wrap items-center  bottom-10 left-0 gap-[1.5rem]">
                    <a rel="noreferrer" href="" target="_blank">Instagram</a>
                    <a rel="noreferrer" href="https://www.linkedin.com/in/shaily-tyagi-b063b2241/" target="_blank">Linkedin</a>
                    <a rel="noreferrer" href="https://github.com/ShailyTyagi013" target="_blank">GitHub</a>
                    <a rel="noreferrer" href="" target="_blank">Twitter</a>
                </div>
            </div>


        </>
    )

}
export default Contact;