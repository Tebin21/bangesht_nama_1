import type { StaticImageData } from "next/image";

/**
 * Gallery/Photo — Technical-Architecture-Engineering-Blueprint.md domain
 * model: "one or more Photo entities... each carrying its composition-type
 * metadata." `composition` informs Photo Frame presentation choices
 * (Design-System-Component-Library-Bible.md §13) without the component
 * itself knowing which occasion supplied the photo. `src` accepts either a
 * static `next/image` import or a plain URL/path.
 */
export type PhotoComposition = "portrait" | "landscape" | "closeUp" | "family" | "couple";

export interface Photo {
  src: string | StaticImageData;
  alt: string;
  composition: PhotoComposition;
}

export interface Gallery {
  photos: Photo[];
}
