
 //const reddit_top_of_sub_data = function reddit_top_of_sub_data(sub, limet, time_filter){
  


 module.exports = {reddit_top_of_sub_data: (sub, limet, time_filter) => {
  const axios = require('axios');
  return new Promise(function(resolve, reject){
    console.log('https://www.reddit.com/r/'+ sub + '/top/.json?limit=' + limet + '&t=' + time_filter)
    axios.get('https://www.reddit.com/r/'+ sub + '/top/.json?limit=' + limet + '&t=' + time_filter)
    .then(response => {
      console.log(response.data)
      var result = response.data;
      resolve(result.data.children);

    })
      .catch(error => {
        this.setState({});
        reject(error)
        throw(error);
    });

  })



  
}}

//reddit_top_of_sub_data('ProRevenge', 10, "day")

