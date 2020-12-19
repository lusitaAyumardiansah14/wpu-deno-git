import {renderFileToString} from 'https://deno.land/x/dejs/mod.ts';
import { toParamRegExp } from "https://deno.land/x/oak@v6.3.2/headers.ts";
const home = async({response} : {response : any}) => {

    const html= await renderFileToString("./views/home.ejs",{
        data :{
            nama : "lusita ayu mardiansah",
            pemrograman : ["PHP","Typescript","Javascript"],
            mahasiswa : [
                {nim:"1", "nama" : "batis"},
                {nim:"2", "nama" : "santi"},
                {nim:"3", "nama" : "anisya"}
            ]
        }
    });
    
    response.body = new TextEncoder().encode(html);
} 
export{home}
