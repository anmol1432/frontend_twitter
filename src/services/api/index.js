// Task API

const url = 'tasks';
const plural = 'tasks';
const single = 'task';

// plural and single may be used for message logic if needed in the ApiCore class.

const apiTasks = new ApiCore({
    getAll: true,
    getSingle: true,
    post: true,
    put: false,
    patch: true,
    delete: false,
    url: url,
    plural: plural,
    single: single
});

apiTasks.massUpdate = () => {
    // Add custom api call logic here
}

module.export = apiTasks;



// This api folder contain our api endpoints for get and post data
// services
// └── api
//     └── utilities
//         ├── core.js
//         ├── index.js
//         ├── provider.js
//         └── response.js
// We're going to focus on three main files here:
// provider.js --> Defines how axios or any api library should connect with the database and
// connect our response data back to any connected file or component.

// core.js --> Defines the reusable class that makes use of our provider.
// js with options we can define per api endpoint collection.
// As a result of being a constructor function, we can extend it's functionality on individual
// API collections as needed while still keeping a consistent base for the majority of our code.

// response.js --> Middleware to handle response parsing, error handling, logging, etc...