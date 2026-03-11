import type { Access } from "payload";

export const mediaAccess: Access = ({ req: { user } }) => {
  if (user) return true;

  return {
    private: {
      equals: false,
    },
  };
};
