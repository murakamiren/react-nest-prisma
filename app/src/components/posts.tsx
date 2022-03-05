import { Box, HStack, Text } from "@chakra-ui/react";
import { VFC } from "react";
import { usePostsQuery } from "../graphql/generated";

const Posts: VFC = () => {
	const { loading, error, data } = usePostsQuery();

	if (error) return <Text>error</Text>;

	return (
		<>
			{loading ? (
				<Text>loading...</Text>
			) : (
				<HStack spacing={8}>
					{data &&
						data.posts.map((d) => (
							<Box key={d.id}>
								<Text>{d.id}</Text>
								<Text>{d.title}</Text>
								<Text>{d.content}</Text>
								<Text>{d.isPublished ? "published" : "not published"}</Text>
							</Box>
						))}
				</HStack>
			)}
		</>
	);
};

export default Posts;
