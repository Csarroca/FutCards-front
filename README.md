# FUTCARDS

FutCards is the place where you can create your own fifa football player Cards. Also you can modify and share with your friends and deleted when you get bored. You can filter the cards by position.

Comming soon you will be able to create your own team icluding all your friends!

## Technologies:

🔸 FRONT
React | Redux | Styled Components | Typescript | Jest | MSW | Toastify | Font Awesome

🔸 BACK
NodeJS | ExpressJS | MongoDB | Mongoose | JWT | Supabase | Jest | Supertest

🔸 TOOLS
Trello | Postman | Figma | Git

## Metrics

🔥 Lighthouse

![FutCards Lighthouse]()

📈 [Back SonarCloud metrics]()

📈 [Front SonarCloud metrics]()

LINKS

🌐✨ [Crypto Realm]()

🔗 [Original front repository]()

🔗 [Original back repository]()

## Back endpoints

🔹 POST ➡️ .../register
Register a user. The payload should have a username with more than 3 characters and a password with more than 8 characters.

🔹 POST ➡️ .../login
Login with an existing user to get a valid token. The payload should have an existing username and password.

🔹 GET ➡️ .../cards
Get all the cards in a list with the fields name, position, image, and the football stats.

🔹 GET ➡️ .../cards/:id
Get the details of a specifyc card.

🔹 POST ➡️ .../cards/create
Create a card. The payload should have a title, an image, a description, the number of people that will be involved in the team, the estimated value, and the ICO date in which the cryoto should be release.

🔹 DEL ➡️ .../cards/:idToDelete
Delete a card with it's ID.

🔹 PUT ➡️ .../cards/update/:id
Edit a card with it's ID.
