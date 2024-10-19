import React from 'react'

const FooterComponent = () => {
    return (
        <div>
            <footer className='bg-black text-white text-center py-3'>
                <p>
                    Desenvolvido por <a href="https://github.com/EduardoMeloDeOliveira" target='blank'>Eduardo Melo de Oliveira</a>&copy; {new Date().getFullYear()} - Todos os direitos reservados.
                </p>

            </footer>
        </div>
    )
}

export default FooterComponent