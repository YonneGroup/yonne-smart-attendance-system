
export default {
  basePath: 'https://yonnegroup.github.io/yonne-smart-attendance-system',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
