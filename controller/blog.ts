import {renderFileToString} from 'https://deno.land/x/dejs/mod.ts';
import{select } from '../models/pg_model.ts';

const home = async({response} : {response : any}) => {
    const html= await renderFileToString("./views/home.ejs",{
        data :{
            nama : "lusita ayu mardiansah",
            pemrograman : await select()
        },
        subview:{
            namafile : "./views/blog-main.ejs",
            showjumbotron : true
        }
    });
    
    response.body = new TextEncoder().encode(html);
} 
const signup = async({response} : {response : any})=>{
    const html= await renderFileToString("./views/signup.ejs",{
        data : {
            pemrograman : await select()
        },
        subview : {
            namafile : "./views/signup.ejs",
            showjumbotron : false
        }

    });
    response.body = new TextEncoder().encode(html);
}
const saveuser = async({request, response}: {request : any, response : any})=>{
    const body = await request.body();

    const namalengkap = body.value.get("fullname");
    const namauser = body.value.get("username");
    const pwd = body.value.get("paswd");

    response.body = "Data yang di POST : "+namalengkap+", "+namauser+", "+pwd;  
}
const kategori = async({params, response} : {params : {id : string}, response:any})=>{
    response.body = "ID Parameter : "+params.id;
}

export{home, signup, saveuser, kategori}
