import React from 'react';

function Header() {
    return (
        <header className="bg-secondary mb-4 py-2 flex-row align-center">
            <div>
                <div className="container flex-row justify-space-between-lg justify-center align-center">
                    <h1>Bloodhounde.com</h1>
                </div>

                <nav>
                    <>
                        <a href="/">Me</a>
                        <a href="/">
                            Logout
                        </a>
                    </>
                    <>
                        <a href="/">Login</a>
                        <a href="/">Signup</a>
                    </>
                </nav>
            </div>
        </header>
    )
}

export default Header;