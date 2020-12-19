import{ Router } from 'https://deno.land/x/oak/mod.ts';
import {renderFileToString} from 'https://deno.land/x/dejs/mod.ts';
const router = new Router();

router
    .get("/",async (ctx)=>{
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
        
        ctx.response.body = new TextEncoder().encode(html);
    })
    .get("/kategori", (ctx)=>{
        ctx.response.body = "ini halaman kategori";
    })
    .get("/about", (ctx)=>{
        ctx.response.body = "ini halaman About";
    });
export default router;