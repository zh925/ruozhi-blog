import * as path from 'path';
import * as fs from 'fs';
import sequelize from "./src/db";

const modelPath = path.resolve(__dirname, 'src/model');
const modelFiles = fs.readdirSync(modelPath);

modelFiles.forEach(modelFile => {
    const modelName = modelFile.substring(0, modelFile.length - 3);
    module.exports[modelName] = import(modelPath + '/' + modelName);
});

sequelize.sync({force: true});
