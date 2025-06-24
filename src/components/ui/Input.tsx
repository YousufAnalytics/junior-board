interface InputProps {
    type: string;
    placeholder?: string;
    change? : (event : React.ChangeEvent<HTMLInputElement>) => void;
    name?: string
    value?: string | number
    checked?: boolean
}

function Input({ type,placeholder,change,name, value, checked }: InputProps) {
    return (
        <input
            type={type}
            placeholder={placeholder}
            name={name}
            value = {value}
            checked = {checked}
            className="w-full border border-gray-300 rounded-lg px-4 py-2
             outline-none ring-0 ring-transparent
             focus:outline-none focus:ring-2 focus:ring-blue-400
             focus:border-blue-400
             transition-all duration-200"
             onChange={change}
        />
    );
}

export default Input;
