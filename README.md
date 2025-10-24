# Problem Statement
In today's fast-paced world, staying updated with the latest news is essential. However, users often find themselves navigating multiple websites or applications to catch up on the most relevant news from different domains such as economics, politics, technology, and general news. For example, users may need to visit The Economic Times for financial news, The Hindu for national updates, Hindustan Times for global headlines, and Times of India for general coverage. This process can be time-consuming and inefficient.

# NewsFusion
NewsFusion as the name suggests is the fusion of 4 different news sources.
In other words, It is a web app that streamlines news from 4 sources in one place to amplify user experience.
# Description  
NewsFusion is an innovative web app designed to streamline the news aggregation process by collecting headlines from four different sources and presenting them in one centralized platform. Built using a combination of HTML, CSS, JavaScript, Node.js, and jQuery, the app offers users an efficient way to access the latest news without the hassle of visiting multiple websites. By consolidating the most relevant news from various sources, NewsFusion reduces the time users spend searching for top stories, enhancing overall convenience and improving user engagement. The app focuses on providing a seamless and unified experience, allowing users to stay updated with minimal effort.

To further enrich the user experience, NewsFusion includes additional features such as a Screenshot tool and a Notes section, enabling users to capture and organize key information for easy reference. These features offer a more personalized interaction, giving users the flexibility to engage with the content in a tailored manner. The app also incorporates a forward-thinking approach, with plans to analyze user preferences and eventually introduce an SMS or WhatsApp news thread, allowing for real-time updates. After successful development, NewsFusion has been deployed on GitHub, ensuring public access and fostering open-source collaboration for continuous improvement.
# Go to Deployed Website on GitHub
[NewsFusion](https://aasifk71.github.io/NewsFusion/)
# Let's have a walk over the Project
* Landing Page
![image](https://github.com/user-attachments/assets/1dd26073-220f-498b-9c9d-3e1a39cd1ef7)

* Home Screen
  
![image](https://github.com/user-attachments/assets/aae37311-910b-4eb3-b554-2e0bbca7b756)

* The Economic Times Section
  
![image](https://github.com/user-attachments/assets/0a19b1df-6fcb-4d88-8c8b-9762016832c2)

* The Hindu Section
  
![image](https://github.com/user-attachments/assets/f0b5167c-e7fb-4b96-a51a-6398f48d7cfa)

* The Hindustan Times Section

![image](https://github.com/user-attachments/assets/3f8a89c9-3ce3-4a49-aaba-463be76683b2)

* The Times of India

![image](https://github.com/user-attachments/assets/773826bb-fa1a-4cd0-a90f-1525e653f72e)

* Notes Section

![image](https://github.com/user-attachments/assets/c48abd62-7a56-4b65-b348-408b02217854)

# 2 Major Features
### 1. Screenshot Tool

* **Description:** Enables users to capture images or text from news articles and save them for future reference.

* **Why Added:** This feature enhances user engagement by allowing users to capture important information they want to keep or share, improving the app's utility.

* **Tech Stack:** <br /> 
  * **JavaScript:** For implementing the screenshot functionality, capturing images, and storing them in the browser. <br /> 
  * **HTML5 Canvas:** To capture a specific section of the screen and convert it to an image.

### 2. Notes Section

* **Description:** A section that allows users to take personal notes and organize them for easy reference.

* **Why Added:** Allows users to personalize their news consumption experience by enabling them to jot down important points from articles or headlines. This can serve as a virtual notepad for users.
  
* **Tech Stack:** <br /> 
  * **JavaScript/jQuery:** For handling note-taking and saving data. <br /> 
  * **Local Storage:** To store user notes locally on their device, ensuring they are saved even after a page reload.

# Challeges Faced and How They Were Tackled 

### 1. Limited Access to News Content Due to Scraping Restrictions
* **Challenge:** Many news websites, including The Economic Times, The Hindu, Hindustan Times, and Times of India, restrict direct scraping of their full content. As a result, it was not possible to gather complete articles but only the headlines, making it difficult to offer users full access to the news directly within the app.
* **Solution:** <br />
  * Focused on scraping only headlines and short snippets of articles. This helped avoid any legal issues while still offering valuable content to the users.<br />
  * Instead of trying to retrieve full articles, links to the full content were provided, directing users to the original source to read more if desired.
 
### 2. API Access and Integration Complexity
* **Challenge:** Some of the news websites do not provide open APIs, making it more difficult to integrate their news data directly into the app. For sources like The Economic Times or The Hindu, accessing their data was not straightforward.
* **Solution:** <br />
  * Leveraged third-party news APIs (NewsAPI) to fetch headlines from multiple sources without scraping. This avoided potential legal and technical issues related to direct scraping.<br />
  * Built custom scrapers where API access was not available, ensuring the tool only pulled headlines, which minimized the risk of violating terms of service.

# Technologies Used and Why ?
### 1. HTML (Hypertext Markup Language)
* **Why Chosen:**
HTML is the foundational language for structuring web content. It defines the layout of the web pages, including headings, links, and content sections. Since NewsFusion is a web-based application, HTML is essential for building the structure of the landing page, home page, and individual news sections.
* **Benefits:**
  * Simple to use for building the basic structure of a webpage.
  * Ensures content is displayed correctly in all modern browsers.

### 2. CSS (Cascading Style Sheets)
* **Why Chosen:**
CSS is used for styling and laying out the structure created by HTML. It controls the visual presentation, including colors, fonts, layout, spacing, and responsiveness across devices. Since NewsFusion needs to be responsive across desktop, tablet, and mobile devices, CSS (especially with CSS3) was essential.
* **Benefits:**
  * Provides control over the appearance of the website.
  * Facilitates responsive design using media queries.
  * Makes the user interface visually appealing and user-friendly.

### 3. JavaScript
* **Why Chosen:**
JavaScript enables interactivity and dynamic content loading on the front-end. It allows you to manipulate HTML elements, fetch data asynchronously, and respond to user actions (like clicks or scrolling). In NewsFusion, it is used to handle real-time updates, manage user interactions (like clicking on a news headline), and integrate with back-end APIs for fetching news.
* **Benefits:**
  * Enables dynamic behavior and interactivity on the webpage.
  * Works seamlessly with AJAX for real-time data fetching.
  * Improves user experience by making the page more interactive without needing to reload.

### 4. Node.js (Backend)
* **Why Chosen:**
Node.js is a server-side JavaScript runtime that is particularly well-suited for building fast, scalable applications. NewsFusion uses Node.js to handle backend operations such as fetching data from multiple news sources, managing real-time updates, and providing data to the front-end. Since it's built on JavaScript, it allows for a consistent language across both the server-side and client-side of the application.
* **Benefits:**
  * Allows using JavaScript both on the front-end and back-end.
  * Efficient for handling asynchronous operations (like fetching data from APIs or scraping news) through non-blocking I/O.
  * Scalable for handling large numbers of API requests or users.

### 5. jQuery
* **Why Chosen:**
jQuery is a fast, small, and feature-rich JavaScript library that simplifies tasks like DOM manipulation, event handling, and AJAX requests. It's especially useful for working with older browsers and making front-end development quicker and easier. NewsFusion uses jQuery to manage real-time updates, simplify DOM manipulation, and handle AJAX calls to fetch news data without refreshing the page.
* **Benefits:**
  * Simplifies the process of writing cross-browser compatible code.
  * Provides easy syntax for DOM manipulation and handling events.
  * Enhances AJAX functionality for dynamic data loading without reloading the page.

### 6. Bootstrap (CSS Framework)
* **Why Chosen:**
Bootstrap is a popular CSS framework that provides pre-built, responsive grid systems and UI components. For NewsFusion, Bootstrap was used to speed up the development process and ensure the app looks good on all devices (desktop, tablet, and mobile).
* **Benefits:**
  * Saves development time with pre-built components (buttons, navigation bars, grids, etc.).
  * Ensures the app is responsive and looks great on any device.
  * Offers a consistent design without needing to write extensive custom CSS.
 
## Future Plans
* **SMS/WhatsApp News Updates:** Implement a feature to send real-time news updates via SMS or WhatsApp, allowing users to receive alerts for breaking news based on their preferences.
* **Personalized News Feed:** Integrate machine learning to analyze user preferences and provide a more personalized news feed tailored to individual interests.
* **Mobile App Version:** Develop a mobile application for a more native experience, providing users with faster access to news and notifications on the go.
* **Voice-Activated News:** Implement voice search capabilities to allow users to get news updates by simply speaking to the app.

# Query, Feedback, Bug, Contribute ?? 
Reach out to me at
* Email: 02md02anas@gmail.com
* LinkedIn: [LinkedIn](www.linkedin.com/in/mohd-aasif-80568b2a7)

# License
All content used in this project, including news headlines and articles, is the property of their respective copyright holders, such as The Times of India, The Hindu, Hindustan Times, and The Economic Times. This project is intended solely for educational and personal use, and is not for commercial gain. The content is aggregated for the purpose of providing a news aggregation service and does not claim ownership or authorship of the original material. All trademarks and registered trademarks are the property of their respective owners.

#
<div align="center">
Created with ❤️ by <h3>Mohd Aasif</h3> - DTU/2K22/CO/286
</div>

#
