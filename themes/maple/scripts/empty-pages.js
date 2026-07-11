hexo.extend.generator.register('maple-empty-pages', function (locals) {
  if (locals.posts.length > 0) return [];

  return [
    {
      path: 'index.html',
      layout: ['index'],
      data: { posts: locals.posts }
    },
    {
      path: 'archives/index.html',
      layout: ['archive'],
      data: { title: '归档', posts: locals.posts }
    }
  ];
});
