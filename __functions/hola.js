import { header } from "../header.js";

export async function onRequest(context) {
    return new Response(
        `${header("Pages Functions")} <div>hola</div></body></html>`,
        {
            headers: { "Content-Type": "text/html" }
        }
    );
}
