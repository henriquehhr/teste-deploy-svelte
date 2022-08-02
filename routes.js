import Pagina1 from "./src/lib/pagina1.svelte";
import Pagina2 from "./src/lib/pagina2.svelte";
import NotFound from "./src/lib/notfound.svelte";

export const routes = {
  "/": Pagina1,
  "/article/:title": Pagina2,
  "*": NotFound
};