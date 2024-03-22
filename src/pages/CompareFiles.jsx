import { produce } from "immer";
import { create } from "zustand";
import GearSettings from "../components/GearSettings";

// Create your store, which includes both state and (optionally) actions

// In consuming app
function CompareFiles() {
    return (
        <div className="relative border-2 border-red-600 w-full h-[620px]">
            <h1>CompareFiles</h1>
            <br />
            <div className="absolute border border-green-400 bottom-0 right-0">
                <GearSettings position="top-left" className={`-left-[466px]`}>
                    <div className="w-[456px] bg-slate-700 rounded-md">
                        <div className="flex  py-2 px-8 gap-2">
                            <input type="checkbox" name="es" id="" />
                            <p className="w-full">this is test </p>
                        </div>
                        <div className="flex  py-2 px-8 gap-2">
                            <input type="checkbox" name="es" id="" />
                            <p className="w-full">this is test </p>
                        </div>
                    </div>
                </GearSettings>
            </div>
        </div>
    );
}
export default CompareFiles;
