export default function(props: any) {
    const {name} = props;
    return(
        <>
            <div className="switch_btn">
                <label className="switch mr-2">
                <input type="checkbox" />
                <span className="slider round"></span>
                </label>
                <span className="switch-label" id="flexSwitchCheckChecked">
                {name}
                </span>
            </div>
        </>
    )
}