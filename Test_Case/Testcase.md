## Test Case
<details> <summary> Test Cases S1</summary>
  <p>
    
| Test Case ID# | Test case description | Test steps | Expected result | Prerequisites | Executed by | Pass/Fail |
| --- | --- | --- | --- | --- | --- | --- |
| UX 1.1 | Valid username and valid password | Enter a valid Username, password and click on login button. | Successful login | Valid Url  and browser | Preet | Pass |
| UX 1.2 | Valid username and invalid password | Enter a valid Username, invalid password and click on login button. | A pop-up message box to show invalid username/password. | Valid Url  and browser | Preet | Pass |
| UX 1.3 | Invalid username and valid password | Enter Invalid username and valid password  | A pop-up message box to show invalid username/password. | Valid Url browser | Preet | Pass |
| UX 1.4 | Invalid username and valid password | Enter Invalid username and valid password  | A pop-up message box to show invalid username/password. | Valid Url browser | Preet | Pass |
| UX 1.5 | Blank field for username and valid password | Enter Invalid username and valid password  | A pop-up message box to show invalid username/password. | Valid Url Browser | Preet | Pass |
| UX 1.6 | Valid  username and blank field for password | Enter Invalid username and valid password  | A pop-up message box to show invalid username/password. | Valid Url  and browser | Preet | Pass |
| UX 1.7 | Blank field for username and  password | Leave both blank and press login button.  | A pop-up message box to show invalid username/password. | Valid Url  and browser | Preet | Pass |
| UX 2.1 | By clicking  the sign up it should land him to another page for signing up | Click the sign up button below the login fields  | It should direct you to the sign up page  | Valid Url  and browser | Pushti | Pass |
| UX 2.2 | Incorrect form  of user id | Username should be atleast 8 string long and no space included.  | If incorrect combination is entered than an appropriate message is generated.  | Valid Url  and browser | Pushti | Pass |
| UX 2.3 | Incorrect form of password. | Password should not have spcaes and  atleast 8 character long , One upper case, one lower case, one special character.  | If the password is not entered in correct form display message password contain atleast 8 char ,one upper,lower,special character required.  | Valid Url  and browser | Pushti | Pass |
| UX 2.4 | Password field and confirmation password field mis matching. | Password and confirmation password field should be mismatched.  | If the password and confirmation password are mismatched display an appropriate message. | Valid Url  and browser | Pushti | Pass |
| UX 2.5 | Form is correctly field out then direct the user to the landing log in page.  | After filling out all the detail on the form correctly , click on the submit button it should navigate to landing log in page.  | Pop up message for successfully signed up.  | Valid Url  and browser | Pushti | Pass |
| UX 3.1 | Checking the new sign up credentials | Checking the new sign up credentials | Successful login | Valid Url  and browser | Muhaimin | Pass |
| DB 1.1 | Check whether data gets written  database after succesfull sign up. | Enter valid username and password after successful sign up see whether username  | Will have database entry same as enter by user. | Database Connectivity | Muhaimin | Pass |
| API 1.1 | Authorised user should sign up succesfully with response code 200. | Enter correct credentials  | Response code is 200 | Postman for checking response code. | Muhaimin | Pass |
| API 1.2 | Authorised user enters invalid password , response code 401. | Invalid ceredentials  | response code is 401. | Postman for checking response code | Muhaimin | Pass |
| API 1.3 | Valid password and invalid username then response code 401. | Response code is 401 on invalid credentials. | response code is 401 | Postman for checking response code | Muhaimin | Pass |

  </p>
  </details>
  <details> <summary> Test Cases S2</summary>
  <p>
    
| Test Case ID# | Test case description | Test steps | Expected result | Prerequisites | Executed by | Pass/Fail |
| --- | --- | --- | --- | --- | --- | --- |
| TC 1.1 | Default landing page should display the new article. | Run your project and it should land you on articles page without login | News article fetch from the API from general category. | https://newsapi.org/ and valid url| Preet | Pass |
| TC 1.2 |  Setting page should be displayed upon event occuring. | Click on the setting button/link | Should be able to connect user with the setting page. | Valid Url and browser | Preet | Pass |
| TC 1.3 |  If no category is selected no functionality should be occuring for "ok or cancel" | Not selecting any category and click on "ok or cancel" button/link. | With no selection user is not enabled with "Ok /Cancel" buttons | Valid Url for setting pages| Pushti | Pass |    
| TC 1.4 |  Functionality of ok and cacel button/link after they have selected category. | Select atleast one category or multiple and then press "ok or cancel" button/link. | After selecting category user should be able to click on "ok or cancel" button/link. | Valid Url for setting pages| Muhaimin | Pass |   
| TC 1.5 | Unit test on test.js file | Run you unit test using JEST | Use some mocked data for unit testing. | JEST framework|  | Pass |
  </p> 
  </details>
  
  <details> <summary> Test Cases S3</summary>
  <p>
    
| Test Case ID# | Test case description | Test steps | Test Data | Expected result | Prerequisites | Executed by | Pass/Fail |
| --- | --- | --- | --- | --- | --- | --- | --- |
|  IT 1.1 | Checking the login and homepage module.  | Enter the valid username and valid password  | Username: preet123@google.com                 Password: Password@123| User will directed signed in page   |  Valid url and browser | Preet  | Pass |
|  IT 1.2 | Signup page and sign in page module.  | Enter the username and correct form of password.  | Username: demo123@google.com                 Password: Demo@123  | New user is registered and should be able to login with new credentials  | Valid url and browser  | Pushti  | Pass |
|  IT 1.3 | Setting modal and database integration  |  Select the few category from setting modal  |  Check mark business,technology & sports category |  Database will reflect the changes in user preferences   | Login credentials | Preet   | Pass |
|  IT 1.4 | Setting modal and home page integration  | Select the user prefrence category from setting modal  | Check mark technology & sports category  | Home page will reflect the changes based on user preferences   | Login credentials  | Pushti  | Pass |
|  IT 1.5 | Pagination with home and other categories in descending order with most recent first  | Select the user prefrence category ,paginate through home page with user selected category.   | Select the user prefrence category from setting modal  | Paginate on home page in descending order with most recent news  | Login credential  | Muhaimin  | Pass |
  </p> 
  </details> 

<details><summary> Test Cases S4</summary>
 <p>

| Test Case ID# | Test case description | Test steps | Test data | Expected result | Executed by | Pass/Fail |
| --- | --- | --- | --- | --- | --- | --- |
| RT 1 | Validation of login functionality | Enter a valid Username, valid password and click on login button. | username: preet123@google.com Password: Password@123 | Successful login |   | Pass |   
| RT 2 | Validation of login functionality | Enter a invalid Username, invalid password and click on login button. | username: preet@google.com Password:  Anything@123 | Unsuccessful login |   | Pass | 
| RT 3 | API endpoint login functionality | Enter a valid Username, valid password and click on login button. | username: preet123@google.com  Password:  Password@123  | API response code 200 |   | Pass | 
| RT 4 | API endpoint login functionality | Enter a invalid Username, invalid password and click on login button. | username: preet@google.com Password: Anything@123 | API response code is 401 |   | Pass |    
| RT 5 | Validation of signup button functionality | Click on Signup button. | signup link/button | Directed to the signup page |   | Pass |    
| RT 6 | Validation of signup page functionality | Enter username with atleast 8 string long | username: witchers@gmail.com | Valid username |   | Pass |    
| RT 7 | Validation of signup page functionality | Enter username with no more than 7 string | username: witcher  | Invalid form of username |   | Pass | 
| RT 8 | Validation of signup page functionality | Password should not have spaces and atleast 8 character long ,One upper case, one lower case, one special character | Password: Witcher@123 | Strong password  |   | Pass | 
| RT 9 | Validation of signup page functionality | Password should have spaces and atleast 8 character long , one lower case | Password: witcher 123 | Is not strong password |   | Pass |  
| RT 10 | Validation of signup page functionality | Password and confirm password field should be entered with same value. | Password: Witcher@123 Confirm: Witcher@123 | Password will be accepted |   | Pass |   
| RT 11 | Validation of signup page functionality | Password and confirm password field should be entered with different value. | Password: Witcher@123 Confirm: Witcher@23 | Password will not be accepted |   | Pass | 
| RT 12 | Validation of signup page functionality | Enter every field with their respective parameters and click on submit button /link | Username: witchers@gmail.com password: Witchers@123 Confirm password : Witchers@123  | User will be signup. |   | Pass |  
| RT 13 | Validate new user entry in database | Enter every field with their respective parameters and click on submit button /link | Username: witchers@gmail.com password: Witchers@123 Confirm password : Witchers@123  | User will be signup and their will be a record of user in database |   | Pass | 
| RT 14 | Default landing page display general news article | Run your project and it should land you on articles page without login. | - | News article fetch from the API from general category. |   | Pass | 
| RT 15 | Setting modal should be displayed upon event occuring. | Setting modal should be displayed upon event occuring. | - | Setting modal will open |   | Pass |
| RT 16 | Functionality of ok and save button/link after they have selected category. | Select atleast one category or multiple and then press "ok or cancel" button/link. | Checkmark business & technology  | After selecting category user should be able to click on "ok or cancel" button/link |   | Pass |   
| RT 17 | Functionality of ok and save button/link with no category selection. | Not selecting any category and click on "ok or cancel" button/link | - | With no selection user is not enabled with "Ok /Cancel" buttons. |   | Pass |     
| RT 18 | Functionality of setting modal and database integration | Select the few category from setting modal and hit save. | Check mark business,technology & sports category | Database will reflect the changes in user preferences |   | Pass |     
| RT 19 | Functionality of setting modal and home page integration | Select the user prefrence category from setting modal| Check mark business,technology & sports category | Home page will reflect the changes based on user preferences |   | Pass |     
| RT 20 | Functionality of pagination with home and other categories in descending order with most recent first| Select the user prefrence category ,paginate through home page with user selected category.| Select the user prefrence category from setting modal | Paginate on home page in descending order with most recent news |   | Pass |
| RT 21 | Functionality of pagination with home and other categories in descending order with most recent first| Select the user prefrence category ,paginate through home page with user selected category.| Select the user prefrence category from setting modal | Paginate on home page in descending order with most recent news |   | Pass |    
| RT 22 | Functionality of search box on landing page | Enter keywords in the search box on home page | Type tesla in search box. | Serach result will display the news article related with the most recent first |   | Pass |                                 
| RT 23 | Functionality of advanced search box  | Searching keyword with AND returns items that contain both the search terms | Type tesla AND SpaceX in search box. | Serach result will display the news article related with tesla and spacex with most recent first |   | Pass |
| RT 24 | Functionality of advanced search box | Searching keyword with OR returns items that contain either of the search terms | Type tesla OR SpaceX in search box. | Serach result will display the news article either has tesla or spacex within its text. |   | Pass |  
| RT 25 | Functionality of advanced search box | Searching keyword with NOT returns items that contain the first search term but not the second. | Type tesla NOT SpaceX in search box. | Serach result will display the news article that has only tesla within its text.  |   | Pass |     
| RT 26 | Functionality of search box | Enter keywords in the search box on home page | Type spoongebob in search box. | A meaningful message is displayed when are no results to show |   | Pass |    
| RT 27 | Search API endpoint | Search for artciles |  /search/{search terms}  | Response code 200 |   | Pass |    

  </p>
  </details>
  
