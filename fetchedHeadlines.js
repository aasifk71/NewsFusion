const fs = require("fs");
const axios = require("axios");

async function fetchHeadlines() {
  const headlines = {
    ET: {},
    Hindu: {},
    HT: {},
    TOI: {},
  };

  // API URLs for each source
  const sources = {
    ET: "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=154dbda9717b4622b64fc5348a54a25e", // Update with correct API for ET
    Hindu:
      "https://newsapi.org/v2/everything?q=tesla&from=2024-09-05&sortBy=publishedAt&apiKey=154dbda9717b4622b64fc5348a54a25e", // Placeholder URL for Hindu
    HT: "https://newsapi.org/v2/top-headlines?country=us&apiKey=154dbda9717b4622b64fc5348a54a25e", // Placeholder URL for HT
    TOI: "https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=154dbda9717b4622b64fc5348a54a25e", // Placeholder URL for TOI
  };

  // Function to fetch headlines
  const fetchSourceHeadlines = async (sourceKey, url) => {
    try {
      const response = await axios.get(url);
      const data = response.data;

      // Store top 7 headlines and one image for the source
      data.articles.slice(0, 7).forEach((article, index) => {
        headlines[sourceKey][index] = article.title; // Store the title at the index
      });
      headlines[sourceKey].img =
        data.articles.length > 0 ? data.articles[0].urlToImage : ""; // Get image from first article
    } catch (error) {
      console.error(`Error fetching data from ${sourceKey}:`, error);
    }
  };

  // Fetch headlines from all sources
  await Promise.all([
    fetchSourceHeadlines("ET", sources.ET),
    fetchSourceHeadlines("Hindu", sources.Hindu),
    fetchSourceHeadlines("HT", sources.HT),
    fetchSourceHeadlines("TOI", sources.TOI),
  ]);

  // Write to finalData.js in the specified format
  fs.writeFileSync(
    "finalData.js",
    `export default ${JSON.stringify(headlines, null, 2)};`
  );
}

// Execute the function
fetchHeadlines();
