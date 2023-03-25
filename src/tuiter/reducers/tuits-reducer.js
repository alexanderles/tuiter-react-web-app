import {createSlice} from "@reduxjs/toolkit";
import tuits from '../tuits/tuits.json';

const currentUser = {
    "userName": "NASA",
    "handle": "@nasa",
    "image": "nasa.png",
};

const templateTuit = {
    ...currentUser,
    "topic": "Space",
    "time": "2h",
    "liked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
}


const tuitsSlice = createSlice({
    name: 'tuits',
    initialState: tuits,
    reducers: {
        createTuit(state, action) {
            state.unshift({
                ...action.payload,
                ...templateTuit,
                _id: (new Date()).getTime(),
            })
        },
        deleteTuit(state, action) {
            const index = state
                .findIndex(tuit =>
                    tuit._id === action.payload);
            state.splice(index, 1);
        },
        likeTuitToggle(state, action) {
            const tuit = state.find((tuit) =>
                tuit._id === action.payload._id);
            if (tuit.liked) {
                tuit.liked = false;
                tuit.likes -= 1;
            } else {
                tuit.liked = true;
                tuit.likes += 1;
            }
        }
    }
});

export const {createTuit, deleteTuit, likeTuitToggle} = tuitsSlice.actions
export default tuitsSlice.reducer;