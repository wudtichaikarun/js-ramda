console.log(
  '------------------file mock-fetch.js--------------------'
);
const mockFetch = () =>
  new Promise(resolve => {
    resolve({
      user: 'romantic',
      posts: [
        {
          title: 'why curry'
        },
        {
          title: 'functional programming'
        }
      ]
    });
  });

/**
 * need  array of title
 * like this ['why curry', 'functional programming']
 */

// ex. use pure js.
mockFetch()
  .then(data => data.posts)
  .then(posts => posts.map(post => post.title))
  .then(titles => {
    console.log('title use pure js', titles);
  });

// ex. use curry
const get = curry((prop, obj) => obj[prop]);
const map = curry((fn, values) => values.map(fn));
mockFetch()
  .then(get('posts'))
  .then(map(get('title')))
  .then(titles => {
    console.log('title from curry', titles);
  });
