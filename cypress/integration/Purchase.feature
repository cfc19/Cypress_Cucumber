Feature: Login and make a purchase on Swag Labs

  As a standard user I want to make a purchase of the cheapest and most expensive item

  Scenario: Login and make the purchase
    Given I am on the Swag login page
    And I login as a standard user
    When I add the most expensive item and cheapest item
    Then the basket should contain the items
    And I can complete the purchase
    