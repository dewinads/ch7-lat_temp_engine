const articles = [
    {
      id: 1,
      title: "Fact 1",
      body: `One person who does the work of twenty. For Free`,
      approved: true
    },
    {
      id: 2,
      title: "Fact 2",
      body: `My mom is amazing woman`,
      approved: true
    },
    {
      id: 3,
      title: "Fact 3",
      body: `My mom is multi-talent`,
      approved: true
    }
   ];
   
   module.exports = {
    findAll: () => Promise.resolve(articles),
    create: ({ title, body }) => {
      const id = articles[articles.length - 1].id + 1;
      const article = { id, title, body };
      articles.push(article);
      return Promise.resolve(article);
    }
   };