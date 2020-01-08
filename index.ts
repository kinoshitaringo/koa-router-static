import send from "koa-send";
import path from "path";

interface Options {
  debug?: boolean;
  index?: string;
}

export default function* (root: string, options?: Options) {
  let opts = options || {};
  if (!options.index)
    opts.index = "index.html";

  root = path.resolve(root);

  if (opts.debug)
    console.log('Static mounted on "%s"', root);

  return function* (next: any) {
    yield next;

    if (this.method !== "GET" && this.method !== "HEAD") return;
    if (this.body !== null && this.status !== 404) return;

    let file = this.params["0"] || "/" + opts.index;
    let requested = path.normalize(file);
    if (requested.length === 0 || requested === "/") requested = opts.index;

    yield send(this, requested, { root });
  }
}
