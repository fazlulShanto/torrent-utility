/* eslint-disable react/jsx-key */
import React from "react";

function RandomBadge({text}) {
    const BadgeList = [
        <span className="bg-blue-100 block text-blue-800 text-lg font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
            {text}
        </span>,
        <span className="bg-gray-100 block text-gray-800 text-lg font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
            {text}
        </span>,
        <span className="bg-red-100 block text-red-800 text-lg font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">
            {text}
        </span>,
        <span className="bg-green-100 block text-green-800 text-lg font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
            {text}
        </span>,
        <span className="bg-yellow-100 block text-yellow-800 text-lg font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">
            {text}
        </span>,
        <span className="bg-indigo-100 block text-indigo-800 text-lg font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-indigo-900 dark:text-indigo-300">
            {text}
        </span>,
        <span className="bg-purple-100 block text-purple-800 text-lg font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300">
            {text}
        </span>,
        <span className="bg-pink-100 block text-pink-800 text-lg font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-pink-900 dark:text-pink-300">
            {text}
        </span>,
    ];
    

    const randomIdx = Math.floor(Math.random() * BadgeList.length);

    return BadgeList[randomIdx];
}

export default RandomBadge;
