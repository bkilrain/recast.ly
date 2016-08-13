var nextVideo = (index, props) => {
  console.log('nextVideo INDEX', index);
  console.log('nextVideo PROPS', props);
  console.log('nextVideo THIS', this);
  props.context.newVideo(index);
};

var VideoList = (props) => (
  <div className="video-list media">
    {props.videos.map(function(item, index) {
      return <VideoListEntry video={item} key={item.id.videoId} dothis={props.context.bind(null, index)}/>;
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
// window.nextVideo = nextVideo;
