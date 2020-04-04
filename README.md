# Grocery-Website
This is an example website just to present what I know about web development. This website has been entirely developed by me.

I used bootstrap4 to style the UI/UX of frontend and also used AJAX and JQuery to send and recieve HTTP requests from client side to
the srver side and vice-versa.

I created backend part using Django 3.0.4.


## Login/SignUp Screen

![This is the login screen](https://github.com/Divyansh9125/Images/blob/master/Screenshot_2020-04-05%20Example%20Grocery%20e-Store.png)

This is the first screen that welcomes you onboard. It contains login form and signup form, though currently (or by default) hidden but as you click on 'Login', it toggles login form with a nice animation of login text going up (here I used CSS property: transform to animate it) and when you click on 'SignUp',it will open signup form for you also with same nice animation. I extensively used bootstrap4 for creation of this page.

![This is login form](https://github.com/Divyansh9125/Images/blob/master/Screenshot_2020-04-05%20Example%20Grocery%20e-Store(1).png)
![This is signup form](https://github.com/Divyansh9125/Images/blob/master/Screenshot_2020-04-05%20Example%20Grocery%20e-Store(2).png)
![This is signup form](https://github.com/Divyansh9125/Images/blob/master/Screenshot_2020-04-05%20Example%20Grocery%20e-Store(3).png)

### Account creation/Login
After greeting the customer with this beautiful screen, it gives you two options, first if you are already registered, you can directly login, else you have to signup first and then proceed to login. First if you try to login, it sends your login data in JSON format to the Django's recieving view, where your JSON is unfolded and then that view checks if the user with given G-ID exists or not, if exists, it goes further for password varification, if not, it tells you straight forward.
