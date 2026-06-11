import { defineStackbitConfig } from "@stackbit/types";
import { GitContentSource } from "@stackbit/cms-git";

export default defineStackbitConfig({
  stackbitVersion: "~0.6.0",
  contentSources: [
    new GitContentSource({
      rootPath: __dirname,
      contentDirs: ["content"],
      models: [
        {
          name: "HomePage",
          label: "Home Page",
          type: "page",
          urlPath: "/",
          filePath: "content/pages/home.json",
          fields: [
            { name: "title", label: "Hero Title", type: "string", required: true },
            { name: "badge", label: "Hero Badge", type: "string" },
            { name: "description", label: "Hero Description", type: "text" },
            { name: "primaryButtonText", label: "Primary Button Text", type: "string" },
            { name: "primaryButtonUrl", label: "Primary Button URL", type: "string" },
            { name: "secondaryButtonText", label: "Secondary Button Text", type: "string" },
            { name: "secondaryButtonUrl", label: "Secondary Button URL", type: "string" },

            {
              name: "stats",
              label: "Statistics",
              type: "list",
              items: { type: "model", models: ["StatItem"] }
            },

            {
              name: "about",
              label: "About Section",
              type: "model",
              models: ["AboutSection"]
            },

            {
              name: "principles",
              label: "Vision Mission Values",
              type: "list",
              items: { type: "model", models: ["TextCard"] }
            },

            {
              name: "services",
              label: "Services",
              type: "list",
              items: { type: "model", models: ["ServiceItem"] }
            },

            {
              name: "industries",
              label: "Industries",
              type: "list",
              items: { type: "string" }
            },

            {
              name: "contact",
              label: "Contact Details",
              type: "model",
              models: ["ContactInfo"]
            }
          ]
        },

        {
          name: "StatItem",
          label: "Statistic Item",
          type: "object",
          fields: [
            { name: "number", label: "Number", type: "string" },
            { name: "label", label: "Label", type: "string" }
          ]
        },

        {
          name: "AboutSection",
          label: "About Section",
          type: "object",
          fields: [
            { name: "eyebrow", label: "Small Heading", type: "string" },
            { name: "title", label: "Title", type: "string" },
            {
              name: "paragraphs",
              label: "Paragraphs",
              type: "list",
              items: { type: "text" }
            }
          ]
        },

        {
          name: "TextCard",
          label: "Text Card",
          type: "object",
          fields: [
            { name: "title", label: "Title", type: "string" },
            { name: "description", label: "Description", type: "text" }
          ]
        },

        {
          name: "ServiceItem",
          label: "Service Item",
          type: "object",
          fields: [
            { name: "title", label: "Service Title", type: "string" },
            { name: "description", label: "Service Description", type: "text" }
          ]
        },

        {
          name: "ContactInfo",
          label: "Contact Info",
          type: "object",
          fields: [
            { name: "phone", label: "Phone", type: "string" },
            { name: "email", label: "Email", type: "string" },
            { name: "address", label: "Address", type: "text" },
            { name: "whatsappUrl", label: "WhatsApp URL", type: "string" }
          ]
        }
      ],
      assetsConfig: {
        referenceType: "static",
        staticDir: "public",
        uploadDir: "images",
        publicPath: "/"
      }
    })
  ]
});
