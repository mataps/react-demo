Approview
========

## REQUIREMENTS
 - (PHP) composer
 - (NODEJS) node
 - (NODEJS) bower
 
## INSTRUCTIONS
Install [composer](https://getcomposer.org/download)  
``curl -sS https://getcomposer.org/installer | php``
`` composer.phar install ``  

Download [NodeJS](http://nodejs.org)  

Install js dependencies
``npm install -g bower``
``bower install``
``npm install``

Compile js
``gulp dist``

Run the server  
``php artisan serve``

You can now view the app on
``localhost:8000``



# EXTRAS
## RUNNING TESTS (BACKEND)
``behat``  

## RUNNING TESTS (FRONTEND)
``npm run test``  