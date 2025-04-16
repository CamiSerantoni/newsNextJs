import NewsList from "@/components/news-list";

export default function FilteredNewsPage({params}){
    const newsYear =params.newsYear;
    const news =  getNewsForYear(newsYear)

    return <NewsList news={news}/>

}