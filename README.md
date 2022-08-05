# Inflorescence
## Project Description
For the Per Scholas Module 2 Project, we are tasked with creating an app that emulates a store of our creation. I decided to build a website that sells arrangement of flowers for different occassions.  


## Routes
### flowers
   VERB 		 | 		  PATH 		 |  	 DESCRIPTION
------------ | ------------- | -------------------
GET | /api/v1/ | home page  |
GET | /api/v1/flor/ | index showing all flower arrangements |
GET | /api/v1/flor/:id | show page for selected flower arrangement |
GET | /api/v1/flor/new | page to add flower product |
POST | /api/v1/flor/ | add a flower product |
GET | /api/v1/flor/:id/edit | page to edit a flower product |
PUT | /api/v1/flor/:id | edit/update a flower product |
DELETE | /api/v1/flor/:id | delete a flower product|