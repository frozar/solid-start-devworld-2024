import { RouteSectionProps, createAsync } from "@solidjs/router";
import { Show } from "solid-js";
import { getPost } from "~/lib/posts";

export default function PostView(props: RouteSectionProps) {
  const post = createAsync(async () => getPost(+props.params.id));
  return (
    <Show when={post()}>
      <article>
        <h3>{post()!.title}</h3>
        {/* WARNING: the TypeScript type resolution is good, but the usage is not */}
        {/* <small>{post()?.timestamp.toLocaleDateString()}</small> */}
        <small>{new Date(post()!.timestamp).toLocaleDateString()}</small>
        <div>{post()!.content}</div>
      </article>
    </Show>
  );
}
