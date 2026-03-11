import { linkFields } from "@/payload/fields/link";
import { revalidateSite } from "@/payload/hooks/revalidateSite";
import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
} from "@payloadcms/plugin-seo/fields";
import { GlobalConfig } from "payload";

export const Config: GlobalConfig = {
  slug: "config",
  label: "Config",
  fields: [
    {
      type: "tabs",
      tabs: [
        {
          label: "Site",
          name: "site",
          fields: [
            {
              label: "Logo",
              name: "logo",
              type: "upload",
              relationTo: "media",
              required: true,
            },
            {
              label: "Logo Dark",
              name: "logoDark",
              type: "upload",
              relationTo: "media",
              required: true,
            },
            {
              label: "Email",
              name: "email",
              type: "text",
              required: true,
              admin: {
                description: "The email address displayed on the site.",
              },
            },
            {
              label: "Telephone",
              name: "phone",
              type: "text",
              required: true,
              admin: {
                description: "The telephone number displayed on the site.",
              },
            },
            {
              label: "LinkedIn",
              name: "linkedin",
              type: "text",
            },
            {
              label: "Github",
              name: "github",
              type: "text",
            },
            MetaTitleField({}),
            MetaImageField({ relationTo: "media" }),
            MetaDescriptionField({}),
          ],
        },
        {
          label: "Footer",
          name: "footer",

          fields: [
            {
              label: "Summary",
              name: "summary",
              type: "textarea",
            },
            {
              label: "Services Menu",
              name: "services",
              type: "array",
              fields: linkFields,
            },
            {
              label: "Solutions Menu",
              name: "solutions",
              type: "array",
              fields: linkFields,
            },
            {
              label: "About Menu",
              name: "about",
              type: "array",
              fields: linkFields,
            },
            {
              label: "Footer Text",
              name: "footerText",
              type: "text",
            },
          ],
        },
        {
          label: "Emails",
          name: "email",
          fields: [
            {
              name: "emailTo",
              label: "Email To",
              type: "text",
              required: true,
              admin: {
                description:
                  "The email address where form submissions will be sent.",
                placeholder: '"Email Sender" <sender@email.com>',
              },
            },
            {
              name: "subject",
              label: "Email Subject",
              type: "text",
              defaultValue: "New Website Enquiry",
              localized: true,
              required: true,
            },
          ],
        },
      ],
    },
  ],
  hooks: {
    afterChange: [revalidateSite],
  },
};
