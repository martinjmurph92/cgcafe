import {
  MetaDescriptionField,
  MetaImageField,
  PreviewField,
} from "@payloadcms/plugin-seo/fields";
import { GlobalConfig } from "payload";

import { adminOnly } from "@/payload/access/adminOnly";
import { anyone } from "@/payload/access/anyone";
import { linkFields } from "@/payload/fields/link";
import { revalidateSite } from "@/payload/hooks/revalidateSite";
import { generatePreviewPath } from "@/lib/preview";

export const Settings: GlobalConfig = {
  slug: "settings",
  label: "Settings",
  access: {
    read: anyone,
    update: adminOnly,
  },
  admin: {
    livePreview: {
      url: ({ req }) => {
        const path = generatePreviewPath({
          slug: "home",
          collection: "pages",
          req,
        });

        return path;
      },
    },
    preview: (_, { req }) => {
      const path = generatePreviewPath({
        slug: "home",
        collection: "pages",
        req,
      });

      return path;
    },
  },
  fields: [
    {
      type: "tabs",
      tabs: [
        {
          label: "General",
          name: "general",
          fields: [
            {
              label: "Logo",
              name: "logo",
              type: "upload",
              relationTo: "media",
              required: true,
            },
            {
              label: "Favicon",
              name: "favicon",
              type: "upload",
              relationTo: "media",
              required: false,
              filterOptions: {
                mimeType: { equals: "image/png" },
              },
              admin: {
                description:
                  "Displayed in browser tabs and bookmarks. Should be square and at least 512x512 pixels. Must be a PNG file.",
              },
            },
          ],
        },
        {
          label: "SEO",
          name: "seo",
          fields: [
            {
              name: "title",
              type: "text",
              required: true,
              admin: {
                description: "Site title",
              },
            },
            {
              label: "Title Separator",
              name: "titleSeparator",
              type: "text",
              defaultValue: "-",
              admin: {
                description: "Separator between title and site name",
                placeholder: "-",
              },
            },
            MetaDescriptionField({}),
            PreviewField({
              hasGenerateFn: true,
              titlePath: "seo.title",
              descriptionPath: "seo.description",
            }),
            MetaImageField({ relationTo: "media" }),
          ],
        },
        {
          label: "Integrations",
          name: "integrations",
          fields: [
            {
              label: "Google Tag Manager",
              name: "googleTagManager",
              type: "text",
              admin: {
                placeholder: "GTM-XXXXXXXXXX",
                description: "Google Tag Manager ID",
              },
            },
            {
              label: "Google Analytics",
              name: "googleAnalytics",
              type: "text",
              admin: {
                placeholder: "G-XXXXXXXXXX",
                description: "Google Analytics tracking ID",
              },
            },
            {
              label: "Custom Code",
              name: "custom",
              type: "group",
              fields: [
                {
                  label: "Custom Code in <head>",
                  name: "head",
                  type: "code",
                  admin: {
                    description: "Custom code added in the <head> tag.",
                    language: "html",
                  },
                },
                {
                  label: "Custom Code in <body>",
                  name: "bodyOpen",
                  type: "code",
                  admin: {
                    description:
                      "Custom code added after the opening <body> tag.",
                    language: "html",
                  },
                },
                {
                  label: "Custom Code in </body>",
                  name: "bodyClose",
                  type: "code",
                  admin: {
                    description:
                      "Custom code added before the closing </body> tag.",
                    language: "html",
                  },
                },
              ],
            },
          ],
        },
        {
          label: "Socials",
          name: "socials",
          fields: [
            {
              label: "LinkedIn",
              name: "linkedin",
              type: "text",
              admin: {
                placeholder: "https://linkedin.com/in/yourprofile",
                description: "Link to your LinkedIn profile",
              },
            },
          ],
        },
        {
          label: "Header",
          name: "header",
          fields: [
            {
              label: "CTA Button",
              name: "ctaLink",
              type: "group",
              admin: {
                description: "Optional button (e.g. Book a Table) shown in the nav",
              },
              fields: linkFields,
            },
            {
              label: "Menu",
              labels: {
                singular: "Menu Item",
                plural: "Menu Items",
              },
              name: "menu",
              type: "blocks",
              blocks: [
                {
                  slug: "link",
                  interfaceName: "LinkBlock",
                  labels: {
                    singular: "Link",
                    plural: "Links",
                  },
                  fields: linkFields,
                },
                {
                  slug: "subMenu",
                  interfaceName: "SubMenuBlock",
                  labels: {
                    singular: "Sub Menu",
                    plural: "Sub Menus",
                  },
                  fields: [
                    {
                      label: "Label",
                      name: "label",
                      type: "text",
                      required: true,
                    },
                    {
                      name: "links",
                      labels: {
                        singular: "Link",
                        plural: "Links",
                      },
                      type: "array",
                      fields: linkFields,
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: "Footer",
          name: "footer",
          fields: [
            {
              label: "Established",
              name: "established",
              type: "text",
              admin: { description: "e.g. Est. 2025 · England" },
            },
            {
              label: "Tagline",
              name: "tagline",
              type: "textarea",
              admin: {
                description: "Short description below the logo",
              },
            },
            {
              label: "Facebook",
              name: "facebook",
              type: "text",
            },
            {
              label: "Instagram",
              name: "instagram",
              type: "text",
            },
          ],
        },
      ],
    },
  ],
  hooks: {
    afterChange: [revalidateSite],
  },
  versions: {
    drafts: {
      autosave: {
        interval: 500,
        showSaveDraftButton: true,
      },
      validate: false,
    },
    max: 50,
  },
};
