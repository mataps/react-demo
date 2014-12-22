Feature: The user needs to be able to upload files
  This files should be saved within his own IP Folder and inside Session Folder of his visit
  New Session will be assign on every visit of the page
  Session folders are created on upload

  Scenario: Uploading empty files
    Given a new "Visitor"
    When I "UploadFiles" with "EmptyFiles"
    Then expect Error "No file uploaded"

  Scenario: Uploading multiple files
    Given a new "Visitor"
    When I "UploadFiles" with "JpegFile"
    Then expect "UploadSaved"

