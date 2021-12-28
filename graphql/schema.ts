import { gql } from "apollo-server-micro";

export const typeDefs = gql`
	type Link {
		id: ID
		title: String
		description: String
		category: String
		imageUrl: String
		users: [String]
	}

	type Query {
		links: [Link]!
	}
`;
