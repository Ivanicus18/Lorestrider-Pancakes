import React from 'react';

function Header() {
    return (
        <header>
            <div>
                <div>
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