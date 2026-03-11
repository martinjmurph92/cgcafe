import { Post } from "@/payload-types";

import { getDocumentPath } from "@/lib/routing";
import {
  Card,
  CardContent,
  CardDateTime,
  CardHeader,
  CardImage,
  CardLinkOverlay,
  CardTitle,
} from "@/components/ui/card";
import { MediaImage } from "@/components/media-image";

export function PostCard({ post }: { post: Post }) {
  return (
    <Card>
      {post.image && (
        <CardImage className="[&_img]:scale-100 [&_img]:transition-transform [&_img]:duration-300 [&_img]:ease-in-out group-hover:[&_img]:scale-105">
          <MediaImage resource={post.image} size="thumbnail" />
        </CardImage>
      )}

      <CardHeader>
        {post.publishedAt && <CardDateTime dateString={post.publishedAt} />}

        <CardTitle className="group-hover:underline">{post.title}</CardTitle>
      </CardHeader>

      <CardContent>
        <p>{post.summary}</p>
      </CardContent>

      <CardLinkOverlay
        href={getDocumentPath("posts", post.slug)}
        aria-label={`Read more about ${post.title}`}
      />
    </Card>
  );
}
