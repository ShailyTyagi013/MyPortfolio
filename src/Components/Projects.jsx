function Projects() {
    return (
        <>
            <section className=" pb-4" id="projects">

                <p class="text-[4vw] text-white uppercase text-center">Selected <br /> <span class="font-playfair italic">Works</span></p>
                <div class=" text-white  mx-2 py-4 flex justify-items-center   lg:grid lg:grid-flow-row lg:grid-cols-3 lg:gap-8  md:grid md:grid-flow-row md:grid-cols-2 md:gap-4  grid grid-flow-row grid-row-3 gap-8 ">
                    <div className=" w-96 h-80 ">
                        <h3 >Project-1</h3>
                        <div className=" w-96 h-68">
                           <a href="#"> <img className="w-96 h-68" src="/src/assets/Portfolio.jpg" alt="photo"/></a>

                        </div>
                        <div ><p className="float-right italic lowercase font-playfair text-[18px] text-white">SEE WORK <span className="">→</span></p></div>
                    </div>

                    <div className=" w-96 h-80 ">
                    <h3>Project-2</h3>
                        <div className="bg-white w-96 h-68">
                        <a href="#"> <img className="w-96 h-68" src="/src/assets/Portfolio.jpg" alt="photo"/></a>
                        </div>
                        <div ><p className="float-right italic lowercase font-playfair text-[18px] text-white">SEE WORK <span className="">→</span></p></div>
                    </div>

                    <div className=" w-96 h-80 ">
                    <h3>Project-3</h3>
                        <div className="bg-white w-96 h-68">
                        <a href="#"> <img className="w-96 h-68" src="/src/assets/Portfolio.jpg" alt="photo"/></a>

                        </div>
                        <div ><p className="float-right italic lowercase font-playfair text-[18px] text-white">SEE WORK <span className="">→</span></p></div>
                    </div>

                    <div className=" w-96 h-80  ">
                    <h3>Project-4</h3>
                        <div className="bg-white w-96 h-68">
                        <a href="#"> <img className="w-96 h-68" src="/src/assets/Portfolio.jpg" alt="photo"/></a>

                        </div>
                        <div ><p className="float-right italic lowercase font-playfair text-[18px] text-white ">SEE WORK <span className="">→</span></p></div>
                    </div>

                   

                </div>
                <div className="flex justify-center">
                <button className="text-white bg-transparent hover:bg-transparent hover:border hover:border-orange-500 rounded-full py-2 px-4 border-b-4 border-orange-500  ">See More</button>
                </div>

            </section>

        </>
    )
}
export default Projects;