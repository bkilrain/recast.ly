class App extends React.Component {
  constructor(props) {
    super(props);
    this.dummyData = [{
      etag: 'L332gQTY',
      id: {
        videoId: '000001'
      },
      snippet: {
        title: 'Cute cat video',
        description: 'The best cat video on the internet!',
        thumbnails: {
          default: {
            url: 'http://google.com',
          }
        }
      }
    }];
    this.state = {
      videos: this.dummyData,
      currentVideo: this.dummyData[0]
    };
  }

  newVideo(index) {
    this.setState({
      currentVideo: this.state.videos[index],
    });
  }

  getVideos(data) {
    this.setState({
      videos: data,
      currentVideo: data[0]
    });
  }

  setOptionsSearch(query) {
    searchYouTube({
      query: query,
      max: 5,
      key: window.YOUTUBE_API_KEY
    }, this.getVideos.bind(this));
  }

  componentDidMount() {
    searchYouTube({
      query: 'dogs',
      max: 5,
      key: window.YOUTUBE_API_KEY
    }, this.getVideos.bind(this));
  }

  render() {
    return (
      <div>
        <Nav search={_.debounce(this.setOptionsSearch.bind(this), 500)}/>
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo}/>
        </div>
        <div className="col-md-5">
          <VideoList context={this.newVideo.bind(this)} videos={this.state.videos}/>
        </div>
      </div>
    );
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
