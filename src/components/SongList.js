import React from 'react'
import {connect} from 'react-redux'
import {selectSong} from '../actions'

class SongList extends React.Component{
  render(){
    const renderList=this.props.songs.map((song,index) => {
     return (
       <div key={index}>
     <div>{song.title}</div>
      <button onClick={()=>this.props.selectSong(song)}>{"select"}</button>
      </div>);
    });

    return(<div>{renderList}</div>)
  }
}
 
const mapStateToProps=(state)=>{
  console.log(state);
  return { songs: state.songs};
};

export default connect(mapStateToProps,{selectSong})(SongList)