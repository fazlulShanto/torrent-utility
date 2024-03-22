import stateStore from "../utils/store";
const useStore = (cb) => {
    const state = stateStore((state) => state.state);
    if (typeof cb !== "function") {
        return state;
    }
    return cb(state);
};

export default useStore;
