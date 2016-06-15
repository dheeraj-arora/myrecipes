Flaming Hot
==============
Welcome to Flaming Hot. 

Prerequisites:
---------------
1. Check out the code from github link to a local folder on your system.
2. JQuery library and images are fetched from internet

How to run Flaming Hot:
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
