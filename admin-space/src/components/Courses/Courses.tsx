import React from 'react';
import {Link} from "react-router-dom";



const Courses = () => {
    const courseId = 1


    return (
        <div className='font-bold text-4xl dark:text-white pt-10 dark:bg-dark_1 h-screen z-10'>
            <div className='flex items-end gap-1'>
                <p>Courses</p>
                <span className='text-lg text-gray_4'>(228)</span>
            </div>
            <div className='flex mt-5 gap-4'>
                <Link to="/addcourse" className='px-20 py-3 bg-blue rounded-2xl font-semi text-white text-lg'>
                    Add<span>+</span>
                </Link>
                <input type="text" placeholder={'find...'}
                       className="bg-gray_4 w-72 px-8 text-gray_1 text-sm rounded-2xl block p-2.5 focus:border-none  focus:outline-none placeholder:text-white"/>
            </div>
            <div className='mt-4 '>
                <table className='w-full items-center text-lg'>
                    <tr className='bg-gray_3 border-b border-gray_4'>
                        <th>
                            <input type='checkbox'/>
                        </th>
                        <th>
                            Name
                        </th>
                        <th>
                            Categories
                        </th>
                        <th>
                            Authors
                        </th>
                        <th>
                            Tags
                        </th>
                    </tr>
                </table>
            </div>
        </div>
    );
};

export default Courses;