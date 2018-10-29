console.log(
  '------------------file ramda-condition.js--------------------'
);
const video = {
  '720p': 'funny-video-hd.mp4',
  '480p': 'funny-video-480.mp4',
  isHD: true
};

// const getVideoFilepath = video => {
//   const file = video.isHD ? video['720p'] : video['480p'];
//   return `/api/videos/${file}`;
// };

const getVideoFilepath = R.compose(
  R.concat('/api/videos/'),
  R.ifElse(
    R.propEq('isHd', true), // () => true, // condition
    R.prop('720p'), // () => 'x', // if true
    R.prop('480p') // () => 'y' // else false
  )
);

console.log('getVideoFilepath :', getVideoFilepath(video));
