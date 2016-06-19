import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import PostsIndex from './components/post_index';
import PostsNew from './components/post_new';
import PostsShow from './components/post_show';
import ErrorPage from './components/error_page';

const Greeting = () => {
    return (
        <div>
            Hey there!
        </div>
    );
};

export default (
    <Route path="/">
        <IndexRoute component={PostsIndex} />
        <Route path="posts/new" component={PostsNew}/>
        <Route path="posts/:id" component={PostsShow}/>
        <Route path="*" component={ErrorPage}/>
    </Route>
);
