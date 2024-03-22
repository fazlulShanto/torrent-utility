import stateStore from "../utils/store";
const useStateReducer = () => {
    return stateStore((state) => state.reducer);
};

export default useStateReducer;
