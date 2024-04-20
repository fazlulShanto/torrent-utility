import CopyBlock from "./CopyBlock";
import EmptyData from "./EmptyData";

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

const RawTemplate = ({ data }) => {
    if (!data || typeof data !== "object" || !data?.id) {
        return <EmptyData />;
    }

    return (
        <div className="flex h-auto w-full flex-col gap-6">
            {Object.keys(data).map((key) => {
                return <CopyBlock key={key} label={key} value={data[key]} />;
            })}
        </div>
    );
};

export default RawTemplate;
