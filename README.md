# habit-nuker
Micro habit tracker

## Concept

Concept: A habit tracking web app for multiple people. The idea is to track
micro habits as defined by James Clear in Atomic Habits.

## Functionalities

- Set a habit.
- Set a goal for how the habit will look in a certain ammount of time.
- Check micro habit as completed. (micro habits as defined by James Clear in
Atomic Habits) 

## Technologies

- Backend: Django REST Framework API.
- Frontend: React Native for web and mobile apps.

## MVP

An app where you can login, add five habits that you want to maintain and
you daily check if you did it or not. The app keeps track of how many
consecutive days you have accomplished the habit. 

Models: User, Category, Habit, Goal

User >> One to Many >> Habit

Category >> One to Many >> Habit

Habit >> One to One >> Goal


## Setup

- Clone repo from github:

    `git clone git@github.com:ignaoya/habit_nuker.git`

- Install `pipenv` if it is not among your installed Pyhton packages:

    `pip install pipenv`

- Go to the repo folder and install dependencies of the virtual environment:

    ```
    cd habit_nuker
    pipenv install
    ```

## Launch

- Make sure you completed the steps in the [setup section](#setup).

- Activate the virtual environment:

    `pipenv shell`

- If it's the first time the application is being run, apply migrations:

    `python manage.py migrate`


- Start the development server:

    `python manage.py runserver`
    