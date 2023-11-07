import { createPool } from 'mysql2';
export const pool = createPool({
    database: "electro_client",
    user: "root",
    host: "localhost",
    namedPlaceholders: true,
    decimalNumbers: true
});
//# sourceMappingURL=connection.js.map