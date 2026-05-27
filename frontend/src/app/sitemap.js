export default function sitemap() {
  return [
    {
      url: "http://localhost:3001/home",
      lastModified: new Date(),
    },

    {
      url: "http://localhost:3001/login",
      lastModified: new Date(),
    },

    {
      url: "http://localhost:3001/messages",
      lastModified: new Date(),
    },
  ];
}
