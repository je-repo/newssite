# newssite

## Table of Contents
1. [Proejct Description](#project-description)
2. [](#)
3. [](#)
4. [](#)
5. [](#)

## Project Descripton
explain and showcase:
- what the application does
- why certain technologies were used
- challenges faced and features hoped to implement in the future

This was a self-chosen project, implemented from end-to-end, as part of from Harvard's "CS50w - Web Programming with Python and JavaScript" course.

"newssite" is a news website based on the structure of pages from news organisations. The homepage displays top news tiles at the top of the page, with other latest news organised by categories below.
More topic-specific articles can be accessed via the navigation bar at the top of the page. Content can be managed and uploaded via Django's built-in admin interface. 

Tech Stack includes widely adopted web development frameworks, as per project requirement:
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

1. Download the project source code from its GitHub repository
Feel free to reference the instructions from below link:
https://docs.github.com/en/repositories/working-with-files/using-files/downloading-source-code-archives
2. To install the Python packages, open a terminal and navigate to the project's backend directory
3. Execute the command: pip install -r requirements.txt
or the equivalent command 
4. To install the JavaScript dependencies, open a terminal and navigate to the project's frontend directory
5. Execute the command: npm install

1. Open a terminal and navigate to the project's backend directory, where the manage.py file is
2. Execute the command: python manage.py runserver 
or: python3 manage.py runserver
or another equivalent
3. Open a terminal and navigate to the project's frontend directory
4. Execute the command: npm start
or another equivalent
This should automatically open the homepage in your web browser
5. Once the web browser is open, you can navigate the frontend by clicking on the navbar links or any article preview blocks

### Accessing the admin interface
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

## How to Use the Project
provide instructions and examples on how to use the project. this can be a useful reference on what to expect or how to troubleshoot potential problems. 

visual aids like screenshots of the project and of the structure and design principles used in the project are useful. 

include any necessary credentials like usernames and passwords.

## Credits
[Harvard CS50x - Introduction to Computer Science](https://cs50.harvard.edu/x/2024/)
