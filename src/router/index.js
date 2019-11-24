import React from 'react'

import Loadable from 'react-loadable'

/*
 * loadable 按需加载 打包后的js会很大，将js拆分成若干个chunk.js 提升首屏加载速度
 */
const loadingComponent = ({ error, pastDelay }) => {
  if (error) {
    return <div> Error! </div>
  } else if (pastDelay) {
    // return <div>Loading...</div>;
    return <div />
  } else {
    return null
  }
}

let routes = [
  {
    name: '/',
    path: '/',
    exact: true,
    component: Loadable({
      loader: () => import('../pages/home/index'),
      loading: loadingComponent,
      delay: 300
    })
  },
  {
    name: 'articles',
    path: '/articles',
    exact: true,
    component: Loadable({
      loader: () => import('../pages/articles/articles.js'),
      loading: loadingComponent,
      delay: 300
    })
  }
]
export default routes
