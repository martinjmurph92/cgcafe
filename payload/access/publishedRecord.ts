import type { Access } from "payload";

export const publishedRecord: Access = () => {
  return {
    _status: {
      equals: "published",
    },
  };
};
