Feature: Swag Labs - Login

  Scenario: As a standard_user, I want to log in successfully
  Given Hafis is on the login page
  when Hafis login with "standard_user" credential
  Then Hafis should see home page