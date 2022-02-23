import { Link, useLoaderData } from "remix";
import type {Post} from "~/backend/post";
import { getPosts } from "~/backend/post";

export const loader = async () => {
	return getPosts();
};

export default function Posts() {
  const posts = useLoaderData<Post[]>();

  return (
    <div>
      <h1 className="text-3xl font-bold underline text-blue-600">Posts</h1>

			<ul>
				{posts.map(post => (
					<li key={post.slug}>
						<Link to={post.slug}>{post.title}</Link>
					</li>
				))}
			</ul>
    </div>
  );
}
