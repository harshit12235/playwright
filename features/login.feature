Feature: login

    Scenario: Verify user should be able to login with valid credentials
        Given user is on the login page
        Then user enters "username"
        And user enters "password"
        And user click on submit button
        Then user should be able to navigate to home screen
