
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://yonnegroup.github.io/yonne-smart-attendance-system/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/yonne-smart-attendance-system"
  },
  {
    "renderMode": 2,
    "route": "/yonne-smart-attendance-system/register"
  },
  {
    "renderMode": 2,
    "route": "/yonne-smart-attendance-system/reset-password"
  },
  {
    "renderMode": 2,
    "route": "/yonne-smart-attendance-system/admin-dashboard"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 31950, hash: '1139768d4d5db7c12af8b2a73e995099fb40a1949c875d09a996678d3479902a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 21112, hash: '7e564b22b15ea0170388242251f1c071232d4a35338da1fee915ea0f4dcc8171', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'reset-password/index.html': {size: 93036, hash: 'c1617a62dd9a368808604832d115ca666263853cb2325456977d432b60229729', text: () => import('./assets-chunks/reset-password_index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 110576, hash: 'b28de339bfecf2842f5acde5df7c3c9082ef3148e05d85cb55eff9b84dad538a', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'index.html': {size: 47236, hash: '80409d36c64394e26f19b3eaf079e2f5891f94a6c2db74f10fd780995131d7ac', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'admin-dashboard/index.html': {size: 67211, hash: '6997ee4f55690c741847da344d22c6ea3c4c518e428a5ef52da5d575f4dcf013', text: () => import('./assets-chunks/admin-dashboard_index_html.mjs').then(m => m.default)},
    'styles-KFL7ZUHR.css': {size: 237750, hash: 'd4MoV6x0xiE', text: () => import('./assets-chunks/styles-KFL7ZUHR_css.mjs').then(m => m.default)}
  },
};
