import React, { Suspense } from "react";
import PostFormDialog from "../../_components/my-post/post-form-dialog";
import MyPostsList from "../../_components/my-post/my-posts-list";
import MyPostSkeleton from "../../_components/my-post/my-post-skeleton";

const MyPostPage = () => {
  return (
    <div className="mx-auto max-w-7xl space-y-6 px-4 py-10 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold">My Posts</h1>
          <p className="text-sm text-muted-foreground">
            Create and manage your own news posts.
          </p>
        </div>

        <PostFormDialog mode="create" />
      </div>

      <Suspense fallback={<MyPostSkeleton />}>
        <MyPostsList />
      </Suspense>
    </div>
  );
};

export default MyPostPage;
