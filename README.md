Challenge:
Make a start on building a UK Government acronym search, that allows users to search for an acronym, and will return the matching organisation for that acronym, if one exists.

There is no need to use a database to store this information, you can hardcode it into your application (though feel free to use a database if you prefer!). The application should be viewable in a browser, but you can write the logic in whatever language or framework you prefer (server or client-side).

User stories:
 - When the user first loads the application, they are presented with a free text search box
 - When they search for an acronym, the application displays the full organisation
 name for that acronym if one exists
 - If no such acronym exists, an appropriate message is displayed
 - An autocomplete is available on the search box, so that as a user begins to type
 acronyms that match the letters they entered are presented in a dropdown
 - Partial matching is available (e.g. if a user searches for "DC", results are returned for both "DCMS" and "DCLG")

 Process:
 - create a form to capture user's input
 - have a function that searches for the input in the keys of db.json
 - return the results of any matches as a string
 - display the search results on the web-page
 - if there are no matches have a default reply to display