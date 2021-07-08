module.exports = {
  reddit_singel_post: (link) =>{
    const axios = require('axios')
    return new Promise(function(resolve, reject){
      console.log(link)
      axios.get(link+'.json')
      .then(response =>{
        var result = response.data;
        resolve(result[0].data.children[0].data)
      })
      .catch(error => {
        this.setState({});
        reject(error)
        throw(error)
      })
    })
  }

}