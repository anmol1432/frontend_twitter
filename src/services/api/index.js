// Task API

const url = 'tasks';
const plural = 'tasks';
const single = 'task';

// plural and single may be used for message logic if needed in the ApiCore class.

const apiTasks = new ApiCore({
    getAll: true,
    getSingle: true,
    post: true,
    put: true,
    patch: true,
    delete: true,
});

// apiTasks.massUpdate = () => {
//     // Add custom api call logic here
// }

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



//  Useage example :----
    // import { apiTasks } from '@/services/api';

    // export function Tasks() {
    //     const [tasks, setTasks] = useState([]);

    //     useEffect(() => {
    //         _getTasks();
    //     }, []);

    //     function _getTasks() {
    //         apiTasks.getAll().then((res) => {
    //             let arr = _parseTasks(res.results.data);
    //             setTasks(arr);
    //         });
    //     }

    //     function _parseTasks(tasks) {
    //         return tasks.map((task) => {
    //             // Parse task information
    //             return task;
    //         });
    //     }

    //     function _createTask(task) {
    //         apiTasks.post(task).then((res) => {
    //             // state logic
    //         });
    //     }

    //     function _updateTask(task) {
    //         apiTasks.patch(task).then((res) => {
    //             // state logic
    //         });
    //     }

    //     function _removeTask(id) {
    //         apiTasks.remove(id).then((res) => {
    //             // state logic
    //         });
    //     }

    //     return (
    //         <ul>
    //             {tasks.map((task) => (
    //                 <li key={task.id}>{task.name}</li>
    //             ))}
    //         </ul>
    //     );
    // }