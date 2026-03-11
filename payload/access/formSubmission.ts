import { Access } from "payload";

import { getServerSideURL } from "@/lib/url";

export const formSubmission: Access = ({ req }) => {
  const headers = req.headers;

  const contentType = headers.get("content-type");
  const referer = headers.get("referer");

  const url = getServerSideURL();

  return Boolean(
    req.file &&
      contentType?.includes("multipart/form-data") &&
      referer?.includes(url)
  );
};
