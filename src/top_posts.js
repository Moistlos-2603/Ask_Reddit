const api = require('./api/reddit_top_of_sub_data');
// const axios = require('axios');
const React = require('react');

class TopPosts extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      data: []
    };
   
  }
  componentDidMount(){

    const get_get_api =  async () => {
      var result = await api.reddit_top_of_sub_data("ProRevenge", 10 ,"day")
      console.log("result: ")
      console.log(result)
      this.setState({
        data: await result
      })
    }
    get_get_api();
  }

  render(){
    var res_data = this.state.data;   
    // const res_data = "sdf"

    console.log("idfk:")
    window.idfk = this.state.data;   


    // return(
    //   <div>
    //     <h1>{res_data}</h1>
    //     <div>ts</div>
    //   </div>
    // )
    return(
      <div>
        <h1>test</h1>
         {res_data.map(children => {
          return(
          <div>
            <h1>{children.data.title}</h1>
            {children.data.selftext_html}
          </div>
          )
        })} 
      </div>
    )
  }
}

export {TopPosts}