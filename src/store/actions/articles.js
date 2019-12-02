import {
    SAVE_ARTICLES_LIST
} from '../types'

export function saveArticlesList(data) {
    return {
        type: SAVE_ARTICLES_LIST,
        payload: data,
    };
}