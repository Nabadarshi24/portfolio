import React from 'react';

const Education = () => {
    return (
        <div>
            <h2 className='text-xl lg:text-3xl text-white'>Education</h2>
            <div className="w-10 border-t-4 mt-3 border-orange-400"></div>


            <div className='mt-8 text-white'>
                {/* University Life */}
                <div className='flex items-start gap-4 sm:gap-10'>
                    <p className='border h-3 w-3 shrink-0 mt-1.5 rounded-full bg-orange-400'></p>
                    <div>
                        <h2 className='text-lg'>Port City International University & European University of Bangladesh</h2>
                        <p className='text-gray-200'>BSc in Computer Science and Engineering (December 2021)</p>
                        <p className='text-orange-300'>Grade: 3.25 / 4.00</p>
                        <p className='text-gray-300'>Location: Dhaka</p>
                    </div>
                </div>

                {/* College Life */}
                <div className='flex items-start gap-4 sm:gap-10 mt-10'>
                    <p className='border h-3 w-3 shrink-0 mt-1.5 rounded-full bg-orange-400'></p>
                    <div>
                        <h2 className='text-lg'>Govt. Bangla College</h2>
                        {/* <p className='text-gray-200'>Higher Secondary Certificate (HSC) (Sept 2017 - April 2019)</p> */}
                        <p className='text-orange-300'>Grade: 3.20 / 5.00</p>
                        <p className='text-gray-300'>Location: Dhaka</p>
                    </div>
                </div>

                {/* School life */}
                <div className='flex items-start gap-4 sm:gap-10 mt-10'>
                    <p className='border h-3 w-3 shrink-0 mt-1.5 rounded-full bg-orange-400'></p>
                    <div>
                        <h2 className='text-lg'>Khagrachari Govt. High School</h2>
                        {/* <p className='text-gray-200'> Secondary School Certificate (SSC) (Jan 2015 - Feb 2017)</p> */}
                        <p className='text-orange-300'>Grade: 4.56 / 5.00</p>
                        <p className='text-gray-300'>Location: Khagrachari</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Education;