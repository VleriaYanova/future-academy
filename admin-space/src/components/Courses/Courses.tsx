import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useDeleteCourseMutation, useGetAllCoursesQuery, useUpdateCourseMutation } from '../../redux/cApi';
import { Course } from './../../types/courseTypes';


const Courses = () => {
    const { data } = useGetAllCoursesQuery();
    const [deleteCourse] = useDeleteCourseMutation();
    const [updateCourse] = useUpdateCourseMutation();
    const [isOpen, setOpen] = useState(false);
    const handleDeleteCourse = async (id: any) => {
        await deleteCourse(id);
    }

    const handleChangeCourse = async (id: any, body: Course) => {
        await updateCourse(id)
        setOpen(!isOpen)
    }

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
                    className="bg-gray_4 w-72 px-8 text-gray_1 text-sm rounded-2xl block p-2.5 focus:border-none  focus:outline-none placeholder:text-white" />
            </div>
            <div className='mt-4 '>
                <table className='w-full items-center text-lg'>
                    <tr className='bg-gray_3 border-b border-gray_4'>
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
                        return <tr className='bg-gray_3 border-b border-gray_4'>
                            <th>
                                {/* <input type='checkbox'/> */}
                                <button onClick={() => handleDeleteCourse(course.id)}>delete</button>
                                <br />
                                <button onClick={() => handleChangeCourse(course.id, course)}>Change</button>
                            </th>
                            <th>
                                {course.id}
                                {course.name}
                                <br />
                                <input style={isOpen ? { display: 'none' } : { display: 'block' }} type="text" placeholder='name' />
                                <br />

                            </th>
                            <th>
                                {course.categories}
                                <br />
                                <input style={isOpen ? { display: 'none' } : { display: 'block' }} type="text" placeholder='categories' />
                                <br />
                            </th>
                            <th>
                                {course.authors}
                                <br />
                                <input style={isOpen ? { display: 'none' } : { display: 'block' }} type="text" placeholder='authors' />
                                <br />
                            </th>
                            <th>
                                {course.description}
                                <br />
                                <input style={isOpen ? { display: 'none' } : { display: 'block' }} type="text" placeholder='description' />
                                <br />
                            </th>
                        </tr>
                    })}
                </table>
            </div>
        </div>
    );
};

export default Courses;