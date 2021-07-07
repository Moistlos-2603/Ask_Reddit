import {PostItem} from './post_item';
const api = require('../api/reddit_top_of_sub_data');
// const axios = require('axios');
const React = require('react');


class TopPosts extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      data: [],
      sub: "",
      limet: undefined,
      time_filter: ""
    };
    this.handleChange_sub = this.handleChange_sub.bind(this);
    this.handleChange_limet = this.handleChange_limet.bind(this);
    this.handleChange_time_filter = this.handleChange_time_filter.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }


  componentDidMount(){
    async function get_get_api (sub , limet , time_filter){
      var result = await api.reddit_top_of_sub_data(sub , limet , time_filter)
      console.log(result)
      this.setState({
        data: await result
      })
    }
    window.get_get_api(this.props.sub , this.props.limet , this.props.time_filter);

    // ProRevenge
    // tailsfromtechsupport
    // TellMeAFact
    // HFY
  }


  handleChange_sub(event){
    this.setState({
      sub: event.target.value
    })
    
  }
  handleChange_limet(event){
    this.setState({
      limet: event.target.value
    })
  }
  handleChange_time_filter(event){
    this.setState({
      time_filter: event.target.value
    })
  }

  handleSubmit(event){

    window.get_get_api(this.state.sub, this.state.limet, this.state.time_filter)
    console.log(this.state.sub, this.state.limet, this.state.time_filter)
    event.preventDefault();
  }

  render(){
    var res_data = this.state.data;   
    // const res_data = "sdf"

    window.idfk = this.state.data;   


    return(
      <div>
  
        <form onSubmit={this.handleSubmit}>
          <label>
            sup:
          </label>
          <input type="text" value={this.state.sub} onChange={this.handleChange_sub}/>

          <label>
            limit:
          </label>
          <input type="text" value={this.state.limet} onChange={this.handleChange_limet}/>

          <label>
            time_filter:
          </label>
          <select value={this.state.time_filter} onChange={this.handleChange_time_filter}>
            <option value={"all"}>all</option>
            <option value={"hour"}>hour</option>
            <option value={"day"}>day</option>
            <option value={"week"}>week</option>
            <option value={"month"}>month</option>
            <option value={"year"}>year</option>
          </select>
          {/* <input type="text" value={this.state.time_filter} onChange={this.handleChange_time_filter}/> */}


          <input type="submit" value="Submit" />
        </form>


         {res_data.map(children => {
          return(
            <PostItem data={children.data} key={children.data.id} />

          )
        })} 
        <div>
          
        </div>
      </div>
    )
  }
}

export {TopPosts}