import axios from "axios";

const apiRequestHeader = {
    authority: "www.udemy.com",
    accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
    "accept-language": "en-US,en;q=0.9",
};

// .component-margin:nth-of-type(3)

const parseCourseData = (data) => {
    const course_metadata = {};

    const { curriculum_context, slider_menu, sidebar_container } = data;
    const {
        componentProps: {
            introductionAsset: { images },
        },
    } = sidebar_container;
    const { data: _course_info } = slider_menu;
    const { sections, num_of_published_lectures } = curriculum_context.data;
    //copy all the prop to meta object
    for (let key in _course_info) {
        if (Object.hasOwn(_course_info, key)) {
            course_metadata[key] = _course_info[key];
        }
    }
    //add best banner img link
    course_metadata.banner = images[Object.keys(images).pop()];

    // parse the course info
    course_metadata.total_lecture = num_of_published_lectures;
    course_metadata.toal_sections = sections.length;
    let total_video_lecture = 0;
    course_metadata.sections = sections.map((sec) => {
        const { index, items, lecture_count, title } = sec;

        const video_lectures = items.filter(
            (v) => v.video_asset_id && v.icon_class.includes("udi-video")
        );
        total_video_lecture += video_lectures.length;
        return {
            section_title: title,
            lecture_count,
            index,
            video_lecture_count: video_lectures.length,
            video_lectures,
        };
    });
    course_metadata.total_video_lecture = total_video_lecture;
    return course_metadata;
};

const udemySearch = async (searchQuery) => {
    try {
        const {data} = await axios.get(
            "https://www.udemy.com/api-2.0/search-courses/",
            {
                params: {
                    src: "ukw",
                    q: searchQuery,
                    skip_price: "true",
                },
                headers: {
                    authority: "www.udemy.com",
                    accept: "application/json, text/plain, */*",
                    referer: "https://www.udemy.com/courses/search/?src=ukw",
                },
            }
        );
        return data;
    } catch (error) {
        console.log(error);
        return undefined;
    }
};

const udemyResultFilter = async (searchQuery,count=3)=>{
    const searchResult = await udemySearch(searchQuery);
    if(!searchResult){
        return undefined;
    }
    const {courses} = searchResult;
    const filteredCourses = courses.filter(v => v['_class']=='course')
                        .slice(0,count).map( v => {
                        const {url,id,title,num_asset_video_i} = v;
                        return {url,id,title,num_asset_video_i};
                    });
    return filteredCourses;
};

const getCourseData = async (courseId) => {
    try {
        const { data } = await axios.get(
            `https://www.udemy.com/api-2.0/course-landing-components/${courseId}/me/?components=curriculum_context,instructor_links,slider_menu,sidebar_container`,
            { headers: apiRequestHeader }
        );
        const good_data = parseCourseData(data);
        return good_data;
    } catch (error) {
        // console.log(error.message);
        return undefined;
    }
};

export const getSearchResult  = async (query)=>{
    try {
        const [res] = await udemyResultFilter(query,1);
        const { id} = res;
        const rawData =await getCourseData(id);
        // console.log(rawData);
        return rawData;
        
    } catch (error) {
        console.log(error.message);
        return undefined;
    }


};


