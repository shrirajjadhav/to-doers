# Readme - To-Doers 📝

A simple ToDo app for the people who do! 😎 

To-Doers is a featured portfolio project made by [Shriraj Jadhav](https://github.com/shrirajjadhav)

## Table of Contents

- [Readme - To-Doers 📝](#readme---to-doers-)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Technologies used](#technologies-used)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Usage](#usage)
    - [Managing Issues \& Changes](#managing-issues--changes)
    - [License](#license)
  - [Resources](#resources)

## Features

- Create, edit, and delete tasks
- Mark tasks as complete / incomplete
- User-friendly interface
- Responsive design for various devices
- Saves user data in Browser Local Storage (for now)

## Technologies used

- [React](https://react.dev/) (react hooks)
- [Firebase](https://firebase.google.com/) (as backend)
- [TailWindCSS](https://tailwindcss.com/) (Css tool)
- [DaisyUI](https://daisyui.com/) (TailwindCSS Component Library)
- [React Icons](https://react-icons.github.io/react-icons) (icon library for react)
- [Vite](https://vitejs.dev/) (local development server and bundler)

## Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:

- [nodejs](https://nodejs.org/en), `npm` | `yarn` (this project uses [yarn](https://yarnpkg.com/))
- [Firebase](https://console.firebase.google.com/) Project (setup a firebase project, [initialize](https://firebase.google.com/docs) firebase app and acquire app config keys )

### Installation

1. Clone the repository:

```bash
git clone https://github.com/shrirajjadhav/to-doers.git
```

2. Change directory

```bash
cd to-doers
```

3. Install project dependancies
   
Using `npm`
```bash
npm install
```
OR 
Using `yarn`
```bash
yarn 
```

4. Setup Firebase config

Edit `src/config/firebase.sample.ts`, add your firebase app credentials.

Rename the file `firebase.sample.ts` as `firebase.ts`

### Usage

1. Start the app:

```
npm run dev
```
with `yarn`
```
yarn dev
```

2. Open your web browser and navigate to [http://localhost:5173](http://localhost:5173)

3. Begin managing your tasks!

### Managing Issues & Changes

For major changes or fixes, please open an issue to discuss the proposed changes.

### License
This project is licensed under the [GPL-3.0 license](https://github.com/shrirajjadhav/to-doers/blob/main/LICENSE).

## Resources

|Resource name|Resource link|
|---|---|
|Repo Link|[https://github.com/shrirajjadhav/to-doers](https://github.com/shrirajjadhav/to-doers)|
|App Link|[https://to-doers.web.app/](https://to-doers.web.app/)|
