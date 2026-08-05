"use client";

import React, {
  useActionState,
  useEffect,
  useState,
  useTransition,
} from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Loader2, Plus } from "lucide-react";
import { IPost, PostFormState } from "@/types/types";
import {
  createPostAction,
  updatePostAction,
} from "../../_actions/my-post-action";
import { toast } from "sonner";

type PostFormDialogProps = {
  mode: "create" | "edit";
  post?: IPost;
  trigger?: React.ReactNode;
};

const initialState: PostFormState = { success: false, message: "" };

const PostFormDialog = ({ mode, post, trigger }: PostFormDialogProps) => {
  const [open, setOpen] = useState(false);
  const [, startTransition] = useTransition();

  const action = mode === "edit" ? updatePostAction : createPostAction;
  const [state, formAction, isPending] = useActionState(action, initialState);

  useEffect(() => {
    if (!state) return;

    if (state.success) {
      toast.success(
        state.message ||
          (mode === "edit"
            ? "Post updated successfully!"
            : "Post created successfully!"),
      );
      startTransition(() => {
        setOpen(false);
      });
    } else if (state.message) {
      toast.error(state.message || "Something went wrong. Please try again.");
    }
  }, [state, mode]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger ?? (
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Create Post
          </Button>
        )}
      </DialogTrigger>

      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>
            {mode === "edit" ? "Edit Post" : "Create New Post"}
          </DialogTitle>
          <DialogDescription>
            {mode === "edit"
              ? "Update your post details below."
              : "Fill in the details to publish a new post."}
          </DialogDescription>
        </DialogHeader>

        <form action={formAction} className="space-y-4">
          {mode === "edit" && post && (
            <input type="hidden" name="id" value={post.id} />
          )}

          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              name="title"
              placeholder="Enter post title"
              defaultValue={post?.title}
            />
            {state.errors?.title && (
              <p className="text-sm text-destructive">
                {state.errors.title[0]}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="content">Content</Label>
            <Textarea
              id="content"
              name="content"
              placeholder="Write your post content..."
              rows={5}
              defaultValue={post?.content}
            />
            {state.errors?.content && (
              <p className="text-sm text-destructive">
                {state.errors.content[0]}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="thumbnail">Thumbnail Link</Label>
            <Input
              id="thumbnail"
              name="thumbnail"
              placeholder="https://example.com/image.jpg"
              defaultValue={post?.thumbnail}
            />
            {state.errors?.thumbnail && (
              <p className="text-sm text-destructive">
                {state.errors.thumbnail[0]}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="tags">Tags</Label>
            <Input
              id="tags"
              name="tags"
              placeholder="tech, sports, politics (comma separated)"
              defaultValue={post?.tags?.join(", ")}
            />
            <p className="text-xs text-muted-foreground">
              Separate multiple tags with a comma.
            </p>
            {state.errors?.tags && (
              <p className="text-sm text-destructive">{state.errors.tags[0]}</p>
            )}
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Checkbox
                id="isFeatured"
                name="isFeatured"
                defaultChecked={post?.isFeatured}
              />
              <Label htmlFor="isFeatured" className="font-normal">
                Featured
              </Label>
            </div>

            <div className="flex items-center gap-2">
              <Checkbox
                id="isPremium"
                name="isPremium"
                defaultChecked={post?.isPremium}
              />
              <Label htmlFor="isPremium" className="font-normal">
                Premium
              </Label>
            </div>
          </div>

          {state.message && !state.success && !state.errors && (
            <p className="text-sm text-destructive">{state.message}</p>
          )}

          <DialogFooter>
            <Button
              type="submit"
              disabled={isPending}
              className="w-full sm:w-auto"
            >
              {isPending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  {mode === "edit" ? "Updating..." : "Creating..."}
                </>
              ) : mode === "edit" ? (
                "Update Post"
              ) : (
                "Create Post"
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default PostFormDialog;
