import{ Router } from 'https://deno.land/x/oak/mod.ts';

const router = new Router();

router
    .get("/", (ctx)=>{
        ctx.response.body = "ini halaman home";
    })
    .get("/kategori", (ctx)=>{
        ctx.response.body = "ini halaman kategori";
    })
    .get("/about", (ctx)=>{
        ctx.response.body = "ini halaman About";
    });
export default router;