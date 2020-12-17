//1. import modul application dari https://deno.land/x/oak/mod.ts
import{ Application } from 'https://deno.land/x/oak/mod.ts';

//2. new instance application ke variable kita
const app = new Application();

//3. definisikan middleware app kita

app.use((ctx)=>{
    ctx.response.body = "hello world!";

});

//4. jalankan server
console.log("service berjalan di port 8000");
await app.listen({port :8000});