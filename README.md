# Welcome to APP AdmSys

 The Frontend of  App **Admsys** is created with love & uses technologies such as:
 - ReactJS - Hooks.
 - ReactDOM - Router
 - Antdesign.
 - SASS.
 - Axios.
 - JsonWebToken
 
![home](https://i.ibb.co/09fY8xm/image.png)


# Files

Download Files and Start Server, which means all your files are automatically saved locally and are accessible **offline!**
 ### `npm i -y`
 ### `npm start`

## Register:
##### For Register you need:
-   Name (String).
-   Email (Example:  [user@mail.com](mailto:user@mail.com)).
-   Password (Example: 1234!Qwer) - (From 8 to 10 characters | symbol: *?! | One capital letter).
- DNI (Example: 59952143K).
>Note: For the admin user the 'role' must be given from the backend or database

[![Register user](https://i.gyazo.com/43ee82f573e56cdb1600ed434077e24a.gif)](https://gyazo.com/43ee82f573e56cdb1600ed434077e24a)

## Login:
##### For Login you need:
-   Email (Your user's email:  [user@mail.com](mailto:user@mail.com)).
-   Password (Your user's password: 1234!Qwer).
>Note: This user is for create tickets and delete.

[![Login User](https://i.gyazo.com/bd5623990a80d627aac6e281c5e27c05.gif)](https://gyazo.com/bd5623990a80d627aac6e281c5e27c05)

## Create Ticket:
##### In dashboard you click on Create ticket for support:
-   Status: Active.
-   Date: Preferred date for support.
-  Hour: Preferred time for the support date.
- Error: Problem you have.
- Text: Brief description of the problem.

[![Image from Gyazo](https://i.gyazo.com/3224509dc71cf996f292a75a7f8eaaed.gif)](https://gyazo.com/3224509dc71cf996f292a75a7f8eaaed)

## View Tickets:
##### In dashboard you click on View tickets for View and Delete ticket:
-   Tickets are shown to each user by means of the DNI and deleted by the ObjectId of document.

[![View tickets user](https://i.gyazo.com/c3f2b205c688e97dbd1be53a1e920770.gif)](https://gyazo.com/c3f2b205c688e97dbd1be53a1e920770)

## View User:
##### In dashboard you click on user after in View for data of user:

![View User](https://i.ibb.co/ZzJFCJm/image.png)

## Logout:
##### In dashboard you click on user after in Logout for exit of user:
[![Logout User](https://i.gyazo.com/3f0f7b1fdfd01b4d750e057b5660aa93.gif)](https://gyazo.com/3f0f7b1fdfd01b4d750e057b5660aa93)

## Admin:
### In the Admin view, only the administrator has permission.
#### An ordinary user will not have access and will be redirected to user view.
[![Common user](https://i.gyazo.com/506021e2998a4ee8c6b37c535066d1e2.gif)](https://gyazo.com/506021e2998a4ee8c6b37c535066d1e2)

## User Admin:

The admin user has both common user and administrator permissions, so he can perform the same functions as the users only with three more views.
[![Admin](https://i.gyazo.com/953c83f42ee1efba4cedbc3f976c5b7c.gif)](https://gyazo.com/953c83f42ee1efba4cedbc3f976c5b7c)
- ### Inventory: To create computer equipment inventory, view, manage, edit, delete.

[![Inventory(create, view)](https://i.gyazo.com/f1607554c2ed44e3ffcccc523b0683a4.gif)](https://gyazo.com/f1607554c2ed44e3ffcccc523b0683a4)

>Create a Computer for the Inventory:

- status: Active.
- date: Date of purchase
- observations: Computer Observations (Hit, license, drivers, etc...).
- mark: manufacturer's brand.
- model: Model of computer.
- serial: Serial of computer.
- so: Operating system, Windows, Linux or MacOS.
- ram: RAM memory capacity.
- processor: Processor type, generation, make and model.
- disk: Maximum storage capacity and type of technology.
- price: Value of company assets.
- hdv: Check if you have an active resume in another document.
- user: User assigned to the computer.
- text: We add details such as colour, charger, laptop or PC.

[![Add Inventory](https://i.gyazo.com/ec11634a323cbb30a7a0119a73c94867.gif)](https://gyazo.com/ec11634a323cbb30a7a0119a73c94867)

>View Inventory and Delete Computer:

[![View and Delete](https://i.gyazo.com/c66a12abe3c5044d42bbd5a993f1d2c6.gif)](https://gyazo.com/c66a12abe3c5044d42bbd5a993f1d2c6)