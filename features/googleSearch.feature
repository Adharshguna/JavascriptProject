Feature: Gmail positive case
 @positive
  Scenario Outline: Search for Gmail
    Given I open the Gmail homepage
    When I search for "<googlesearch>"
    Then the page title should contain "Couldn’t sign you in"
    Examples:
      | googlesearch        |
      | adharshguna1@gmail.com   |
      # | Microsoft Copilot AI|
      # | Microsoft Copilot 2024|

    Scenario Outline: Search for Microsoft Copilot
    Given I open the Gmail homepage
    When I search for "<googlesearch>"
    Then the page title should contain "Couldn’t sign you in"
    Examples:
      | googlesearch        |
      | test@gmail.com   |