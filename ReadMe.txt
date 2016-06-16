Flaming Hot
==============
Welcome to Flaming Hot. 

Prerequisites:
---------------
1. Check out the code from github link to a local folder on your system.
2. JQuery library and images are fetched from internet

IMPORTANT NOTE -- Known issue:
------------------------------
I am using local JSON mock data as per the requirement, where firefox allows the local data, Google Chrome and IE browser gives an error:
"Cross origin requests are only supported for protocol schemes: http, data, chrome, chrome-extension, https, chrome-extension-resource."

Problem:
--------
Its not a proper API and Cross orgin headers are not in place.

Solution:
---------
1. Check the functionality in firefox browser
2. Setup an apache server and copy the entire folder inside your htdocs (or similar) folder and run the code. 


How to run Flaming Hot:
-----------------------
1. Open any browser.
2. Run index.html from the local GitHub folder.

APIs used:
---------------
- api_recp.json
- api_recp_selected.json
- api_ingr.json

(These APIs -JSON files are located at root folder)

Image location:
---------------
Images are fetched from internet. You need internet connection to view the images.

How it works?
---------------
1. Once the Trending Recipe is loaded, it runs api_recp.json which fetches and displays the following:
  - Image URL
  - Recipe Name

2. To search with ingredients, do the following:
  - Click on  -> "Ingredient List". It displays the available ingredients.
  - Once selected, it calls api_recp_selected.json which returns a mock data. The page is reloaded based on the ingredients selected.
  - api_ingr.json

3. To clear the selection, click Clear All.
