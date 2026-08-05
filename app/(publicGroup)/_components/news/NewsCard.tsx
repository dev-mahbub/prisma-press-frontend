import React from "react";
import Image from "next/image";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { IPost } from "@/types/types";

interface NewsCardProps {
  post: IPost;
  priority?: boolean;
}

const NewsCard = ({ post, priority = false }: NewsCardProps) => {
  return (
    <Card className="overflow-hidden py-0 gap-0">
      <div className="relative h-44 w-full">
        <Image
          src={post.thumbnail}
          alt={post.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={priority}
        />
        {post.isFeatured && (
          <Badge className="absolute left-2 top-2" variant="default">
            Featured
          </Badge>
        )}
        {post.isPremium && (
          <Badge className="absolute right-2 top-2" variant="secondary">
            Premium
          </Badge>
        )}
      </div>

      <CardHeader className="pt-4">
        <CardTitle className="line-clamp-2 text-lg">{post.title}</CardTitle>
      </CardHeader>

      <CardContent className="space-y-3 pb-4">
        <p className="line-clamp-3 text-sm text-muted-foreground">
          {post.content}
        </p>

        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        )}

        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span>{post.views} views</span>
          <span>{new Date(post.createdAt).toLocaleDateString()}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default NewsCard;
