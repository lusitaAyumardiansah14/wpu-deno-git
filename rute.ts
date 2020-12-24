import{ Router } from 'https://deno.land/x/oak/mod.ts';
import{home, signup, saveuser, kategori} from './controller/blog.ts';
const router = new Router();

router
    .get("/",home)
    .get("/daftar", signup)
    .post("/simpanuser", saveuser)
    //.get("/kategori/ : id ",kategori). Cara penulisan rute seperti ini salah
    .get("/kategori/:id ",kategori)//yg benar spt ini
    .get("/about", (ctx)=>{
        ctx.response.body = "ini halaman About";
    });
export default router;