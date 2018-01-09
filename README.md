## INSTALLATION

To install / unpack application run `yarn` 

## PROJECT

To run project hit `yarn dev` from your console, then open your browser and go to `localhost:8080`

## Problem to solve

This project was based on assumption that user would like to see near buy market.
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
 - https://github.com/Milos5611
 - https://www.linkedin.com/in/nikolicmilos
