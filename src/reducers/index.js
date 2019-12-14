import {combineReducers} from 'redux'

const songsReducer=()=>{
  return[
    {title:'hello ramantey',duration:'04:12'},
    {title:'rooba rooba',duration:'03:02'},
    {title:'orange',duration:'04:55'},
    {title:'sidney nagaram',duration:'02:59'}
  ];
};

const selectedSongReducer=(selectedSong=null,action)=>{
  if(action.type==="SELECTED_SONG"){
    return  action.payload;
  }
  return selectedSong
}

export default combineReducers({
  songs:songsReducer,
  selectedsong:selectedSongReducer,
});