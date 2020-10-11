import React from 'react';

import './index.css';

const Articles = ({posts}) => {
	return (
		<div className="articles">
			{posts.map(post => (
				<div className="post" key={post.id}>
					<div className="post-title">{post.title}</div>
					<div className={"post-category " + post.category}>{post.category}</div>
					<div className="post-excerpt">{post.excerpt}</div>
				</div>
			))}
		</div>
	);
};

export default Articles;