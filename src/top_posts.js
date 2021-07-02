import {PostItem} from './post_item';
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
      var result = await api.reddit_top_of_sub_data(this.props.sub , this.props.limet , this.props.time_filter)
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

    window.idfk = this.state.data;   


    return(
      <div>
         {res_data.map(children => {
          return(
            <PostItem data={children.data} key={children.data.id} />

          )
        })} 
      </div>
    )
  }
}

export {TopPosts}