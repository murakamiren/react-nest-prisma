import { Box, Button, HStack, Text } from "@chakra-ui/react";
import { VFC } from "react";
import { usePostsQuery } from "./graphql/generated";

const App: VFC = () => {
	const { loading, error, data } = usePostsQuery();
	const graphqlQueryTest = () => {
		console.log(data);
	};

	if (error) return <Text>err</Text>;

	return (
		<Box>
			<Text>hello react nest prisma graphql</Text>
			<Button onClick={graphqlQueryTest}>see console log!</Button>
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
							</Box>
						))}
				</HStack>
			)}
		</Box>
	);
};

export default App;
