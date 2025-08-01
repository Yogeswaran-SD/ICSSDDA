import React from 'react'

export default function PaperSubmission() {
  return (
    <>
      <div className="bg-[url('/image/papersubmit.jpg')] h-[400px] relative">
        {/* <div  className="bg-[#B2C7F6]/[25%] items-center absolute   " > */}
        <div className='hanu-bold text-[48px] relative flex justify-center items-center h-full text-white  '>
          <h1 className=''>Paper Submission</h1>
        </div>
        {/* </div> */}
      </div>

      {/* <section className="h-[300px] bg-center bg-cover relative" style={{ backgroundImage: "url('/images/servicepage/servicehero.png')" }}>
        <div className="absolute inset-0 bg-[#000000] opacity-65 h-[300px]"></div>
        <div className="relative flex justify-center items-center h-full">
          <h2 className="inter-bold text-[#FFD739] md:text-[50px] text-[30px] ">Book Rooms</h2>
        </div>
      </section> */}

      <section className='max-w-full mx-[150px] lg:py-10 space-y-5'>
        <div className='hanu-bold text-[30px] text-[#093FB4]'>
          <h2>Paper Submission Guidelines</h2>
        </div>
        <div className='pop-medium text-[16px]'>
          <p>Authors are invited to submit original research papers related to software systems development, data analysis, and related fields. <br />
            Please follow the instructions below to ensure a smooth submission process:</p>
        </div>
      </section>

      <section className='max-w-full mx-[150px] lg:py-10'>
        <div className='grid lg:grid-cols-2 '>
          <div className='space-y-5'>
            <div className='hanu-bold text-[30px] text-[#093FB4]'>
              <h2>Important Information for Authors:</h2>
            </div>
            <div className='pop-medium text-[16px] lg:pl-10 '>
              <ul className='list-disc space-y-4'>
                <li>All submissions will go through a double-blind peer review to ensure fairness <br />and academic integrity.</li>
                <li>One author must register and attend the conference to present the accepted paper.</li>
                <li>Papers will be checked for plagiarism—originality is strictly required.</li>
                <li>Do not submit the same paper to multiple tracks or conferences.</li>
                <li>Presentation at the conference is mandatory for accepted papers to be included <br />in the proceedings.</li>
                <li>Accepted papers will be published in the official conference proceedings.</li>
              </ul>
            </div>
          </div>
          <div className='items-center text-center'>
            <img src="public/image/image 20.png" alt="Loading" className='md:h-100 md:w-100 lg:h-100 lg:w-200 text-center items-center object-cover rounded-2xl' />
          </div>
        </div>
      </section>


      <section className='max-w-4xl mx-auto'>
        <form action="" className='bg-[#093FB4] rounded-[8%]'>
          <div className='text-[38px] hanu-bold text-white text-center py-5 mt-10'> <h1>Submit Your Paper</h1></div>
          <div className='max-w-full mx-10 mt-5'>
            <div className='grid grid-cols-3 gap-2  '>
              <div className='flex flex-col gap-9'>
                <label htmlFor="title" className='text-white pop-regular text-[16px]'>Paper Title</label>
                <label htmlFor="institute" className='text-white pop-regular text-[16px] '>Institution Name</label>
                <label htmlFor="author" className='text-white pop-regular text-[16px]'>Author's Full Name</label>
                <label htmlFor="email" className='text-white pop-regular text-[16px] '>Email Address</label>
                <label htmlFor="category" className='text-white pop-regular text-[16px]' >Paper Category</label>

              </div>
              <div className='space-y-[18px] col-span-2'>
                <input type="text" id='title' className='bg-[#B2C7F6] text-[16px] pop-regular rounded-full w-full px-5 py-2 ' placeholder='Enter Your Paper Title' required />
                <input type="text" id='institute' className='bg-[#B2C7F6] text-[16px] pop-regular rounded-full w-full px-5 py-2' placeholder='Enter Your Institution Name' required />
                <input type="text" id='author' className='bg-[#B2C7F6] text-[16px] pop-regular rounded-full w-full px-5 py-2' placeholder="Enter Author's Full Name " required />
                <input type="email" id='email' className='bg-[#B2C7F6] text-[16px] pop-regular rounded-full w-full px-5 py-2' placeholder="Enter Author's Email" required />
                <input type="text" id='category' className='bg-[#B2C7F6] text-[16px] pop-regular rounded-full w-full px-5 py-2' placeholder='Enter Your Paper Category' required />
              </div>
            </div>
            <div className='space-y-10 lg:pt-5'>
              <label htmlFor="file" className='text-white pop-regular text-[16px] '>Upload Paper</label><br />
              <input type="file" id='file' className='bg-[#B2C7F6] px-75  pop-regular rounded-lg w-full  text-white h-40  hanu-bold' placeholder=' ' required />
            </div>
          </div>
          <div className='py-5 text-center'>
            <button type='submit' className='bg-white px-5 py-1 rounded-3xl text-[#093FB4] k2d-bold text-[30px] '>
              Submit
            </button>
          </div>
        </form>
      </section>

      {/* <section className='max-w-2xl mx-auto'>

        <form action="" className='bg-[#093FB4] rounded-2xl'>
          <div className='text-[38px] hanu-bold text-white text-center py-5 mt-10'> <h1>Submit Your Paper</h1></div>
          <div className='flex justify-center'>
            <div className=' space-y-5'>
              <div>
                <label htmlFor="title" className='text-white pop-regular text-[16px]'>Paper Title</label>
                <input type="text" id='title' className='bg-[#B2C7F6] text-[16px] pop-regular rounded-full w-fit mx-auto' placeholder='Enter Your Paper Title' required />
              </div>
              <div>
                <label htmlFor="institute" className='text-white pop-regular text-[16px]'>Institution Name</label>
                <input type="text" id='institute' className='bg-[#B2C7F6] text-[16px] pop-regular rounded-full' placeholder='Enter Your Institution Name' required />
              </div>
              <div>
                <label htmlFor="author" className='text-white pop-regular text-[16px]'>Author's Full Name</label>
                <input type="text" id='author' className='bg-[#B2C7F6] text-[16px] pop-regular rounded-full' placeholder="Enter Author's Full Name " required />
              </div>
              <div>
                <label htmlFor="email" className='text-white pop-regular text-[16px]'>Email Address</label>
                <input type="email" id='email' className='bg-[#B2C7F6] text-[16px] pop-regular rounded-full' placeholder="Enter Author's Email" required />
              </div>
              <div>
                <label htmlFor="category" className='text-white pop-regular text-[16px]'>Paper Category</label>
                <input type="text" id='category' className='bg-[#B2C7F6] text-[16px] pop-regular rounded-full' placeholder='Enter Your Paper Category' required />
              </div>
              <div>
                <label htmlFor="file" className='text-white pop-regular text-[16px]'>Upload Paper</label>
                <textarea type="file" id='file' className='bg-[#B2C7F6] text-[16px] pop-regular rounded-lg' placeholder='Upload ' required ></textarea>
              </div>
            </div>
          </div>
          <div className='py-10 text-center'>
            <button type='submit' className='bg-white px-5 py-3 rounded-3xl text-[#093FB4] k2d-bold text-[30px] '>
              Submit
            </button>
          </div>
        </form>

      </section> */}
    </>
  )
}

