import{ Client } from 'https://deno.land/x/postgres/mod.ts';
import {QueryConfig, QueryResult} from 'https://deno.land/x/postgres/query.ts';

const client = new Client({
    hostname : "localhost",
    port : 5432,
    user : "postgres",
    password : "1234",
    //password : "lusita123",
    database : "db_blog"

});

export async function select(qry : QueryConfig |QueryConfig[] ){
    let table : any = [];
    try {
        await client.connect();

        let hasil : QueryResult | QueryResult[];
        if(Array.isArray(qry)){
            hasil = await client.multiQuery(qry);
            hasil.forEach((obj) =>{
                 table.push(obj.rowsOfObjects() );
            });
            
        }else{
             hasil = await client.query(qry);
             table = hasil.rowsOfObjects();
        } 
        await client.end();
    } catch(error) {
        console.log(error);
    }
  
    return table;

}
export async function insert(qry : QueryConfig):Promise<any[]> {
    let table : any = [];
    try{
    await client.connect();
    let hasil : QueryResult = await client.query(qry);
    await client.end();
    table [0] = 'sukses';
    table[1] = 'jumlah baris yang tersimpan '+hasil.rowCount;
   }catch (error){
      table[0] = 'Gagal';
      table[1] = `${error}`;
   }

   return table;
}