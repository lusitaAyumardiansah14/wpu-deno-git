//1. import modul application dari https://deno.land/x/oak/mod.ts
import{Apllication} from 'https://deno.land/x/oak/mod.ts';

//2. new instance application ke variable kita
const app = Apllication();

//3. definisikan middleware app kita

app.use((ctx)=>{
    ctx.response.body = "hello world!";

});

