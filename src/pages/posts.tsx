import { For } from "solid-js";

const POST = [
  {
    id: 1,
    title: "First Blog Post",
    caption: "This is where it all starts",
    content: "",
    date: new Date(),
  },
  {
    id: 2,
    title: "Second Blog Post",
    caption: "This is where it all continues",
    content: "",
    date: new Date(),
  },
];

export default function Posts() {
  return (
    <>
      <ul>
        <For each={POST}>
          {(post) => (
            <li>
              <a href={`/posts/${post.id}`}>
                <h3>{post.title}</h3>
                <small>{post.date.toLocaleDateString()}</small>
                <p>{post.caption}</p>
              </a>
            </li>
          )}
        </For>
      </ul>
    </>
  );
}
