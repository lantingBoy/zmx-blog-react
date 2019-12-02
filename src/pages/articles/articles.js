import React, { Component } from 'react'
import { connect } from 'react-redux'
import https from '@/utils/https'
import urls from '@/utils/urls'
import './index.less'
import { Link } from 'react-router-dom'
import { Icon } from 'antd'
import bg from '@/assets/img/bg.jpg'
import LoadingCom from '@/components/loading/loading'
import LoadEndCom from '@/components/loadEnd/loadEnd'
import { getQueryStringByName, timestampToTime } from '@/utils/utils'
import Lazyload from 'react-lazyload'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
class Articles extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoadEnd: false,
      isLoading: false,
      keyword: '',
      likes: '', // 是否是热门文章
      state: 1, // 文章发布状态 => 0 草稿，1 已发布,'' 代表所有文章
      tag_id: getQueryStringByName('tag_id') || '',
      tag_name: decodeURI(getQueryStringByName('tag_name')) || '',
      category_id: getQueryStringByName('category_id') || '',
      pageNum: 1,
      pageSize: 10,
      articlesList: [],
      total: 0
    }
  }
  componentDidMount() {
    this.setState({
      isLoading: true
    })
    https
      .get(
        urls.getArticleList,
        {
          params: {
            keyword: this.state.keyword,
            likes: this.state.likes,
            state: this.state.state,
            tag_id: this.state.tag_id,
            category_id: this.state.category_id,
            pageNum: this.state.pageNum,
            pageSize: this.state.pageSize
          }
        },
        {
          withCredentials: true
        }
      )
      .then(res => {
        let num = this.state.pageNum
        if (res.status === 200 && res.data.code === 0) {
          this.setState(preState => ({
            articlesList: [...preState.articlesList, ...res.data.data.list],
            total: res.data.data.count,
            pageNum: ++num,
            isLoading: false
          }))
          if (this.state.total === this.state.articlesList.length) {
            this.setState({
              isLoadEnd: true
            })
          }
        } else {
        }
      })
  }
  render() {
    const list = this.state.articlesList.map((item, i) => (
      <ReactCSSTransitionGroup
        key={item._id}
        transitionName="example"
        transitionAppear={true}
        transitionAppearTimeout={1000}
        transitionEnterTimeout={1000}
        transitionLeaveTimeout={1000}
      >
        <li key={item._id} className="have-img">
          <a className="wrap-img" href="/" target="_blank">
            <Lazyload height={100}>
              <img
                className="img-blur-done"
                src={item.img_url}
                alt="文章封面"
              />
            </Lazyload>
          </a>
          <div className="content">
            <Link
              className="title"
              target="_blank"
              to={`/articleDetail?article_id=${item._id}`}
            >
              {item.title}
            </Link>
            <p className="abstract">{item.desc}</p>
            <div className="meta">
              <Link
                rel="noopener noreferrer"
                to={`/articleDetail?article_id=${item._id}`}
              >
                <Icon type="eye" theme="outlined" /> {item.meta.views}
              </Link>
              <Link
                target="_blank"
                to={`/articleDetail?article_id=${item._id}`}
              >
                <Icon type="message" theme="outlined" /> {item.meta.comments}
              </Link>
              <Link
                target="_blank"
                to={`/articleDetail?article_id=${item._id}`}
              >
                <Icon type="heart" theme="outlined" /> {item.meta.likes}
              </Link>
              <span className="time">
                {item.create_time
                  ? timestampToTime(item.create_time, true)
                  : ''}
              </span>
            </div>
          </div>
        </li>
      </ReactCSSTransitionGroup>
    ))
    return (
      <div className="left">
        {this.state.tag_id ? (
          <h3 className="left-title">{this.state.tag_name} 相关的文章：</h3>
        ) : (
          ''
        )}
        <ul className="note-list" id="list">
          {list}
        </ul>
        {this.state.isLoading ? <LoadingCom /> : ''}
        {this.state.isLoadEnd ? <LoadEndCom /> : ''}
      </div>
    )
  }
}

const mapStateToprops = state => state.articles

export default connect(mapStateToprops)(Articles)
