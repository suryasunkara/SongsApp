import React from 'react'
import SongList from './SongList'
import SongDetails from './SongDetail'

const App=()=>{
  return (
  <div><div><SongList/>
  <div style={{backgroundColor:'red',
              color:'white',
              height:"100px",
              margin:'30px',
              padding:'20px',
              width:'250px'
}}><SongDetails/></div>
  </div>
  </div>)

}
export default App;