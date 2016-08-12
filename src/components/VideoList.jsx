var VideoList = (props) => (
  <div className="video-list media">
    {props.videos.map(function(item) {
      return <VideoListEntry video={item} key={item.id.videoId}/>;
    })}
  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
window.VideoList = VideoList;
    // <VideoListEntry video={props.videos[0]}/>
    // <VideoListEntry video={props.videos[1]}/>
    // <VideoListEntry video={props.videos[2]}/>
    // <VideoListEntry video={props.videos[3]}/>
    // <VideoListEntry video={props.videos[4]}/>
