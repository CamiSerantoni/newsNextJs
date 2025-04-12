export default function NewsDetailPage({ params }) {
    const newsId= params.id
    return (
        <div>
            <h1>News Page</h1>
            <p>News id: {newsId}</p>
        </div>
    );
}