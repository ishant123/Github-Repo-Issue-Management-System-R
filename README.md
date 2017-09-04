# Github-Repo-Issue-Management-System
Github Repo Issue Management System. In this application User can input a link to any GitHub repository and get details about all its issues.
This application is functionally complete.

Tech Stack:
1. Nodejs with expressjs framework at serverside.
2. NPM for installing serverside dependencies.
3. Angularjs 1.6 for Frontend.
4. No database is used in this application.
5. Application deploy on IBM bluemix ibm using PAAS Cloud(Ibm provide PAAS service for node application).
6. Use Git API for fetching data

Application Features:
1. Input: User can input a link to any GitHub repository.
2. Output: User will see all the issues of the entered repo in a card structure.
           Card structure will contain 
           Issue name, Issue number, Creator’s avatar, Creator’s name.  
           Once clicked on an issue name you will be navigated to new page which has 
           Issue title, Issue description, Comments related to the issue.

Application Issues:
1. The application will show only first page issues (No Paging is performed yet).
2. When you navigate back from the Issues Detail Page there will be no data.
3. No comment feature is performed.


Improve your solution if you were given more time:
1. Perform paging in the application with lazy loading.
2. Resolve the issue of navigate back from the Issues Detail Page.
3. Implement comment section with user Login and add comment to git repo Issue by using git APIs.     
