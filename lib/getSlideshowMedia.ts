import { IMAGES_BUCKET, supabase } from "@/lib/supabase";

export type SlideshowMedia = {
  src: string;
  type: "image" | "video";
};

export async function getSlideshowMedia(): Promise<SlideshowMedia[]> {
  const { data, error } = await supabase.storage.from(IMAGES_BUCKET).list("", {
    sortBy: { column: "name", order: "asc" },
  });

  if (error || !data) return [];

  return data
    .filter((file) => file.id && file.name !== ".emptyFolderPlaceholder")
    .map((file) => ({
      src: supabase.storage.from(IMAGES_BUCKET).getPublicUrl(file.name).data
        .publicUrl,
      type: file.metadata?.mimetype?.startsWith("video/")
        ? ("video" as const)
        : ("image" as const),
    }));
}
