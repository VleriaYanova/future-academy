import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useGetCourseByIDQuery, useUpdateCourseMutation } from "../../redux/cApi";
import { Course } from "../../types/ICourse";


const DetailCourse = () => {
    const params = useParams();
    const id = Number(params.id);
    const { data } = useGetCourseByIDQuery(id)
    const [updateCourse] = useUpdateCourseMutation();
    const [authorInputValue, setAuthorInputValue] = useState('')
    const [nameInputValue, setNameInputValue] = useState('')
    const [descriptionInputValue, setDescriptionInputValue] = useState('')
    const [tagsInputValue, setTagsInputValue] = useState('')
    const [categoriesInputValue, setCategoriesInputValue] = useState('')

    useEffect(() => {
        if (data && data.course) {
            setAuthorInputValue(data.course.authors);
            setNameInputValue(data.course.name);
            setDescriptionInputValue(data.course.description);
            setTagsInputValue(data.course.tags!);
            setCategoriesInputValue(data.course.categories)
        }
    }, [data]);

    const handleChangeCourse = async (id: number, body: Course) => {
        await updateCourse({ id, ...body })
    }

    const handleOnClickUpdateButton = () => {
        handleChangeCourse(id, { authors: authorInputValue, name: nameInputValue, tags: tagsInputValue, description: descriptionInputValue, categories: categoriesInputValue })
    }

    return (
        <div className='font-bold text-4xl dark:text-white pt-10 dark:bg-dark_1 h-screen z-10'>
            <div>
                <input type="text" onChange={(e) => {
                    setAuthorInputValue(e.target.value)
                }} value={authorInputValue} />
            </div>
            <div>
                <div>
                    <input type="text" onChange={(e) => {
                        setNameInputValue(e.target.value)
                    }} value={nameInputValue} />
                </div>
            </div>
            <div>
                <div>
                    <input type="text" onChange={(e) => {
                        setDescriptionInputValue(e.target.value)
                    }} value={descriptionInputValue} />
                </div>
            </div>
            <div>
                <div>
                    <input type="text" onChange={(e) => {
                        setTagsInputValue(e.target.value)
                    }} value={tagsInputValue} />
                </div>
            </div>
            <div>
                <div>
                    <input type="text" onChange={(e) => {
                        setCategoriesInputValue(e.target.value)
                    }} value={categoriesInputValue} />
                </div>
            </div>
            <Link to={'/courses'} onClick={handleOnClickUpdateButton} className="px-20 py-3 bg-blue rounded-2xl font-semi text-white text-lg">update</Link>
        </div>
    );
}

export default DetailCourse;