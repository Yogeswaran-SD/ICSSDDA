
export default function Home() {
  return (
    <>
      <div className=" bg-[url(/image/image2.jpg)] h-screen ">
        <div className="pt-50  space-y-10">
          <div className="lg:text-5xl text-xl text-[#FFFFFF] font-bold bg-[#B2C7F6]/[25%] w-fit mx-auto py-5 lg:px-40 px-15 leading-relaxed"
            style={{ clipPath: 'polygon(10% 0, 100% 0, 90% 100%, 0 100%)' }}
          >
            <h1 >International Conference on <br className="hidden lg:block" />Software Systems Development and Data Analysis</h1>
          </div>
          <div className="flex max-w-3xl mx-auto justify-around text-center items-center text-[#FFFFFF] text-2xl font-semibold">
            <h2 className="bg-[#093FB4] py-5 px-5 rounded-2xl">15th, November 2025</h2>
            <h2 className="bg-[#093FB4] py-5 px-5 rounded-2xl">Kampong Glam,  Singapore</h2>
          </div>
          <div className="text-[#FFFFFF]  w-fit mx-auto  space-y-5 ">
            <p>The International Conference on Software Systems Development and Data Analysis <br />
              brings together researchers, practitioners, educators, and industry professionals from <br />
              around the globe.</p>
            <p>The International Conference on Software Systems Development and Data Analysis is <br />
              dedicated to fostering innovation and collaboration at the intersection of software engineering <br />
              and data science.</p>
          </div>
          <div className="flex justify-around  max-w-xl mx-auto text-2xl font-bold">
            <div className=" "><button className="cursor-pointer text-[#093FB4] bg-[#B2C7F6] px-10 py-5 rounded-full ">Learn More</button></div>
            <div className=" "><button className="cursor-pointer bg-[#093FB4] text-[#B2C7F6] px-10 py-5 rounded-full">Register</button></div>
          </div>
        </div>
      </div>

      <div className="bg-[#093FB4]" >
        <div className="">
          <div className="grid grid-cols-2  py-20">
            <div className="flex justify-center max-w-[650px] mx-auto">
              <img src="/image/Group 152.png" className="" alt="" />
            </div>
            <div className="">
              <div className="text-[#093FB4] bg-[#B2C7F6]    text-4xl font-bold px-10 py-5 rounded-l-full">About the Conference </div>
              <div className="text-[#FFFFFF]">The International Conference on Software Systems Development and Data Analysis (ICSSDDA) is a premier global forum dedicated to advancing the fields of software engineering, data science, and their powerful convergence in real-world systems.</div>
              <div className="text-[#FFFFFF]">
                <h1>Multidisciplinary Tracks</h1>
                <p> It’s covering Software Engineering, Artificial Intelligence,<br className="hidden lg:block" /> Machine Learning, and Big Data</p>
              </div>
              <div className="text-[#FFFFFF]">
                <h1>Hands-on Workshops</h1>
                <p>It’s on emerging tools and frameworks (e.g. MLOps, DevOps, AutoML)</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>


  )
}
