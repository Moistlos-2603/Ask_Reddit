import reddit_top_of_sub_data from './api/reddit_top_of_sub_data';
const axios = require('axios');
const React = require('react');

class TopPosts extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      data: ""
    };
   
  }
  componentDidMount(){
    // this.setState({
    //   data: reddit_top_of_sub_data(this.props.sub, this.props.limet, this.props.time_filter)

    // })
  axios.get('https://www.reddit.com/r/'+ this.props.sub + '/.json?limit=' + this.props.limet + '&time_filter=' + this.props.time_filter)
    .then(response => {
      console.log(response.data)
      this.setState({
        data: response.data[0]
      })
    })
      .catch(error => {
        this.setState({});
        console.log(error);
    });


    // reddit_top_of_sub_data(this.props.sub, this.props.limet, this.props.time_filter)
  }

  render(){


    console.log(this.state.data[0])

    const res_data = this.state.data;    
    // return(
    //   <h1>dsf</h1>
    // )
    return(
      <div>
         {res_data.children.map(children => {
          return(
          <div>
            <h1>{children.data.title}</h1>
            <p>{children.data.selftext}</p>
          </div>
          )
        })} 
        <h1>test</h1>
      </div>
    )
  }
}

export {TopPosts}