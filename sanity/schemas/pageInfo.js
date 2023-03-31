export default {
    name: "pageInfo",
    title: "PageInfo",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Name",
            type: "string",
        },
        {
            name: "role",
            title: "Role",
            type: "string",
        },
        {
            name: "heroImage",
            title: "Image",
            type: "image",
            options: {
                hotspot: true,
            },
        },
        {
            name: "backgroundInformation",
            title: "BackgroundInformation",
            type: "string",
        },
        {
            name: "profilePic",
            title: "ProfilePic",
            type: "image",
            options: {
                hotspot: true,
            },
        },
        {
            name: "phoneNumber",
            title: "PhoneNumber",
            type: "string",
        },
        {
            name: "email",
            title: "Email",
            type: "string",
        },
        {
            name: "address",
            title: "Address",
            type: "string",
        },
        {
            name: "socials",
            title: "Socials",
            type: "array",
            of: [{ type: "reference", to: { type: "social" } }],
        },
        {
            name: "resume",
            title: "Resume",
            type: "file",
            asset: {
                _ref: "file-9b98f95fdffd0a92bafd7c5c10ecd1955d65b11a-pdf",
                _type: "reference",
            },
        },
    ],
};
