import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useDeleteCourseMutation, useGetAllCoursesQuery, useUpdateCourseMutation } from '../../redux/cApi';
import { Course } from './../../types/courseTypes';


const Courses = () => {
    const { data } = useGetAllCoursesQuery();
    const [deleteCourse] = useDeleteCourseMutation();

    const handleDeleteCourse = async (id: number) => {
        await deleteCourse(id);
    }

    return (
        <div className='font-bold text-4xl pt-10 dark:bg-dark_1 h-screen z-10'>
            <div className='flex items-end gap-1'>
                <p className='dark:text-white'>Courses</p>
                <span className='text-lg text-gray_4'>({data && data.items.length})</span>
            </div>
            <div className='flex mt-5 gap-4'>
                <Link to="/addcourse" className='px-20 py-3 bg-blue rounded-2xl font-semi text-white text-lg'>
                    Add<span>+</span>
                </Link>
                <input type="text" placeholder={'find...'}
                    className="bg-gray_4 w-72 px-8 text-gray_1 text-sm rounded-2xl block p-2.5 focus:border-none  focus:outline-none placeholder:text-white" />
            </div>
            <div className='mt-4 '>
                <table className='w-full items-center text-lg'>
                    <tr className='bg-gray_3 border-gray_4'>
                        <th>
                            <input type='checkbox' />
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
                            Description
                        </th>
                    </tr>
                    {data?.items.map((course: Course) => {
                        return <tr className='bg-gray_1 border  border-gray_4'>
                            <th className='border  border-gray_4'>
                                <input type='checkbox' />
                                {/* <button onClick={() => handleDeleteCourse(course.id!)}>delete</button>
                                <br />
                                <Link to={`/detailcourse/${course.id}`}>
                                    Change
                                </Link> */}
                            </th>
                            <th>
                                {course.name}
                            </th>
                            <th>
                                {course.categories}
                            </th>
                            <th>
                                {course.authors}
                            </th>
                            <th>
                                {course.description}
                            </th>
                        </tr>
                    })}
                </table>
            </div>
        </div>
    );
};

export default Courses;