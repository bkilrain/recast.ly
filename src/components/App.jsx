class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = null;
  }

  newVideo(index) {
    this.setState({
      currentVideo: this.state.videos[index],
    });
  }

  getVideos(data) {
    console.log(data);
    this.setState({
      videos: data,
      currentVideo: data[0]
    });
  }

  componentDidMount() {
    console.log('componentDidMount has fired', this);
    searchYouTube({
      query: 'dogs',
      max: 5,
      key: window.YOUTUBE_API_KEY
    }, this.getVideos.bind(this));
  }

  render() {
    if (this.state) {
      return (
        <div>
          <Nav />
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentVideo}/>
          </div>
          <div className="col-md-5">
            <VideoList context={this.newVideo.bind(this)} videos={this.state.videos}/>
          </div>
        </div>
      );
    } else {
      return (<div>hi, hello.</div>);
    }
  }

}



// var App = () => (
//   <div>
//     <Nav />
//     <div className="col-md-7">
//       <VideoPlayer video={exampleVideoData[0]}/>
//     </div>
//     <div className="col-md-5">
//       <VideoList videos={exampleVideoData}/>
//     </div>
//   </div>
// );

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
