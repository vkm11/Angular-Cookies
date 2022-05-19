# install cookies (Angular-12):-
npm install --save ngx-cookie-service

*and import :- 
app.module.ts:-

import { CookieService } from 'ngx-cookie-service'
'
'
'
'
providers:[CookieService],

# What is web storage:-
      Web storage is an API that provides a mechanism by which browsers can store key/value pairs locally within the user's browser, in a much more intuitive fashion than using cookies. 
      The web storage provides two mechanisms for storing data on the client.

1. Local storage: It stores data for current origin with no expiration date.
2. Session storage: It stores data for one session and the data is lost when the browser tab is closed.


# What is a Cookie:-
        A cookie is a piece of data that is stored on your computer to be accessed by your browser. Cookies are saved as key/value pairs. For example, you can create a cookie named username as below,

document.cookie = "username=John";

# Why do you need a Cookie:-
        Cookies are used to remember information about the user profile(such as username). It basically involves two steps,

      1.  When a user visits a web page, the user profile can be stored in a cookie.
        
      2.  Next time the user visits the page, the cookie remembers the user profile.

# What are the options in a cookie:-
There are few below options available for a cookie,

1. By default, the cookie is deleted when the browser is closed but you can change this behavior by setting expiry date (in UTC time).

document.cookie = "username=John; expires=Sat, 8 Jun 2019 12:00:00 UTC";

2. By default, the cookie belongs to a current page. But you can tell the browser what path the cookie belongs to using a path parameter.

document.cookie = "username=John; path=/services";

# How do you delete a cookie:-
          You can delete a cookie by setting the expiry date as a passed date. You don't need to specify a cookie value in this case. 
          
          For example, you can delete a username cookie in the current page as below.

document.cookie =
  "username=; expires=Fri, 07 Jun 2019 00:00:00 UTC; path=/;";

# Note:-
        You should define the cookie path option to ensure that you delete the right cookie. Some browsers doesn't allow to delete a cookie unless you specify a path parameter.  
        
# What are the differences between cookie, local storage and session storage:-
Below are some of the differences between cookie, local storage and session storage,        
  
# What is the main difference between localStorage and sessionStorage:-

          LocalStorage is the same as SessionStorage but it persists the data even when the browser is closed and reopened(i.e it has no expiration time)
          whereas in sessionStorage data gets cleared when the page session ends.


# What are the methods available on session storage:-

The session storage provided methods for reading, writing and clearing the session data

// Save data to sessionStorage
sessionStorage.setItem("key", "value");

// Get saved data from sessionStorage
let data = sessionStorage.getItem("key");

// Remove saved data from sessionStorage
sessionStorage.removeItem("key");

// Remove all saved data from sessionStorage
sessionStorage.clear();



<!-- END  -->
















# AngularCookies

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
