import { connect } from "mongoose";
import { URI } from "../config/conf.js";

export const dbConnection = async () => {
    try {
        await connect(URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Base de datos conectada');
    } catch (err) {
        console.log('Error al conectar a BD: ', err);
        process.exit();
    }
};
