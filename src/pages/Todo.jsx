import StatWidget from "../components/StatWidget";

function Todo({ filedata }) {
    const env = import.meta.env.MODE;

    // const {announce,created} = filedata;
    return (
        <div className="flex-col gap-3 border-2 border-red-300">
            <p> {env} </p>
            <StatWidget
                datavalue={454}
                datatitle={"this is title"}
                color={"success"}
            />
            <StatWidget
                datavalue={454}
                datatitle={"this is title"}
                color={"failed"}
            />
            <StatWidget
                datavalue={454}
                datatitle={"this is title"}
                color={"warn"}
            />
            <StatWidget
                datavalue={454}
                datatitle={"this is title"}
                color={"s"}
            />
        </div>
    );
}

export default Todo;
