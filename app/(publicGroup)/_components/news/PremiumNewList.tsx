import React from "react";
import NewsCard from "./NewsCard";
import { getPremiumNews } from "../../_actions/getPremiumNews";
import { IPost } from "@/types/types";

const PremiumNewsList = async ({
  searchParams,
}: {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const query = await searchParams;
  const result = await getPremiumNews({ query });

  if (!result.success || result.data.length === 0) {
    return (
      <p className="text-sm text-muted-foreground">No premium news found.</p>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {result.data.map((post: IPost, idx: number) => (
        <NewsCard key={post.id} post={post} priority={idx < 2} />
      ))}
    </div>
  );
};

export default PremiumNewsList;
