import Link from "next/link";

export default function blogpost(){
    return <main>
    <h1>
    Blog Post Blog/Page.JS wala
    </h1>
    <button><Link href="/blog/post-1">Post 1</Link></button>
    <button><Link href="/blog/post-2">Post 2</Link></button>
    <button><Link href="/blog/post-3">Post 3</Link></button>
    </main>
}