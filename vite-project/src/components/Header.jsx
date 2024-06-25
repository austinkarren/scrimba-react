import headShot from '../assets/tn.jpg'

const Header = () => {
    return (
        <header className='flex flex-col items-center rounded-md font-inter'>
            <img src={headShot} className="rounded-t-lg w-screen max-w-[500px] "/>
            <div className='flex flex-col'>
                <h1 className=''>Austin Karren</h1>
                <h2>Software Engineer</h2>
                <div className="flex">
                    <button>Email</button>
                    <button>Linkedn</button>
                </div>
            </div>

        </header>
    )
}

export default Header