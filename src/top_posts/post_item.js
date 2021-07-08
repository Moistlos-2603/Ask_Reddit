// Element für einzelnen Post 
function PostItem(params){
  const data = params.data
  // var idfk = new Date(data.created_utc*1000);
  // var datum =  idfk.getDay() + "." + idfk.getMonth() + "." + idfk.getFullYear() + " " + idfk.getHours() + ":" + idfk.getMinutes();
  // var datum = idfk




  function htmlDecode(input){
    var e = document.createElement('textarea');
    e.innerHTML = input;
    // handle case of empty input
    return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
  }






  // var datum_result = datum(data);
  return(
    <div className="post">
      <h2>{data.title}</h2>
      {/* <p>{datum.getTime}</p> */}
      <p>{data.created_utc}</p>
      
      
      
      <div className="text">{htmlDecode(data.selftext).replace(/&#x200B;/gi, "")}</div>


      <p>{data.score}</p>

    </div>
  )
}

export { PostItem };
