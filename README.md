# newssite

## Table of Contents
1. [Project Description](#project-description)
2. [How to Install and Run the Project](#how-to-install-and-run-the-project)
    1. [Install the Project](#install-the-project)
    2. [Run the Project](#run-the-project)
3. [How to Use the Project](#how-to-use-the-project)
    1. [The News Site](#the-news-site)
    2. [The Admin Interface](#the-admin-interface)
4. [Credits](#credits)

## Project Descripton
explain and showcase:
- what the application does
- why certain technologies were used
- challenges faced and features hoped to implement in the future

This was a self-chosen project, implemented from end-to-end, as part of from Harvard's "CS50w - Web Programming with Python and JavaScript" course.

"newssite" is a news website based on the structure of pages from news organisations. The homepage displays top news tiles at the top of the page, with other latest news organised by categories below.
More topic-specific articles can be accessed via the navigation bar at the top of the page. Content can be managed and uploaded via Django's built-in admin interface. 

Tech Stack includes widely adopted web development frameworks, as per project requirements:
- Python
- JavaScript
- HTML
- CSS
- React
- Django
- Django Rest Framework

Challenging aspects of the project:
- Failed at integrating React and Django into a "single folder structure"
- Adding CSS logic in React, instead of JavaScript
- Cross-Origin Resource Sharing (CORS)
- Adding XSS (Cross Site Scripting) security measures for storing HTML strings in the database

All in all, simultaneously learning Django and React was a challenging endeavour. Tackling unexpected technical issues of higher complexity contributed to my problem-solving approach. Planning and building a news platform was useful practice in researching and applying industry best practices. Completing this project significantly contributed to my understanding of technology and approach to solving complex problems.

## How to Install and Run the Project
include relevant step to install the project and dependencies.

### Install the project
1. [Clone project github repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository)
2. [Install a Python virtual environment](https://docs.python.org/3/tutorial/venv.html)
3. [Install the project's requirements.txt](https://www.freecodecamp.org/news/python-requirementstxt-explained/)
4. [Install JavaScript dependencies](https://nodejs.org/en/learn/getting-started/an-introduction-to-the-npm-package-manager)
 
### Run the project
1. In a dedicated terminal, navigate to the project's backend directory, where the manage.py file is
2. Execute the command: python manage.py runserver 
or: python3 manage.py runserver
or another equivalent
3. In a dedicated terminal, navigate to the project's frontend directory
4. Execute the command: npm start
or another equivalent
This should automatically open the homepage in your web browser
5. Once the web browser is open, you can navigate the site via the navbar links or article preview blocks

## How to Use the Project
### The News Site

### The admin interface
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

## Credits
[Harvard CS50x - Introduction to Computer Science](https://cs50.harvard.edu/x/2024/)
