Feature: Anyone should be able to see the file they uploaded

  Scenario: Returning visitor view files
    Given a "Visitor"
    When I view "UploadedFiles"
    Then I should see "JsonUploadedFiles"
