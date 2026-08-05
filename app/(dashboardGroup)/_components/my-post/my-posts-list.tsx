import React from "react";
import MyPostCard from "./my-post-card";
import { IPost } from "@/types/types";

const MyPostsList = async () => {
  // Replace with a real fetch() call to your API once ready
  const result: { success: boolean; data: IPost[] } = {
    success: true,
    data: [
      {
        id: "1",
        title: "My First News Post",
        content: "This is the content of my first news post.",
        thumbnail: "https://picsum.photos/seed/mypost1/400/300",
        isFeatured: true,
        isPremium: false,
        status: "PUBLISHED",
        tags: ["tag1"],
        views: 120,
        authorId: "1",
        createdAt: "2026-07-28T10:00:00.000Z",
        updatedAt: "2026-07-28T10:00:00.000Z",
      },
      {
        id: "2",
        title: "Draft Post Example",
        content: "This one is still a draft, not published yet.",
        thumbnail: "https://picsum.photos/seed/mypost2/400/300",
        isFeatured: false,
        isPremium: true,
        status: "DRAFT",
        tags: ["tag2"],
        views: 0,
        authorId: "1",
        createdAt: "2026-07-27T10:00:00.000Z",
        updatedAt: "2026-07-27T10:00:00.000Z",
      },
    ],
  };

  if (!result.success || result.data.length === 0) {
    return (
      <div className="rounded-lg border border-dashed py-16 text-center">
        <p className="text-sm text-muted-foreground">
          {" You haven't created any posts yet."}
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {result.data.map((post) => (
        <MyPostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default MyPostsList;
