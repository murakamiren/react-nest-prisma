import { Box, Heading, VStack } from "@chakra-ui/react";
import { VFC } from "react";
import Posts from "./components/posts";
import PostsLazy from "./components/postsLazy";
import PostsOnlyTitle from "./components/postsOnlyTitle";

const App: VFC = () => {
	return (
		<Box>
			<VStack spacing={8}>
				<Heading>hello react nest prisma graphql</Heading>
				<Posts />
				<PostsOnlyTitle />
				<PostsLazy />
			</VStack>
		</Box>
	);
};

export default App;
