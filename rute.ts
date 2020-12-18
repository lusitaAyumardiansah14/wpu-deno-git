import{ Router } from 'https://deno.land/x/oak/mod.ts';
import {renderFileToString} from 'https://deno.land/x/dejs/mod.ts';
const router = new Router();

router
    .get("/",async (ctx)=>{
        const html= await renderFileToString("./views/home.ejs",{});
        ctx.response.body = new TextEncoder().encode(html);
    })
    .get("/kategori", (ctx)=>{
        ctx.response.body = "ini halaman kategori";
    })
    .get("/about", (ctx)=>{
        ctx.response.body = "ini halaman About";
    });
export default router;