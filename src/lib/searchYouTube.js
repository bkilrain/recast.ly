var searchYouTube = (options, callback) => {
  var searchOptions = {
    part: 'snippet',
    key: options.key,
    maxResults: options.max,
    q: options.query,
    type: 'video',
    videoEmbeddable: 'true'
  };

  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search', 
    type: 'GET',
    data: searchOptions,
    success: function(data) { callback(data.items); },
    error: function(data) { console.error('error', data.items); }
  });
};


window.searchYouTube = searchYouTube;

// object params
    // 'part=snippet&maxResults=5&q=dogs',
    // {
    //   part: 'snippet',
    //   maxResults: 5,
    //   q: 'dogs',
    //   key: window.YOUTUBE_API_KEY,
    // },
    // function(data) { console.log('GET REQUEST SUCCESS: ', data); }