import React from 'react';
import Search from '../components/Search';
import { getSearchResult } from '../utils/Udemy.utility';


function Livedetails() {

  const searcher =async (ev)=>{
      const res = await getSearchResult(ev);
      console.log(res);
  };

  return (
    <div>
        <Search searchBarText={"Search"} searchButtonText={"search"} runSearch={searcher}/>
    </div>
  );
}

export default Livedetails;