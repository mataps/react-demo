#as a profile encoder I add residents to the system
#  I can create affiliation
#  I can assign a resident to an affiliation
#  I can create users
#  I can create passwords
#
#
#
##Feature: Add user
###  Feature description
##  Scenario: It should create a user
##    Given I have the following "UserCreated"
##      | username  | password  | group           |
##      | test      | 123       | Administrators  |
##      | Joe       | aw        | Encoders        |
##      | Ryan      | test      | Accountant      |
##    When I "CreateUser"
##      | username  | password  | group           |
##      | ryan      | 123       | Administrators  |
##    Then expect "UserCreated"
##
##  Scenario: It should create a user
##    Given I have the following "UserCreated"
##      | username  | password  | group           |
##      | test      | 123       | Administrators  |
##      | Joe       | aw        | Encoders        |
##      | Ryan      | test      | Accountant      |
##    And I have the following "UserUpdated"
##      | username      | username  |
##      | Ryan          | ryan      |
##    When I "UpdateUser"
##      | username      | username  |
##      | ryan          | admin     |
##    Then expect error "MaxUsernameUpdateReached"
#
##    #data
##      | aggregate     | event           | data                                  |
##      | User          | "UserUpdated"   | {username: "admin"}                   |
##      | User          | "UserCreated"   | {username: "ryan", password: "123"}   |
##      | Group         | "GroupUpdated"  | {name: "test"}                        |
##      | Resident      | "LocationMoved" | {location: "Manila", geo: 123}        |
##      | Resident      | "LocationMoved" | {location: "Cebu" geo: 234}           |
#
##  Scenario: It should change username
##    Given I have the following UserCreated
##      | username  | password  | group           |
##      | test      | 123       | Administrators  |
##      | Joe       | aw        | Encoders        |
##      | Ryan      | test      | Accountant      |
##    When I UpdateUser
##      | user    | username |
##      | Ryan    | ryan     |
##    Then expect UserUpdated
#
##  Scenario: It should email the user after changing username
##    Given I have the following UserCreated
##      | username  | password  | group           |
##      | Ryan      | 123       | Administrators  |
##    When I "ChangeUsername"
##      | user    | email                 |
##      | Ryan    | example@example.com   |
##    Then expect "EmailSent"
##      | user    | email                 |
##      | Ryan    | example@example.com   |