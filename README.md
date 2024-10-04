# CS50W Capstone README

## Table of Content
- Project Title
- Project Description
- Distinctiveness and Complexity
- Technologies Used
- Requirements 
- Installation Instructions
- Usage Instructions
- Conclusion

## Project Title
News Website

## Project Description
The capstone project is a news website, where visitors can browse articles curated by admins.
The frontend is built with React, displaying a homepage with a top stories section and previews of each content category. Articles can be viewed by category, through the navbar links. Clicking on article preview cards loads the respective article's page.
The backend is built with Django, connected to the frontend with the Django Rest Framework. The admin interface supports create, read, update and delete functionality on articles, categories and top stories. User profiles can also be edited.

## Distinctiveness and Complexity
### Distinction from other course projects
The capstone project may resemble Project 1 - Wiki in the functionality of creating, reading, updating and deleting articles. Nonetheless, the former differs from the latter architecturally and functionally.
In terms of architecture, the capstone project is built with React, Django Rest Framework and Django. Using React  and Django Rest Framewokr require different approaches to page rendering, -routing and API data transfer, among other things, which adds to the project complexity.
The capstone project's functionality includes supporting image insertion into articles, managing content through the admin interface and selecting top stories to be shown, among other things.

### Planning News Website
The planning and design of the project involved referencing-, researching the anatomy of a news website and sourcing free-to-use articles.

### Project Scope
The original planned news website included features such as, permission groups, customer user profiles and saving articles to favourites. Inexperience with the React framework and unforeseen implementation challenges, rendered the project scope unfeasible.
Adopting a new framework also requires learning about additional topics, as needed to implement it. This includes Django Rest Framework and a number of JavaScript and Python packages. As a result, the project scope was ongoingly revised to ensure a reasonable workload, -learning curve and sensible set of features, meeting project requirements.

### Unexpected Challenges
The capstone project ran into unexpected challenges, including:
- Failure of integrating React and Django into a "single folder structure"
- Implementing CSS logic in React, instead of loading a JavaScript file
- Cross-Origin Resource Sharing (CORS)
- Avoiding XSS (Cross Site Scripting) with storing HTML in string format
Time investment and trial and errors were required to solve these challenges. It is worth noting that not all challenges were solved, some led to project scope adjustments instead.

### Summary
I believe, this capstone project meets the distinctiveness and complexity criteria, due to the use of new frameworks, including React and Django Rest Framework, design and planning and solving implementation challenges.

## Technologies Used
- Python
- JavaScript
- HTML
- CSS
- React
- Django
- Django Rest Framework

## Requirements (packages installed? Read reference for more context)
The Python packages required to run the project are listed in the requirements.txt in the backend folder.
The JavaScript packages can be found in the package.json file in the frontend folder.

## Contents of Each File Created
This section provides an overview of the content of "key" files.

### backend/newsbackend folder
#### models.py
Defines the database models for User, Article, Category and TopStories.

#### serializers.py
Contains the UserSerializer, ArticleSerializer and HomePageArticleSerializer to serialize Python datatypes into JSON data type, for data transfer between Django and React.

#### urls.py
Defines the API endpoints for the view functions HomePage, ArticleContent, CategoryPage, and HomePageTopStories.

#### views.py
Contains view functions for HomePage, ArticleContent, CategoryPage, and HomePageTopStories.

### frontend/src/assets/images folder
Contains frontend image files.

### frontend/src folder
#### App.js
This is the main component of the React application that has the user interface logic and -structure. It contains the Routes from React Router, managing the urls for the HomePage-, ArticlePage- and CategoryPage components.

#### index.js
index.js is the entry point of the React application, rendering the root component (App.js) and attaching it to the HTML document.

### frontend/src/components folder
#### ArticleBlock.js
Renders the ArticleBlock component, which takes an article prop and an optional classname prop. It renders an article preview block, displaying an image and the article title. Clicking the ArticleBlock redirects the user to the respective article's page.

#### ArticleSection.js
This component requires a category and article prop. The former will be displayed as a category title, while the latter is an object that contains article data. 
ArticleSection loops through the article prop's data to render ArticleBlocks.

#### Footer.js
Renders the website footer with dummy links, social media icons and credits for free-to-use assets.

#### Navbar.js
Renders navbar with a website logo, homepage- and category links. The category links are obtained through an API call. Also, contains logic for a responsive CSS layout and hamburger menu button.

#### TopStoriesSection.js
TopStoriesSection is similar to ArticleSection. It renders previews for 3 articles, to be prominently displayed as the top stories on the homepage. One article is displayed in a large block and two articles in two smaller blocks next to it.

### frontend/src/components/pages folder
#### ArticlePage.js
Renders article information through an API call.

#### CategoryPage.js
Displays ArticleBlocks for all articles of a category.

#### HomePage.js
Displays top stories and previews of the latest stories of each category.

### frontend/src/components/pages/stylesheet folder
Contains base_styles.css, which is loaded in the files in frontend/src/components/pages to removes certain default CSS styling.

## Installation Instructions
1. Download the project source code from its GitHub repository
Feel free to reference the instructions from below link:
https://docs.github.com/en/repositories/working-with-files/using-files/downloading-source-code-archives
2. To install the Python packages, open a terminal and navigate to the project's backend directory
3. Execute the command: pip install -r requirements.txt
or the equivalent command 
4. To install the JavaScript dependencies, open a terminal and navigate to the project's frontend directory
5. Execute the command: npm install

## Usage Instructions
1. Open a terminal and navigate to the project's backend directory, where the manage.py file is
2. Execute the command: python manage.py runserver 
or: python3 manage.py runserver
or another equivalent
3. Open a terminal and navigate to the project's frontend directory
4. Execute the command: npm start
or another equivalent
This should automatically open the homepage in your web browser
5. Once the web browser is open, you can navigate the frontend by clicking on the navbar links or any article preview blocks

## Accessing the admin interface:
1. Open the terminal that is in the project's backend directory
2. If you don't already have an admin profile, create one with the following command:
python manage.py createsuperuser
or: python3 manage.py createsuperuser
or another equivalent
3. If the development server is not already running, execute the command: python manage.py runserver 
or: python3 manage.py runserver
4. Click on the development server link: http://127.0.0.1:8000/
or copy it into a web browser
5. Login with the newly created or existing admin profile
6. Explore the admin interface, as you wish

## Conclusion
Overall, the capstone project provided valuable experience and -insights into the process of software development. It highlighted the importance of thorough planning and the need to start executing to gather feedback at other times. CS50W challenged me to further develop my skills and creativity in solving problems with programming. This was an intellectually stimulating journey that imparted useful skills for the fast-moving digital age.
