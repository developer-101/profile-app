
export default function User({ user }: { user: { avatar_url: string, followers: number, following: boolean, public_repos: number, url: string, name: string, login: string, html_url: string } }) {


    return <div className="user">
        <div>
            <img src={user.avatar_url} className="avatar" alt="User" />
        </div>
        <div>
            <a href={user.html_url}>Github page: {user.name || user.login}</a>
        </div>
    </div>
}