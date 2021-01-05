import{ Router } from 'https://deno.land/x/oak/mod.ts';
import{home, signup, kategori, login} from './controller/blog.ts';
const router = new Router();

router
    .get("/",home)
    .get("/daftar", signup)
    .post("/daftar", signup)
    .get("/login", login)
    .post("/login", login)
    //.get("/kategori/ : id ",kategori). Cara penulisan rute seperti ini salah
    .get("/kategori/:id ",kategori)//yg benar spt ini
    .get("/about", (ctx)=>{
        ctx.response.body = "ini halaman About";
    });
export default router;