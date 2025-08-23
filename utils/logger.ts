import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export class Logger {
    private static logDir = path.join(__dirname, '../logs');
    private static logFile = path.join(Logger.logDir, 'log.txt');

    static log(message: string) {
        const timestamp = new Date().toISOString();
        const logMessage = `[${timestamp}] ${message}\n`;

        if (!fs.existsSync(Logger.logDir)) {
            fs.mkdirSync(Logger.logDir);
        }

        fs.appendFileSync(Logger.logFile, logMessage, 'utf8');
    }
}