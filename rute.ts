import{ Router } from 'https://deno.land/x/oak/mod.ts';
import{home} from './controller/blog.ts';
const router = new Router();

router
    .get("/",home)
    .get("/kategori", (ctx)=>{
        ctx.response.body = "ini halaman kategori";
    })
    .get("/about", (ctx)=>{
        ctx.response.body = "ini halaman About";
    });
export default router;