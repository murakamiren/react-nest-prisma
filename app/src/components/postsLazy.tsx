import { Box, Button, Heading, Text } from "@chakra-ui/react";
import { VFC } from "react";
import { usePostsLazyQuery } from "../graphql/generated";

const PostsLazy: VFC = () => {
	const [getPosts, { loading, error, data }] = usePostsLazyQuery();

	if (error) return <Text>error</Text>;
	if (loading) return <Text>loading...</Text>;

	return (
		<Box>
			<Heading as="h2">LazyFetch</Heading>
			<Button onClick={() => getPosts()} colorScheme="whatsapp">
				get data
			</Button>
			{data &&
				data.posts.map((d) => (
					<Box key={d.id}>
						<Text>{d.id}</Text>
						<Text>{d.title}</Text>
						<Text>{d.content}</Text>
						<Text>{d.isPublished ? "公開" : "未公開"}</Text>
					</Box>
				))}
		</Box>
	);
};

export default PostsLazy;
