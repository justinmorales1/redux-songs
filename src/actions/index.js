
//Action Creator
export const selectSong = (song) => {
    //Action that is getting returned. Its just an object.
    return {
        type: "SONG_SELECTED",
        payload: song,
    }
};