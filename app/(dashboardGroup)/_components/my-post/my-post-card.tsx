import React from "react";
import Image from "next/image";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Pencil, Eye } from "lucide-react";
import { IPost } from "@/types/types";
import PostFormDialog from "./post-form-dialog";

interface MyPostCardProps {
  post: IPost;
}

const MyPostCard = ({ post }: MyPostCardProps) => {
  return (
    <Card className="overflow-hidden py-0 gap-0">
      <div className="relative h-44 w-full">
        <Image
          src={post.thumbnail}
          alt={post.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <Badge
          className="absolute left-2 top-2"
          variant={post.status === "PUBLISHED" ? "default" : "secondary"}
        >
          {post.status}
        </Badge>
        {post.isPremium && (
          <Badge className="absolute right-2 top-2" variant="outline">
            Premium
          </Badge>
        )}
      </div>

      <CardHeader className="pt-4">
        <CardTitle className="line-clamp-2 text-lg">{post.title}</CardTitle>
      </CardHeader>

      <CardContent className="space-y-3 pb-4">
        <p className="line-clamp-2 text-sm text-muted-foreground">
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
          <span className="flex items-center gap-1">
            <Eye className="h-3 w-3" />
            {post.views} views
          </span>
          <span>{new Date(post.createdAt).toLocaleDateString()}</span>
        </div>

        <PostFormDialog
          mode="edit"
          post={post}
          trigger={
            <Button variant="outline" size="sm" className="w-full">
              <Pencil className="mr-2 h-3.5 w-3.5" />
              Edit Post
            </Button>
          }
        />
      </CardContent>
    </Card>
  );
};

export default MyPostCard;
