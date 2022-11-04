
const btncss =
    "inline-flex items-center px-3 py-1.5 border border-gray-300 shadow-sm font-medium rounded-full text-gray-700 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500";

const Button = ({ Message, btnHandler }) => {
    return (
    <div className="mt-3">
        <button onClick={btnHandler} className={btncss}>{Message}</button>
    </div>
    )
}

export default Button