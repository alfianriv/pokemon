const LabelType = (props) => {
    return <div className="flex gap-2 px-3 py-1 rounded bg-red-600 text-white leading-none">
        <span>{props.label}</span>
    </div>
}

export default LabelType