function RadioButton({ radioname, options, checked, onChange }) {
    return (
        <>
            {options.map((option) => (
                <div key={option}>
                    <input
                        type="radio"
                        id={option}
                        checked={checked[option]}
                        name={radioname}
                        onChange={(e) => onChange(e.target.checked, option)}
                    />
                    <label htmlFor={option}>{option}</label>
                </div>
            ))}
        </>
    );
}

export default RadioButton;
