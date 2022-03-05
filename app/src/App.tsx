import { gql, useQuery } from "@apollo/client";
import { Box, Button, Text } from "@chakra-ui/react";
import { useState, VFC } from "react";

const App: VFC = () => {
	const [posts, setPost] = useState<[]>([]);
	const postGql = gql`
		query {
			posts {
				id
				title
				content
				isPublished
			}
		}
	`;

	const { loading, error, data } = useQuery(postGql);
	const graphqlQueryTest = () => {
		console.log(data.posts);
		setPost(data.posts);
	};

	if (loading) return <Text>loading...</Text>;

	if (error) return <Text>err</Text>;

	return (
		<Box>
			<Text>hello react nest prisma graphql</Text>
			<Button onClick={graphqlQueryTest}>gql Query!</Button>
			{posts.map((d: any) => (
				<Box key={d.id}>
					<Text>{d.id}</Text>
					<Text>{d.title}</Text>
					<Text>{d.content}</Text>
				</Box>
			))}
		</Box>
	);
};

export default App;
