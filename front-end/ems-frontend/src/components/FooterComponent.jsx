import React from 'react'

const FooterComponent = () => {
    return (
        <div>
            <footer className='bg-black text-white text-center py-3'>
                <p>
                    Desenvolvido por Eduardo Melo &copy; {new Date().getFullYear()} - Todos os direitos reservados.
                </p>

            </footer>
        </div>
    )
}

export default FooterComponent