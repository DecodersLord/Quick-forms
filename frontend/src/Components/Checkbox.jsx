function Checkbox({ options, checked, onChange }) {
    return (
        <>
            {options.map((option) => (
                <div key={option}>
                    <input
                        type="checkbox"
                        id={option}
                        checked={checked[option]}
                        onChange={(e) => onChange(e.target.checked, option)}
                    />
                    <label htmlFor={option}>{option}</label>
                </div>
            ))}
        </>
    );
}

export default Checkbox;
