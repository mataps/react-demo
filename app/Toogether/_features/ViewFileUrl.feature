Feature: Anyone should be able to see the file when they open the url

  Scenario: Somebody views an invalid file url
    Given a "Viewer"
    When I view "UploadedFile" with "InvalidUrl"
    Then expect error "AssetNotExist"

  Scenario: Somebody views a file url
    Given a "Viewer"
    When I view "UploadedFile" with "ValidUrl"
    Then I should see "JsonFileInfo"