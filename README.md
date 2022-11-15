<h1>FOODIE TRIP</h1>
<img src=/src/assets/foodietrip.JPG>

<h2>PROJECT SUMMARY</h2>
<p> The Foodie Trip website aims to share and provide information to the users on the restaurants and food establishments in the Philippines. It enables the users to explore and search for new restaurants and to share their experiences and relative information for other users.</p>

<p>Here is the deployed live link website: <a href ="https:// /">link</a></p>

<h2>UX/UI</h2>

<h3>User Stories:</h3>
<li>As a user, I want to search and discover restaurants or food establishments which fits my preferences. </li>
<li>As a user, I want to post and share information on the restaurant and rate my dining experience.

<h3>Acceptance Criteria:</h3>
<li>The website allows the user to search for the restaurant name and filter out the list based on the user’s preferred criteria. </li>
<li>The website allows the user to create new post on the restaurant. It also allows the user to update and delete an existing post.

<h3>Five Planes of UI/UX:</h3>
<h4>Strategy:</h4>
<li>User: Customers who would like to search and discover new restaurants and other food establishments.</li>
<li>User Needs: To easily search for the best restaurants based on their preferred criteria and to share content and information to other customers.</li>

<h4>Scope:</h4>

<h4> Functional requirements:</h4>
<li>Search using restaurant name</li>
<li>Filter by Cuisine</li>
<li>Create new post on the restaurant</li>
<li>Update the restaurant details</li>
<li>Delete the restaurant post</li>
<li>Select the restaurant to view complete details</li>

<h4>Content requirements: </h4>
<li>Restaurant Name</li>
<li>Type of Cuisine</li>
<li>Restaurant Location</li>
<li>Images</li>
<li>Bestsellers</li>
<li>Meals</li>
<li>Average Cost</li>
<li>Store Hours</li>
<li>Features</li>
<li>Parking</li>
<li>Contacts</li>
<li>Rating</li>

<h4>Structure:</h4>
<li> The list of restaurants containing each brief information are displayed in a card format. The complete content can be viewed by clicking the restaurant name.

<h4>Skeleton:</h4>

<p>Wireframe diagrams can be found <a href = /src/assets/wireframe.png>here</a></p>

<h4>Surface:</h4>
<li>The website features a banner on the upper portion of the web page which also includes a search bar to easily find for the restaurants. It also displays colors like pink, yellow, white and black. The red, pink and white colors are used on the navigation bars, all buttons and the whole webpage. The color yellow is mainly used on to indicate the ratings on each restaurant. While the color black is used on the relevant information of the restaurant. The app uses the font Trebuchet MS for all the details in the website as it looks clean and modern.</li>

<h3>Features</h3>
<li>The main feature of the website is to show all the restaurants posted by the users. </li>
<li>It also displays brief information on each restaurants and their corresponding ratings. </li>
<li>The complete details of a restaurant can be shown by clicking on the name of the restaurant.</li>
<li>The users can also search for a specific restaurant by using the search bar and type in the restaurant name or by filtering it by criteria like the type of cuisine and ratings. </li>
<li>It can also create a new post of a restaurant by clicking on the New Restaurant link located on the navigation bar. The user can fill up the form and to ensure all the fields are completed the user will be prompted if there are any blank fields in the form. Once the form has been completed and submitted the user will be redirected to the homepage. </li>
<li>The post can be edited by clicking on the edit button displayed on each restaurant. The user can edit or replace the details on the form and click on the update button once completed. To ensure all the fields are completed the user will be prompted if there are any blank fields in the form. Cancel button is also available on the form and it will be redirected back to the home page. </li>
<li>The user can delete a post by clicking on the delete button displayed on each restaurant. It will directed to a delete page to display and review the details before the user deletes a post. Cancel button is also available on the form and it will be redirected back to the home page. </li>
<li>Additional feature which is yet to be implemented would be to enable JWT token authentication. This would allow the users to create an account and to log in first before they could create, edit and delete a post. </li>

<h3>Technologies Used</h3>
<li>Bootstrap 5.1 - Used to create the navbar and buttons.</li>
<li>Javascript - To create interactive web applications.</li>
<li>Vue 3 – Used to create an interactive single page web application</li>
<li>MongoDB and Express – Storage of API endpoints database</li>
<li>Axios – To extract API endpoints</li>
<li>Yarn and NPM – Used to run the single page application</li>

<h3>Testing</h3>

| Test Case No. |  Test Case Description  |         Test Steps         |         Expected Results         |
|:--------------|:------------------------|:---------------------------|:---------------------------------|
|1 | Test if the navbar links works | Click on the ‘Home’ or ‘New Restaurant’ links on Navbar | The ‘Home’ link would display the list of restaurants from the API while the ‘New Restaurant’ link will be directed to a new page to post a new restaurant |


