"use server";

import { PostFormState } from "@/types/types";
import { revalidatePath } from "next/cache";

export async function createPostAction(
  prevState: PostFormState,
  formData: FormData,
): Promise<PostFormState> {
  const title = formData.get("title") as string;
  const content = formData.get("content") as string;
  const thumbnail = formData.get("thumbnail") as string;
  const tagsRaw = formData.get("tags") as string;
  const isFeatured = formData.get("isFeatured") === "on";
  const isPremium = formData.get("isPremium") === "on";

  // comma দিয়ে split করে, খালি space trim করে, খালি entry বাদ দিয়ে array বানানো
  const tags = tagsRaw
    ? tagsRaw
        .split(",")
        .map((tag) => tag.trim())
        .filter(Boolean)
    : [];

  const errors: Record<string, string[]> = {};
  if (!title || title.trim().length < 3) {
    errors.title = ["Title must be at least 3 characters."];
  }
  if (!content || content.trim().length < 10) {
    errors.content = ["Content must be at least 10 characters."];
  }
  if (!thumbnail) {
    errors.thumbnail = ["Thumbnail link is required."];
  }

  if (Object.keys(errors).length > 0) {
    return { success: false, message: "Please fix the errors below.", errors };
  }

  try {
    // Replace with real API call:
    // await fetch(`${process.env.API_URL}/posts`, {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ title, content, thumbnail, tags, isFeatured, isPremium }),
    // });

    console.log("Creating post:", {
      title,
      content,
      thumbnail,
      tags,
      isFeatured,
      isPremium,
    });

    revalidatePath("/dashboard/my-post");
    return { success: true, message: "Post created successfully!" };
  } catch (error) {
    return { success: false, message: "Something went wrong. Try again." };
  }
}

export async function updatePostAction(
  prevState: PostFormState,
  formData: FormData,
): Promise<PostFormState> {
  const id = formData.get("id") as string;
  const title = formData.get("title") as string;
  const content = formData.get("content") as string;
  const thumbnail = formData.get("thumbnail") as string;
  const tagsRaw = formData.get("tags") as string;
  const isFeatured = formData.get("isFeatured") === "on";
  const isPremium = formData.get("isPremium") === "on";

  const tags = tagsRaw
    ? tagsRaw
        .split(",")
        .map((tag) => tag.trim())
        .filter(Boolean)
    : [];

  const errors: Record<string, string[]> = {};
  if (!title || title.trim().length < 3) {
    errors.title = ["Title must be at least 3 characters."];
  }
  if (!content || content.trim().length < 10) {
    errors.content = ["Content must be at least 10 characters."];
  }

  if (Object.keys(errors).length > 0) {
    return { success: false, message: "Please fix the errors below.", errors };
  }

  try {
    // Replace with real API call:
    // await fetch(`${process.env.API_URL}/posts/${id}`, {
    //   method: "PATCH",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ title, content, thumbnail, isFeatured, isPremium }),
    // });

    console.log("Updating post:", {
      id,
      title,
      content,
      thumbnail,
      tags,
      isFeatured,
      isPremium,
    });

    revalidatePath("/my-posts");
    return { success: true, message: "Post updated successfully!" };
  } catch (error) {
    return { success: false, message: "Something went wrong. Try again." };
  }
}
