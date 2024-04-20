/**
 * 
    "id",
    "title",
    "description",
    "lastUpdateDate",
    "rating",
    "headline",
    "requirements",
    "what_will_learn",
    "who_is_for",
    "badge"
 */
export const getTbdTemplateDescription = (rawTemplateData) => {
    console.log("raw data", rawTemplateData);

    const getLabelTitleStyle = (label) => {
        return `[hr][size=5][color=#F95A37]${label}[/color][/size]`;
    };

    const getValueStyle = (value) => {
        return `[spoiler]${value}[/spoiler]`;
    };

    return [
        `course Link : ${rawTemplateData?.courseUrl}`,
        `Last Update Date : ${rawTemplateData?.lastUpdateDate}`,
        `Rating : ${Number(rawTemplateData?.rating).toFixed(1)}`,
        getLabelTitleStyle("What You Will Learn:"),
        getValueStyle(rawTemplateData?.what_will_learn),
        getLabelTitleStyle("Requirements:"),
        getValueStyle(rawTemplateData?.requirements),
        getLabelTitleStyle("Who is for:"),
        getValueStyle(rawTemplateData?.who_is_for),
        getLabelTitleStyle("Description:"),
        getValueStyle(rawTemplateData?.description),
        getLabelTitleStyle("Screenshots:"),
        getValueStyle("screenshot here"),
        getLabelTitleStyle("Media Info:"),
        getValueStyle("media info here"),
    ].join("\n");
};
