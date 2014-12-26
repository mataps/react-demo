Feature: Anyone should be able to upload files

  Scenario: Uploading empty files
    Given a "NewVisitor"
    When I "UploadFiles" with "EmptyFiles"
    Then expect error "FileUploadFailed"

  Scenario: Uploading jpeg files
    Given a "NewVisitor"
    When I "UploadFiles" with "JpegFiles"
    Then expect "UploadSaved"

