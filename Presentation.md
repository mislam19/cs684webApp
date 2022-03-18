# PERSONAL NEWS FEED.

## Test Plan
<details><summary>Sprint 1</summary>
<p>
  
| Feature to be tested | Approach | Testing task | Responsibilities | Schedule | Pass/Fail |
| --- | --- | --- | --- | --- | --- |
| Login username and password functionality.| Manual testing | Enter username and password in the login form | Preet will perform manual testing on UX 1 | 15-18 feb'22 | Pass |
| Functionality of sign up page and the requirements fo different fields.| Manual testing | Click on signup page and try signing up with username and password | Pushti will perform the testing on sign up page and the requirements | 15-18 feb'22 |  |
| Link between sign up page and login page after filling out the sign up details | Manual testing | After signing up it should navigate to sign in page and should be able to login with new login credentials. | Muhaimin | 15-18 feb'22 |  |
| API response | Manual testing with postman software | Checking the response code with postman | Muhaimin will perform API response code test. | 19-21 feb'22 |  |
| Database | Verification by inspection | Entering user name and password and inspecting the database for that particular entry | Muhaimin will check for the database connectivity | 19-21 feb'22  |  |

</p>
</details>


<details><summary>Sprint 2</summary>
<p>
  
| Feature to be tested | Approach | Testing task | Responsibilities | Schedule | Pass/Fail |
| --- | --- | --- | --- | --- | --- |
| Login username and password functionality.| Manual testing | Enter username and password in the login form | Preet will perform manual testing on UX 1 | 15-18 feb'22 | Pass |
| Functionality of sign up page and the requirements fo different fields.| Manual testing | Click on signup page and try signing up with username and password | Pushti will perform the testing on sign up page and the requirements | 15-18 feb'22 |  |
| Link between sign up page and login page after filling out the sign up details | Manual testing | After signing up it should navigate to sign in page and should be able to login with new login credentials. | Muhaimin | 15-18 feb'22 |  |
| API response | Manual testing with postman software | Checking the response code with postman | Muhaimin will perform API response code test. | 19-21 feb'22 |  |
| Database | Verification by inspection | Entering user name and password and inspecting the database for that particular entry | Muhaimin will check for the database connectivity | 19-21 feb'22  |  |
</p>
</details>

## Test Case
<details> <summary> Test Cases </summary>
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
| UX 2.1 | By clicking  the sign up it should land him to another page for signing up | Click the sign up button below the login fields  | It should direct you to the sign up page  | Valid Url  and browser | Pushti |  |
| UX 2.2 | Incorrect form  of user id | Username should be atleast 8 string long and no space included.  | If incorrect combination is entered than an appropriate message is generated.  | Valid Url  and browser | Pushti |  |
| UX 2.3 | Incorrect form of password. | Password should not have spcaes and  atleast 8 character long , One upper case, one lower case, one special character.  | If the password is not entered in correct form display message password contain atleast 8 char ,one upper,lower,special character required.  | Valid Url  and browser | Pushti |  |
| UX 2.4 | Password field and confirmation password field mis matching. | Password and confirmation password field should be mismatched.  | If the password and confirmation password are mismatched display an appropriate message. | Valid Url  and browser | Pushti |  |
| UX 2.5 | Form is correctly field out then direct the user to the landing log in page.  | After filling out all the detail on the form correctly , click on the submit button it should navigate to landing log in page.  | Pop up message for successfully signed up.  | Valid Url  and browser | Pushti |  |
| UX 3.1 | Checking the new sign up credentials | Checking the new sign up credentials | Successful login | Valid Url  and browser | Muhaimin |  |
| DB 1.1 | Check whether data gets written  database after succesfull sign up. | Enter valid username and password after successful sign up see whether username  | Will have database entry same as enter by user. | Database Connectivity | Muhaimin |  |
| API 1.1 | Authorised user should sign up succesfully with response code 200. | Enter correct credentials  | Response code is 200 | Postman for checking response code. | Muhaimin |  |
| API 1.2 | Authorised user enters invalid password , response code 401. | Invalid ceredentials  | response code is 401. | Postman for checking response code | Muhaimin |  |
| API 1.3 | Valid password and invalid username then response code 401. | Response code is 401 on invalid credentials. | response code is 401 | Postman for checking response code | Muhaimin |  |
  </p>
  </details>

# Testreport

<details><summary>Test Report</summary>
 <p> 

| Date of test plan | Test case ID | Person executed the test | Pass/Fail | Comments |
| --- | --- | --- | --- | --- |
| 15 feb'22 | UX 1.1 | Preet | Fail | |
| 15 feb'22 | UX 1.2 | Preet | Fail | |
| 15 feb'22 | UX 1.3 | Preet | Fail | |
| 15 feb'22 | UX 1.4 | Preet | Fail | |
| 15 feb'22 | UX 1.5 | Preet | Fail | |
| 15 feb'22 | UX 1.6 | Preet | Fail | |
| 15 feb'22 | UX 1.7 | Preet | Fail | |
   
| Date of test plan | Test case ID | Person executed the test | Pass/Fail | Comments |
| --- | --- | --- | --- | --- |
| 16 feb'22 | UX 1.1 | Preet | Fail | |
| 16 feb'22 | UX 1.2 | Preet | Fail | |
| 16 feb'22 | UX 1.3 | Preet | Fail | |
| 16 feb'22 | UX 1.4 | Preet | Fail | |
| 16 feb'22 | UX 1.5 | Preet | Fail | |
| 16 feb'22 | UX 1.6 | Preet | Fail | |
| 16 feb'22 | UX 1.7 | Preet | Fail | |
   
   
| Date of test plan | Test case ID | Person executed the test | Pass/Fail | Comments |
| --- | --- | --- | --- | --- |
| 17 feb'22 | UX 1.1 | Preet | Pass | |
| 17 feb'22 | UX 1.2 | Preet | Pass | |
| 17 feb'22 | UX 1.3 | Preet | Pass | |
| 17 feb'22 | UX 1.4 | Preet | Pass | |
| 17 feb'22 | UX 1.5 | Preet | Pass | |
| 17 feb'22 | UX 1.6 | Preet | Pass | |
| 17 feb'22 | UX 1.7 | Preet | Pass | |

  </p>
  </details>
