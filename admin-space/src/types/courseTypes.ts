export interface Course{
    id?: number,
    authors: string,
    categories: string,
    description: string,
    tags?: string,
    name: string,
}

export interface GetOneCourse{
    course: Course; 
}