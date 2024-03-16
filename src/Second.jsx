import React from 'react';
import { Link } from 'react-router-dom';

const Second = () => {

  // function handleTable(){
  //   <Link to='/table'></Link>
  // }
  // function handleDashboard(){
  //   <Link to='/dashboard'>/Link>
  // }
  // function handleHome(){
  //   <Link to='/'>/Link>
  // }

  return (
    // <div>
    //   <button type="submit" onClick={handleHome}>Home/button>
    //   <button type="submit" onClick={handleTable}>Table</button>
    //   <button type="submit" onClick={handleDashboard}>Dashboard</button>
    // </div>
    <div>
    <button type="button"><Link to='/'>Home</Link></button>
    <button type="button"><Link to='/table'>Table</Link></button>
    <button type="button"><Link to='/dashboard'>Dashboard</Link></button>
     </div>
  );
}

export default Second;
