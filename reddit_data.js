const axios = require('axios');
const fs = require('fs');

function get_post(sub, limet, time_filter){
  axios.get('https://www.reddit.com/r/'+ sub + '/.json?limit=' + limet + '&time_filter=' + time_filter)
    .then(response => {
      console.log(response.data)
      res_data = response.data
      var file;
      fs.readFile('posts.json', (err, data) => {
        if(err) {
          console.log(err)
          return
        }
        file = data;
      })
      


      
      eval("file." + sub + "= res_data.data.children.data")


      try{
        fs.writeFile('posts.json', (file))
      }catch(err){
        console.error(err)
      }












    })
    .catch(error => {
      console.log(error);
    });
}



get_post("ProRevenge", "10", "day")