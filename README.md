## INSTALLATION

To install / unpack application run `yarn` 

## PROJECT

To run project hit `yarn start` from your console, then open your browser and go to `localhost:8080`

## Problem to solve

App is hosted on [https://tokyofoodservice.herokuapp.com] using heroku BUT, heroku and Foursquare are playing ping-pong with error i get.
I am sorry for that, you can try to reach app but i doubt that they will solve it until you look on it.
Here is my open bug, still wait for response from their side [https://help.heroku.com/sharing/e852722d-44cd-4e85-82b1-8729b7d5b717]() 

This project was based on assumption that user would like to order food and have easy to see app for near buy market.
App utilize: search by keyword user type, random selection and map view of particular restoran.

Implemented is delay for typing in case of user type fast so not waist to much HTTP request.
Delay function will fire every 200ms in case nothing is entered.  

__TEST__ is missing due problem to solve with heroku and not enough time to write some :(


## Library used

On this projct i have used:
 - React 
 - Redux  
 - Material-UI -> V 1-beta
 - google-maps-react -> for presenting map view
 
## Architecture

- Environment configuration is in `config` folder

- All static files like images are in folder `sr/www`
- Style infrastructure is located in `src/style-helper`

- Component is in `src/component`
- Container is in `src/container`
- Services is in `src/services`
 
## License

MIT

## Milos Nikolic, 13.12.2017
 - [https://github.com/Milos5611/cogent_lab](GitHub)
 - [https://www.linkedin.com/in/nikolicmilos](Linkendin)
