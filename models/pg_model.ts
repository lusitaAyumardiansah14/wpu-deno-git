import{ Client } from 'https://deno.land/x/postgres/mod.ts';
import {QueryConfig, QueryResult} from 'https://deno.land/x/postgres/query.ts';

const client = new Client({
    hostname : "localhost",
    port : 5432,
    user : "lusitaayu",
    //user : "lusitaayu",
    password : "lusita123",
    //password : "lusita123",
    database : "db_blog"

});

export async function select(qry : QueryConfig){
    let table : any = [];
    try{
        await client.connect();
        let hasil : QueryResult = await client.query(qry);
        await client.end();
        table = hasil.rowsOfObjects();
    }catch(error) {
        console.log(error);
    }
    return table;
};