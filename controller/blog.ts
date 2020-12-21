import {renderFileToString} from 'https://deno.land/x/dejs/mod.ts';
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
        },
        subview:{
            namafile : "./views/blog-main.ejs"
        }
    });
    
    response.body = new TextEncoder().encode(html);
} 
const signup = async({response} : {response : any})=>{
    const html= await renderFileToString("./views/signup.ejs",{
        data : {
            pemrograman : ["PHP","Typescript","Javascript"]
        },
        subview : {
            namafile : "./views/signup.ejs"
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
