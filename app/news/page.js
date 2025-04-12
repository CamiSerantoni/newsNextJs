import Link from "next/link";

export default function  newsPagege() {
    return (
 <> 
     <h1>News Page</h1>
     <ul>
        <li>
            <Link href="/news/first-news"> first news</Link>
        </li>
        <li>
            <Link href="/news/second-news"> first news</Link>
        </li>
        <li>
            <Link href="/news/third-news"> Third news</Link>
        </li>
     </ul>
    </>

    )
   
  
}