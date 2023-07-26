import './globals.css'
export default function RootLayout({children}){
    return(
        <html>
            <body className='p-1'>
                <header>
                    <h1 className='border-2 border-black'>PR's</h1>
                    <h2>
                        This is website moto.
                    </h2>
                </header>
                {children}
            </body>
        </html>
    )
}