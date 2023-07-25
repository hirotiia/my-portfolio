export default function Articles ({params}: {params: {slug: string} }) {
    return (
        <div className="">
            <h1>新着記事</h1>
            <p>記事のスラッグ：{params.slug}</p>
        </div>
    )
}