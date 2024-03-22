import { create } from "zustand";
import { produce } from "immer";

const stateStore = create((set) => ({
    //states
    state: {
        viewDetails: {
            showVideoOnly: false,
            showOnlyVideoCount: true,
            showAllFileTypeCount: false,
        },
    },
    // reducers
    reducer: {
        viewDetails: {
            toggleVideoOnly: () => {
                set(
                    produce(({ state }) => {
                        state.viewDetails.showVideoOnly =
                            !state.viewDetails.showVideoOnly;
                    })
                );
            },
            toggleVideoCount: () => {
                set(
                    produce((state) => {
                        state.viewDetails.showOnlyVideoCount =
                            !state.viewDetails.showOnlyVideoCount;
                    })
                );
            },
            toggleFileTypeCount: () => {
                set(
                    produce((state) => {
                        state.viewDetails.showAllFileTypeCount =
                            !state.viewDetails.showAllFileTypeCount;
                    })
                );
            },
        },
    },
    effect: {},
}));
export default stateStore;
