interface InputProps {
    type: string;
    placeholder: string;
    change? : (event : React.ChangeEvent<HTMLInputElement>) => void;
}

function Input({ type,placeholder,change }: InputProps) {
    return (
        <input
            type={type}
            placeholder={placeholder}
            className="w-full border border-gray-300 rounded-lg px-4 py-2
             outline-none ring-0 ring-transparent
             focus:outline-none focus:ring-2 focus:ring-emerald-400
             focus:border-emerald-400
             transition-all duration-200"
             onChange={change}
        />
    );
}

export default Input;
