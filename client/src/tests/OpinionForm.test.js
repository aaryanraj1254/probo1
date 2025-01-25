import {render,screen} from @'testing-library/react;
import {OpinionForm from '../OpinionForm';

test('renders OpinionForm with input fields',()=>{
    render(<OpinionForm />);
    const opinionInput=screen.getByPlaceholderText(/Share your opinion/i);
    const SubmitButton=screen.getByRole('button',{name:/Submit/i});

    expect(opinionInput).toBeInTheDocument();
    expect(SubmitButton).toBeInTheDocument();
}