import mongoose from "mongoose";
import app from "./app";
import config from "./app/config";

const port = 3000

async function main() {
    try {
        await mongoose.connect(config.database_url as string);
        app.listen(config.port, () => {
            console.log(`Class Management listening on port ${config.port}`)
        })
    } catch (err) {
        console.log(err);
    }
}

main();