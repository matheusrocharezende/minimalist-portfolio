import { IMAGES_BUCKET, supabase } from "@/lib/supabase";

export async function getSlideshowImages(): Promise<string[]> {
  const { data, error } = await supabase.storage.from(IMAGES_BUCKET).list("", {
    sortBy: { column: "name", order: "asc" },
  });

  if (error || !data) return [];

  return data
    .filter((file) => file.id && file.name !== ".emptyFolderPlaceholder")
    .map(
      (file) =>
        supabase.storage.from(IMAGES_BUCKET).getPublicUrl(file.name).data
          .publicUrl,
    );
}
