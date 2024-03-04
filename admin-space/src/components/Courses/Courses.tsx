import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { useDeleteCourseMutation, useGetAllCoursesQuery, useUpdateCourseMutation } from '../../redux/cApi';
import { Course } from '../../types/ICourse';
import ArrowUp from '../../ui-kit/arrowUp.svg';
import ArrowDown from '../../ui-kit/arrowDown.svg';
const Courses = () => {
    const [deleteCourse] = useDeleteCourseMutation();
    const [sortType, setSortType] = useState('');
    const [sortDirection, setSortDirection] = useState(true)
    let params = '';
    params = `?orderBy=${sortType}&direction=${sortDirection ? 'asc' : 'desc'}`;

    const { data } = useGetAllCoursesQuery(params);

    const handleDeleteCourse = async (id: number) => {
        await deleteCourse(id);
    }

    const handleSorting = (event: any) => {
        const value = event.target.textContent.toLowerCase()
        setSortType(value);
        if(sortType == value){
            console.log(123);
            
            setSortDirection(!sortDirection)
        }else{
            setSortDirection(true)
        }
        
        
    }

    return (
        <div className='font-bold text-4xl pt-10 dark:bg-dark_1 h-screen z-10'>
            <div className='flex items-end gap-1'>
                <p className='dark:text-white'>Courses</p>
                <span className='text-lg text-gray_4'>({data && data.items.length})</span>
            </div>
            <div className='flex mt-5 gap-4 items-center'>
                <Link to="/addcourse" className='px-20 py-3 bg-blue rounded-2xl font-semi text-white text-lg'>
                    Add<span>+</span>
                </Link>
                <input type="text" placeholder={'find...'}
                    className="bg-gray_4 w-72 px-8 text-gray_1 text-sm rounded-2xl block p-2.5 focus:border-none  focus:outline-none placeholder:text-white" />
            </div>
            <div className='mt-4 '>
                <table className='w-full items-center text-lg'>
                    <tr className='bg-gray_3 border-gray_4 h-10 '>
                        <th >
                            <input type='checkbox' />
                        </th>
                        <th>
                            <div className='flex items-center justify-center'>
                                <p className='cursor-pointer' onClick={handleSorting}>Name</p>
                                {sortType == 'name'  && sortDirection ? <ArrowUp /> : sortType == 'name'  && !sortDirection ? <ArrowDown/> : ''}
                            </div>

                        </th>
                        <th>
                            <div className='flex items-center justify-center'>
                                <p className='cursor-pointer' onClick={handleSorting}>Categories</p>
                                {sortType == 'categories' && sortDirection ? <ArrowUp /> : sortType == 'categories' && !sortDirection ? <ArrowDown/> : ''}
                            </div>
                        </th>
                        <th>
                            <div className='flex items-center justify-center'>
                                <p className='cursor-pointer' onClick={handleSorting}>Authors</p>
                                {sortType == 'authors' && sortDirection ? <ArrowUp /> : sortType == 'authors' && !sortDirection ? <ArrowDown/> : ''}
                            </div>
                        </th>
                        <th>
                            <div className='flex items-center justify-center'>
                                <p className='cursor-pointer' onClick={handleSorting}>Description</p>
                                {sortType == 'description' && sortDirection ? <ArrowUp /> : sortType == 'description'  && !sortDirection ? <ArrowDown/> : ''}
                            </div>
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