import { useEffect, useState } from "react";
import { Tab } from "@headlessui/react";
import TbdTemplate from "../components/TbdTemplate";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import AxiosClient from "../lib/AxiosClient";
import { getCourseMetaData } from "../services/dataFetcher";
import Loader from "../components/Loader";
import RawTemplate from "../components/RawTemplate";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

const minimumUrlLength = "https://www.udemy.com/course/".length + 1;
const defaultvalue =
    "https://www.udemy.com/course/unreal-engine-5-the-complete-beginners-course/";
const Markdown = () => {
    const controller = new AbortController();
    const [courseMetaData, setCourseMetaData] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [courseUrl, setCourseUrl] = useState(defaultvalue);
    const [diableTabs, setDisableTabs] = useState(
        courseUrl.length < minimumUrlLength
    );

    let categories = {
        BBCode: {
            id: 1,
            content: <TbdTemplate data={courseMetaData} />,
        },
        Raw: {
            id: 2,
            content: <RawTemplate data={courseMetaData} />,
        },
    };

    const handleUrlInput = (e) => {
        setCourseUrl(e.target.value);
        if (e.target.value.length < minimumUrlLength) {
            setDisableTabs(true);
        } else {
            setDisableTabs(false);
        }
    };

    const handleUrlInputButton = async () => {
        try {
            setIsLoading(true);
            const { data } = await getCourseMetaData({
                url: courseUrl,
                signal: controller.signal,
            });
            setCourseMetaData({ ...data, courseUrl: courseUrl });
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        return () => {
            controller.abort();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (isLoading)
        return (
            <div className="w-full h-full flex justify-center items-center">
                <Loader />
            </div>
        );

    return (
        <div className="w-full h-full px-4 border border-red-900 overflow-y-auto pt-2">
            <Tab.Group>
                <div className="flex w-full gap-2">
                    <div className="grow-[3] flex gap-2 items-center">
                        <input
                            value={courseUrl}
                            onChange={handleUrlInput}
                            type="text"
                            placeholder="Enter course URL"
                            className=" bg-transparent grow rounded-lg border border-stroke py-1.5 px-5 text-dark-6 outline-none transition focus:border-accent  disabled:cursor-default disabled:bg-gray-2 disabled:border-gray-2"
                        />
                        <button
                            onClick={handleUrlInputButton}
                            disabled={courseUrl.length < minimumUrlLength}
                            className="text-accent  w-fit h-fit py-1.5 hover:bg-accent/[.3] border-2 border-accent/[.8] hover:text-white  rounded-md  px-7 text-center text-base font-medium disabled:border-gray-500 disabled:cursor-not-allowed disabled:text-dark-5 text-nowrap"
                        >
                            Get Data
                        </button>
                    </div>
                    <div className="grow-[1]">
                        <Tab.List className="flex mx-auto gap-4 rounded-xl bg-blue-900/20 p-1">
                            {Object.keys(categories).map((category) => (
                                <Tab
                                    disabled={diableTabs}
                                    key={category}
                                    className={({ selected }) =>
                                        classNames(
                                            "w-full rounded-lg py-2.5 text-sm font-medium leading-5 focus:outline-none disabled:bg-black disabled:border disabled:border-gray-500 disabled:cursor-not-allowed",
                                            selected
                                                ? "bg-[#8710d8]/[0.9] shadow"
                                                : "hover:bg-white/[0.12] bg-slate-600 "
                                        )
                                    }
                                >
                                    {category}
                                </Tab>
                            ))}
                        </Tab.List>
                    </div>
                </div>
                {isLoading ? (
                    <div className="w-full h-full flex justify-center items-center">
                        <Loader />
                    </div>
                ) : (
                    <Tab.Panels className="mt-2">
                        {Object.values(categories).map((categoryValue, idx) => (
                            <Tab.Panel key={idx} className={"rounded-xl p-3"}>
                                {categoryValue.content}
                            </Tab.Panel>
                        ))}
                    </Tab.Panels>
                )}
            </Tab.Group>
        </div>
    );
};

export default Markdown;
