export default function(props: any) {
    const {name, label, handleChange, defaultChecked} = props;
    return(
        <>
            <div className="switch_btn">
                <label className="switch mr-2">
                <input
                    type="checkbox"
                    name={name}
                    onChange={e => handleChange(e)}
                    defaultChecked={defaultChecked}
                />
                <span className="slider round"></span>
                </label>
                <span className="switch-label" id="flexSwitchCheckChecked">
                {label}
                </span>
            </div>
        </>
    )
}