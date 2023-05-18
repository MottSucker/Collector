import { MongoClient } from "mongodb";

export class MongoDB {

    private uri = "mongodb+srv://admin:collectorclusterpassword@collector.w5wdj7r.mongodb.net/?retryWrites=true&w=majority";
    private client = new MongoClient(this.uri);
    async connect() {
        try {


            await this.client.connect((err: any) => {
                const collection = this.client.db("test").collection("devices");
                // perform actions on the collection object
                this.client.close();
            });

            // List databases:
            await this.listDatabases(this.client);
        } catch (err) {
            console.log("Database conenction failed with error: " + err);
        }
    }

    // List all database tables
    private async listDatabases(client: MongoClient) {
        var databasesList = await client.db().admin().listDatabases();

        console.log("Databases:");
        databasesList.databases.forEach(db => console.log(` - ${db.name}`));
    }

}