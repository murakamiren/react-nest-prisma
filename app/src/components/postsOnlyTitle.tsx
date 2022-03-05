import { Box, Text } from "@chakra-ui/react";
import { VFC } from "react";
import { usePostsOnlyTitleQuery } from "../graphql/generated";

const PostsOnlyTitle: VFC = () => {
	const { loading, error, data } = usePostsOnlyTitleQuery();

	if (error) return <Text>error</Text>;

	return (
		<>
			{loading ? (
				<Text>loading...</Text>
			) : (
				<Box>{data && data.posts.map((d) => <Text key={d.title}>only-title: {d.title}</Text>)}</Box>
			)}
		</>
	);
};

export default PostsOnlyTitle;
