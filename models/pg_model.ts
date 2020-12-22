import{ Client } from 'https://deno.land/x/postgres/mod.ts';
import {QueryResult} from 'https://deno.land/x/query.ts';

const client = new Client({
    hostname : "localhost",
    port : 5432,
    user : "lusitaayu",
    password : "lusita123",
    database : "db_blog"

});
export async function select(){
    await client.connect();
    let hasil : QueryResult = await client.query("select * from tbl_kategori ");
    await client.end();

    return hasil.rowsOfObjects();
}