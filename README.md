# Demosphere Code Test
Please pick **any** of the two problems below to complete. You can use any JS framework such as React, Angular, or Vue that you are comfortable building this solution. Data persistence is not required.

You are encouraged to submit the test answers within 48 hours; however, we understand you may need more time due to other commitments. Please communicate any submission delay to the hiring manager.

Test Data URL: https://dii-test.s3.amazonaws.com/players.json

Please use the above URL provided to fetch the test data. Fork this repository and submit a PR when you are done with your solution. _Note_: We encourage you to use a [private repo](https://help.github.com/en/articles/setting-repository-visibility#making-a-repository-private) so that other candidates cannot gain access to your solution.

## Problem 1 - Filtering
Create a web interface that allows a user:

1. To filter a list of players based on specific criteria. These are the search filters you will be creating based on the test data:
    - Age: allow the user to filter for players within a specific age or age range (e.g. 7, 5-9, 15-17, etc.)
    - Gender: allow the user to filter for players based on their specified gender
    - State:  allow the user to filter for players based on the state they reside in from available test data
    - Status:  allow the user to filter for players based on their status (active/inactive)

You can apply more than one filter to narrow down your search results.

2. To edit the information of any player. 

**Assumption:**

When more than one filter is applied, the “AND” operator applies to all filters. For example, an age filter of 15-17 and a location filter of VA should only show players that are aged 15, 16, or 17 and are from VA.  All filters are case insensitive. Data persistence is not required when editing user information.

The output should show all the players that fit within the specific criteria along with the number of players that fit the criteria.


## Problem 2 - Drag and Drop
Create a web interface for a user: 

1. To easily create teams from the available player list. 
    - Visually indicate which players are ACTIVE and which are INACTIVE
    - Display 3 Teams with empty roster slots (Team 1, Team 2, and Team 3)
2.   To drag ACTIVE Players onto Teams.
     - Players can be dragged from one team to another
3. To edit the information of players that are not in any team

The output should show the three team rosters with their players, along with a list of all the players not assigned to a team.

**Assumption:**
Data persistence is not required when editing user information or creating teams.
