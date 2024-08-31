export default function Header() {
    return (
        <header className="flex justify-between px-6 py-3 bg-gray-200/10 ">
            <div>
                <img src="/logo.png" alt="Logo" className="w-52 h-auto" />
            </div>
            <ul className="flex items-center gap-8 font-semibold">
                <li>About</li>
                <li>Services</li>
                <li>Feedback</li>
                <li>Contact Us</li>
            </ul>
        </header>
    )
}