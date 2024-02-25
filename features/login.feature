Feature: Swag Labs - Login
  Background: User on the login page
    Given Hafis is on the login page

  Scenario: As a standard_user, I want to log in successfully
    When Hafis login with "standard_user" credential
    Then Hafis should see home page

  Scenario: As a locked_out_user, I should get error message
    When Hafis login with "locked_out_user" credential
    Then Hafis should see error "Epic sadface: Sorry, this user has been locked out"