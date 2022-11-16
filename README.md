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
|2 | Search for a restaurant | Type in a restaurant name on the search bar field | 1. Card/s will show the restaurant that matches the name typed in the search field. <br> 2. The number of results will be displayed on the right-hand side of the criteria |
|3 | To check if the filters and search field works | 1. Input a restaurant name on the search field and choose an option on the two dropdown filters. <br> 2. Choose an option from one of the filters and leave the search field blank or do not select any option from the other filter. | 1. Card/s will show the restaurant that matches the name typed in the search field or with the criteria selected on the filter fields. <br> 2. The number of results will be displayed on the right-hand side of the criteria. |
|4 | To create a new restaurant post | 1. Click on the ‘New Restaurant’ link on the Navbar. <br> 2. Fill up all the fields then click on the submit button. <br> 3. Leave a blank field then click the submit button.  <br> 4. Click on the cancel button | 1. Once all the fields have been filled up and the submit button has been clicked the user will be redirected back to the ‘Home’ page. The new restaurant post will be added on the API and Mongo DB database. <br> 2. If the user left any blank fields on the form and once the submit button has been clicked, a notification will appear on the bottom of the page to remind the user to fill up all the fields on the form. <br> 3. If the cancel button is clicked the user will redirected back to the ‘Home’ page. |
|5 | To view more details on the restaurant. | Select a restaurant post by clicking on the restaurant name. | 1. The user will be directed on the selected restaurant page and the complete restaurant details will be displayed. <br> 2. The edit and delete button are displayed on the bottom right of the page if the user would like to update a detail on the post or completely delete the selected post. |
|6 | To edit a restaurant post | 1. Click on the edit button on the lower right portion of a restaurant card. <br> 2. Select a specific restaurant first and the user will be directed on the selected restaurant page then click on the edit button found on the lower right portion of the page. <br> 3. The user can change the details on the fields then click on the update button. <br> 4. Leave a blank field then click the submit button. <br> 5. Click on the cancel button. | 1. Once all the fields have been filled up and the update button has been clicked the user will be redirected back to the ‘Home’ page. The updated restaurant post will appear on the API and Mongo DB database. <br> 2. If the user left any blank fields on the form and once the update button has been clicked, a notification will appear on the bottom of the page to remind the user to fill up all the fields on the form. <br> 3. If the cancel button is clicked the user will redirected back to the ‘Home’ page. |
|7 | To delete a restaurant post | 1. Click on the delete button on the lower right portion of a restaurant card. <br> 2. Select a specific restaurant first and the user will be directed on the selected restaurant page then click on the delete button found on the lower right portion of the page. <br> 3. Once the delete button has been clicked the user will be directed on the selected restaurant delete page to confirm deletion of the post. <br> 4. Click on the cancel button. | 1. When the user confirmed the deletion of a post by clicking on the delete button, the user will be redirected back to the ‘Home’ page. The deleted post will no longer appear both on the restful API and mongoDB database. <br> 2. If the cancel button is clicked the user will redirected back to the ‘Home’ page. |

<h3>Credits</h3>
<ul>
<li>Icon - https://www.flaticon.com/free-icons/restaurant Restaurant icons created by Konkapp - Flaticon</li>
<li>Banner photo - Photo by Antony Trivet: https://www.pexels.com/photo/variety-of-foods-on-black-ceramic-plates-13354577/</li>
<li>Food images: Pexels.com</li>
<ul class=imglist>
<li> Photo by Bea Dela Cruz: https://www.pexels.com/photo/close-up-photo-of-cooked-dish-on-white-ceramic-plate-12594202/ </li>
<li> Photo by Aleksey Bystrov: https://www.pexels.com/photo/delicious-burger-and-fries-serving-13163534/ </li>
<li>Photo by Maria  Bortolotto : https://www.pexels.com/photo/tasty-italian-pasta-with-spinach-leaves-and-grated-cheese-6382782/</li>
<li>Photo by Wallace Araujo: https://www.pexels.com/photo/close-up-shot-of-a-risotto-9058939/</li>
<li>Photo by Dana Tentis: https://www.pexels.com/photo/cooked-foods-750073/</li>
<li>Photo by Rajesh TP: https://www.pexels.com/photo/cooked-pasta-near-shrimp-tempura-2098131/</li>
<li>Photo by Becerra Govea Photo: https://www.pexels.com/photo/top-view-of-soju-and-a-variety-of-korean-food-5773968/</li>
</ul>
</ul>
<h3>Acknowledgement</h3>
<li>I would like to express my gratitude to all the teachers who guided me and provided advice in completing the project.</li>


