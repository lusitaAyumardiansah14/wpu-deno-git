import{ Client } from 'https://deno.land/x/postgres/mod.ts';
import {QueryConfig, QueryResult} from 'https://deno.land/x/postgres/query.ts';

const client = new Client({
    hostname : "localhost",
    port : 5432,
    user : "lusitaayu",
    password : "lusita123",
    database : "db_blog"

});
export async function select(qry : QueryConfig){
    await client.connect();
    let hasil : QueryResult = await client.query(qry);
    await client.end();

    return hasil.rowsOfObjects();
}