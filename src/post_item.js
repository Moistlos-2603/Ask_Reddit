// Element für einzelnen Post 
function PostItem(params){
  const data = params.data
  var idfk = new Date(data.created_utc*1000);
  // var datum =  idfk.getDay() + "." + idfk.getMonth() + "." + idfk.getFullYear() + " " + idfk.getHours() + ":" + idfk.getMinutes();
  var datum = idfk











  // var datum_result = datum(data);
  return(
    <div className="post">
      <h2>{data.title}</h2>
      <p>{datum.getTime}</p>
      {/* <p>{data.created_utc}</p> */}
      <p className="text">{data.selftext}</p>
      <p>{data.score}</p>
    </div>
  )
}

export {PostItem};