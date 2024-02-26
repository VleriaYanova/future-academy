import React from 'react';

const AddCourse = () => {
    return (
        <div className=' dark:bg-dark_1 h-full font-bold text-2xl dark:text-white pt-5'>
            <div className='w-3/3 h-auto mx-5 rounded-xl'>
                <div className='bg-blue rounded-t-xl py-2 px-5'>
                    <p>Add new course</p>
                </div>
                <div className='flex flex-wrap items-center mt-5 px-40'>
                    <div className='flex w-1/2 pr-4 mb-2 items-center'>
                        <label className='w-1/2' htmlFor="">Name</label>
                        <input className='w-80 border-2 rounded-md border-gray_3 focus:border-gray_4 focus:outline-none' type="text" placeholder={'Course name'}/>
                    </div>
                    <div className='flex w-1/2 pr-4 mb-2 items-center'>
                        <label className='w-1/2' htmlFor="">Categories</label>
                        <input className='w-80 border-2 rounded-md border-gray_3 focus:border-gray_4 focus:outline-none' type="text" placeholder={'Course categories'}/>
                    </div>
                    <div className='flex w-1/2 pr-4 mb-2 items-center'>
                        <label className='whitespace-nowrap w-1/2 ' htmlFor="">Course author</label>
                        <input className='w-80 border-2 rounded-md border-gray_3 focus:border-gray_4 focus:outline-none' type="text" placeholder={'Course author'}/>
                    </div>
                    <div className='flex w-1/2 pr-4 mb-2 items-center'>
                        <label className='w-1/2' htmlFor="">Description</label>
                        <input className='w-80 border-2 rounded-md border-gray_3 focus:border-gray_4 focus:outline-none' type="text" placeholder={'Course description'}/>
                    </div>
                    <div className='flex w-1/2 pr-4 mb-2 items-center'>
                        <label className='w-1/2' htmlFor="">Tags</label>
                        <input className='w-80 border-2 rounded-md border-gray_3 focus:border-gray_4 focus:outline-none' type="text" placeholder={'Course tags'}/>
                    </div>
                </div>
                <div className='flex mb-5 w-full justify-end'>
                    <button className='px-20 py-3 bg-blue rounded-2xl font-semi text-white text-lg'>Add</button>
                </div>
            </div>
        </div>
    );
};

export default AddCourse;