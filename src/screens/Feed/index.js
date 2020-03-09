import React, { useState, useEffect } from 'react';
import {
	View,
	Text,
	FlatList,
} from 'react-native';

import {
	Post,
	Header,
	Avatar,
	Name,
	PostImage,
	Description,
} from './styles';
const URL_HOST = 'http://192.168.1.81:1986';

const Item = ({item}) => (
	<Post>
		<Header>
			<Avatar source={{ uri: item.author.avatar }}/>
			<Name>{item.author.name}</Name>
		</Header>
		<PostImage ratio={item.aspectRatio} source={{ uri: item.image }} />
		<Description>
			<Name>{item.author.name}</Name>
			{item.description}
		</Description>
	</Post>
);

const Feed = () => {
	const [feed, setFeed] = useState([]);

	useEffect(()=>{
		async function loadFeed(){
			const response = await fetch(`${URL_HOST}/feed?_expand=author&_limit=5&_page=1`);
			const data = await response.json();
			console.log(data);

			setFeed(data);
		}

		loadFeed();
	},[]);

	return (
		<FlatList
			data={feed}
			keyExtractor={ post=> String(post.id) }
			renderItem={ ({item})=> <Item item={item} /> }
		/>
	);
};

export default Feed;