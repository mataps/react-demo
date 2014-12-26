Feature: Anyone should be able to send files they uploaded

  Scenario: Returning visitor sends the file with invalid emails
    Given a "Visitor"
    When I "SendAsset" with "InvalidEmails"
    Then expect error "InvalidEmails"

  Scenario: Returning visitor sends the file
    Given a "Visitor"
    When I "SendAsset" with "ValidEmails"
    Then expect "AssetSent"

