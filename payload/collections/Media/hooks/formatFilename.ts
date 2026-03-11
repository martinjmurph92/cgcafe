import path from "path";
import mime from "mime-types";
import { CollectionBeforeOperationHook } from "payload";

import { formatSlug } from "@/lib/formatting";

export const formatFilename: CollectionBeforeOperationHook = ({
  args,
  req,
  operation,
}) => {
  if ((operation === "create" || operation === "update") && req.file) {
    const extension = mime.extension(req.file.mimetype);

    let originalName = req.file.name;

    if (!extension || !originalName) return args;

    const parsed = path.parse(originalName);
    const baseName = parsed.name;

    const slugifiedName = formatSlug(baseName);

    req.file.name = `${slugifiedName}.${extension}`;

    return args;
  }
};
