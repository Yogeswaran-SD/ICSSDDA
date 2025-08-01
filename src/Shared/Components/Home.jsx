
export default function Home() {
  return (
    <>
      <div className=" bg-[url(/image/image2.jpg)] h-screen ">
        <div className="pt-50  space-y-10">
          <div className="lg:text-[48px] text-xl text-[#FFFFFF]  bg-[#B2C7F6]/[25%] w-fit mx-auto py-5 lg:px-40 px-15 leading-relaxed hanu-bold"
            style={{ clipPath: 'polygon(10% 0, 100% 0, 90% 100%, 0 100%)' }}>
            <h1 >International Conference on <br className="hidden lg:block" />Software Systems Development and Data Analysis</h1>
          </div>
          <div className="flex max-w-4xl mx-auto justify-around text-center items-center text-[#FFFFFF] lg:text-[28px] k2d-medium ">
            <h2 className="bg-[#093FB4] py-5 px-5 rounded-2xl">15th, November 2025</h2>
            <h2 className="bg-[#093FB4] py-5 px-5 rounded-2xl">Kampong Glam,  Singapore</h2>
          </div>
          <div className="text-[#FFFFFF]  w-fit mx-auto  space-y-5 pop-medium ">
            <p>The International Conference on Software Systems Development and Data Analysis <br />
              brings together researchers, practitioners, educators, and industry professionals from <br />
              around the globe.</p>
            <p>The International Conference on Software Systems Development and Data Analysis is <br />
              dedicated to fostering innovation and collaboration at the intersection of software engineering <br />
              and data science.</p>
          </div>
          <div className="flex justify-around  max-w-xl mx-auto text-[22px] k2d-medium">
            <div className=" "><button className="cursor-pointer text-[#093FB4] bg-[#B2C7F6] px-10 py-3 rounded-full ">Learn More</button></div>
            <div className=" "><button className="cursor-pointer bg-[#093FB4] text-[#B2C7F6] px-12 py-3 rounded-full">Register</button></div>
          </div>
        </div>
      </div>

      <div className="bg-[#093FB4]" >
        <div className="">
          <div className="grid grid-cols-2  py-20">
            <div className="flex justify-center max-w-[650px] mx-auto">
              <img src="/image/Group 152.png" className="" alt="" />
            </div>
            <div className="space-y-10 ">
              <div className="text-[#093FB4] bg-[#B2C7F6] text-[40px] font-bold px-10 py-5 hanu-bold rounded-l-full">About the Conference </div>
              <div className="space-y-10 lg:pl-20">
                <div className="text-[#FFFFFF] text-[16px] pop-medium">The International Conference on Software Systems Development and <br /> Data Analysis (ICSSDDA) is a premier global forum dedicated to <br /> advancing the fields of software engineering, data science, and their <br /> powerful convergence in real-world systems.</div>
                <div className="text-[#FFFFFF] space-y-5 ">
                  <h1 className="text-[25px] k2d-semi">Multidisciplinary Tracks</h1>
                  <p className="pop-medium text-[16px]"> It’s covering Software Engineering, Artificial Intelligence,<br className="hidden lg:block" /> Machine Learning, and Big Data</p>
                </div>
                <div className="text-[#FFFFFF] space-y-5">
                  <h1 className="text-[25px] k2d-semi">Hands-on Workshops</h1>
                  <p className="pop-medium text-[16px]">It’s on emerging tools and frameworks (e.g. MLOps, DevOps, AutoML)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className=" bg-[#B2C7F6]  ">
        <div className="grid grid-cols-2 py-20">
          <div className="lg:mt-10">
            <img src="/image/image 21.png" alt="Loading" />
          </div>
          <div className="max-w-full mx-20 space-y-10">
            <div className=" text-[40px] hanu-bold text-[#093FB4]">
              <h1>Our Mission</h1>
            </div>
            <div className="space-y-5">
              <div className="text-[16px] pop-regular">
                <p>The mission of the International Conference on Software Systems Development and Data Analysis  is to foster innovation, collaboration, and knowledge-sharing at the intersection of software engineering and data science.</p>
              </div>
              <div className="bg-[#093FB4] py-5 px-25 space-y-3 rounded-l-full">
                <h2 className="text-[25px] k2d-bold text-white">Knowledge Sharing</h2>
                <p className="text-[16px] pop-regular text-[#B2C7F6]">Create a global platform for researchers, scholars, and professionals to <br /> exchange ideas and findings in computer science.</p>
              </div>
              <div className="bg-[#093FB4] py-5 px-25 space-y-3 rounded-l-full">
                <h2 className="text-[25px] k2d-bold text-white">Global Collaboration</h2>
                <p className="text-[16px] pop-regular text-[#B2C7F6]">Bring together participants from diverse backgrounds to build partnerships that drive progress and discovery.</p>
              </div>
              <div className="bg-[#093FB4] py-5 px-25 space-y-3 rounded-l-full">
                <h2 className="text-[25px] k2d-bold text-white">Research Excellence</h2>
                <p className="text-[16px] pop-regular text-[#B2C7F6]">Support the development of groundbreaking research that pushes <br /> the boundaries of current technology.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>


  )
}
