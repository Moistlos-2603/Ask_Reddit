const { render } = require('@testing-library/react');
const React = require('react');
const api = require('../api/reddit_singel_post')


class SingelPostMitLink extends React.Component{
  constructor(props){
    super(props)
    this.state={
      data: [],
      link: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    window.get_api_data = async(link)=>{
      var result = await api.reddit_singel_post(link)
      // console.log(result)
      this.setState({
        data: await result
      })
    }
  
  }

  handleChange(event){
    this.setState({
      link: event.target.value
    })
  }

  handleSubmit(event){
    window.get_api_data(this.state.link)
    console.log(this.state.link)
    event.preventDefault();
  }
  render(){
    const data = this.state.data

    function htmlDecode(input){
      var e = document.createElement('textarea');
      e.innerHTML = input;
      // handle case of empty input
      return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
    } 


    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>link:</label>
          <input type="text" value={this.state.link} onChange={this.handleChange} ></input>
          <input type="submit" value="Submit" />

        </form>
        <div className="post">
        <h2>{data.title}</h2>
      {/* <p>{datum.getTime}</p> */}
      <p>{data.created_utc}</p>
      
      
      
      <div className="text">{htmlDecode(data.selftext).replace(/&#x200B;/gi, "")}</div>


      <p>{data.score}</p>
        </div>

        
      </div>
    )
  }
}

export{SingelPostMitLink}

