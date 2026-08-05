import React from "react";
import NewsCard from "./NewsCard";
import { IPost } from "@/types/types";

const PublicNewsList = async () => {
  const result: { success: boolean; data: IPost[] } = {
    success: true,
    data: [
      {
        id: "1",
        title: "News 1",
        content: "This is the content of News 1.",
        thumbnail: "https://picsum.photos/400/300",
        isFeatured: false,
        status: "DRAFT",
        tags: ["tag1", "tag2"],
        views: 100,
        isPremium: false,
        authorId: "1",
        createdAt: "2026-07-28T10:00:00.000Z",
        updatedAt: "2026-07-28T10:00:00.000Z",
      },
      {
        id: "2",
        title: " News 2",
        content: "This is the content of News 2.",
        thumbnail: "https://picsum.photos/400/300",
        isFeatured: true,
        status: "DRAFT",
        tags: ["tag3"],
        views: 45,
        isPremium: false,
        authorId: "1",
        createdAt: "2026-07-28T10:00:00.000Z",
        updatedAt: "2026-07-28T10:00:00.000Z",
      },
    ],
  };

  if (!result.success || result.data.length === 0) {
    return <p className="text-sm text-muted-foreground">No news found.</p>;
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {result.data.map((post, idx) => (
        <NewsCard key={post.id} post={post} priority={idx < 2} />
      ))}
    </div>
  );
};

export default PublicNewsList;
