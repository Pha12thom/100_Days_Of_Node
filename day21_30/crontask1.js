import cron from "node-cron";

const task = () => {
    console.log('You will see this message every second');
};

cron.schedule("* * * * * *", task);

export default task;