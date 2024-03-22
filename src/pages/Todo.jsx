import StatWidget from "../components/StatWidget";



function Todo({filedata}) {

  // const {announce,created} = filedata;
  return (
    <div className="flex-col gap-3 border-2 border-red-300">
      <StatWidget datavalue={454} datatitle={"this is title"} color={'success'}/>
      <StatWidget datavalue={454} datatitle={"this is title"} color={'failed'}/>
      <StatWidget datavalue={454} datatitle={"this is title"} color={'warn'}/>
      <StatWidget datavalue={454} datatitle={"this is title"} color={'s'}/>
    </div>
  );
}

export default Todo;