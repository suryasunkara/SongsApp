import React from 'react'
import {connect} from 'react-redux'

const SongDetail=({song})=>{
  if(!song){
    return <div>  Select song to play</div>
  }
  console.log(song.title,"this is selected one");
  return(
    <div>
      <h3>Now playing:</h3>
      <h4><marquee>{song.title}</marquee></h4> 
    </div>
  )

};

const mapStateToProps=(state)=>{
  console.log(state,"swdsass");
  return {
  song:state.selectedsong
  }
}

export default connect(mapStateToProps)(SongDetail)