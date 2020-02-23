module.exports = {
  title: '书法课堂使用说明',
  plugins: [
    'flowchart',
    [
      'vuepress-plugin-comment',
      {
        choosen: 'gitalk',
        options: {
          clientID: '771bbb3960244fec0d14',
          clientSecret: '0296371f3e4027f55b1de4bda159bcb353e6007a',
          repo: 'GitHub reposyzl/calli-doc',
          owner: 'songlairui',
          admin: ['songlairui'],
          distractionFreeMode: false
        }
      }
    ]
  ]
}
