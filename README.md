# DVLOGR

- Software Name: **Dvlogr**
- GitHub Repository: https://github.com/Aditya-Pandey-GH/Dvlogr
- Website: https://dvlogr.vercel.app
- Developer: **Aditya Pandey**
- Purpose: _Dvlogr_ is an online blogging space for the developers, especially the open-source devs, who love to document their journey.

## Idea and Implementation

### Frontend:

- Develop a social media type frontend for the Dvlogr. The idea is to make it look familiar to how Twitter or Reddit looks like, while adding good UI elements from social media platforms like Tumblr.
- On PC, it is a 3 column layout:
    - The first column is the sidebar, with different options.
    - The second column is the main content that contains the posts of the people.
    - The third column will contain something. Maybe it will act as suggestions (like Instagram or Twitter), or footer, or history (like Reddit).
- On mobile, it is a 1 column layout:
    - The important actions from the sidebar will go to header navbar and bottom navigation menu and other places, as suited. The other options will be there in the sidebar which will come out on swiping or clicking on the burger menu.
    - The main content goes into the 1 column layout.
    - The content of the third column will either stay hidden or will be shown in some other form. Important information such as header info will go into sidebar.
- The main content consists of the posts from different people. For example, on platforms like Reddit or Twitter, whatever text or images or videos people have posted, pop up on the feed of other people who might be interested in their content. Similarly, in Dvlogr, the dev-logs posted by the developers will show up.

### Server + Backend:

- Develop a basic server for the Dvlogr. The idea is to let the developers blog the progress of their projects they are working upon, or anything that they are currently learning/studying.
- In the server, the user must be able to sign up and login. So develop a signup/login/logout/user delete system that has authentication/authorization implemented. The system should be fully functional with all the middlewares, hashing, salting, JWT, etc. done properly. Apart from this system, the server also allows the user to upload/delete/edit a post or a comment on a post.
- The database I want to use for backend is Firebase, because it allows Google login and GitHub login. I think Firebase can handle authentication and authorization on its own and without the need to manually do that work. If this is true, then make Firebase do those.
- Make sure to keep different types of code in different folders such as models, routes, etc. The folder structure should be neat and clean and proper. The project should not feel cluttered at all.

## Tech Stack

- Frontend: React.js/Vite + Tailwind CSS (v4)
- Server: Node.js + Express.js
- Database: Firebase
- Hosting: Vercel
- Browser Compatibility:
    - Brave
    - Chromium
    - Chrome
    - Edge
    - Vivaldi
    - Firefox
    - Zen
    - Supports all the major Blink and Gecko browsers
    - Should support Webkit browsers too (not tested yet)
