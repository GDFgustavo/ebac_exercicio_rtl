import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '..';


describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });
    test('Deve adicionar 2 comentários no post', () => {
        render(<PostComment />);
        
        const addComentarios = (comentario: any) => {
            fireEvent.change(screen.getByTestId('campo-comentarios'),{
                target: {
                    value: comentario
                },
            })
            fireEvent.click(screen.getByTestId('btn-comentar'));
        }

        addComentarios('Mini muito bem detalhada')
        addComentarios('Muito bonita')
        expect(screen.getByText('Mini muito bem detalhada')).toBeInTheDocument()
        expect(screen.getByText('Muito bonita')).toBeInTheDocument()
    })
});