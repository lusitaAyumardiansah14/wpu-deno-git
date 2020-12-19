import{ Router } from 'https://deno.land/x/oak/mod.ts';
import{home, signup, saveuser} from './controller/blog.ts';
const router = new Router();

router
    .get("/",home)
    .get("/daftar", signup)
    .post("/simpanuser", saveuser)
    .get("/kategori", (ctx)=>{
        ctx.response.body = "ini halaman kategori";
    })
    .get("/about", (ctx)=>{
        ctx.response.body = "ini halaman About";
    });
export default router;