import LogoIcon from "../assets/LOGO.svg";

export function Header() {
    return (
        <header className="w-full h-36 bg-black mb-28 border-b-[0.5px] border-white flex content-center flex-wrap px-[52px]">
            <Logo />
            <Nav />
        </header>
    );
}

function Logo() {
    return (
        <img className="h-12" src={LogoIcon} style={{ fill: "#FFFFFF" }}></img>
    );
}

function Nav() {
    return (
        <nav className="ml-auto text-white flex gap-8 text-4xl">
            <h1>HELP</h1>
            <h1>ABOUT</h1>
            <h1>MODE</h1>
        </nav>
    );
}
