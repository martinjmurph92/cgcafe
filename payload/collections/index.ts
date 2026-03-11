import type { CollectionConfig } from "payload";

import { Admins } from "./Admins";
import { FormSubmissions } from "./FormSubmissions";
import { Media } from "./Media";
import { MenuItems } from "./MenuItems";
import { Pages } from "./Pages";
import { Posts } from "./Posts";

export { Admins } from "./Admins";
export { FormSubmissions } from "./FormSubmissions";
export { Media } from "./Media";
export { MenuItems } from "./MenuItems";
export { Pages } from "./Pages";
export { Posts } from "./Posts";

// The order of the collections here is the order they will appear in the admin panel
export const collections: CollectionConfig[] = [
  Admins,
  Media,
  Pages,
  Posts,
  MenuItems,
  FormSubmissions,
];
