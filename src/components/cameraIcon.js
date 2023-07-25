const CameraIcon = (props) => {
    return (
        <svg className="w-8 md:w-16 h-8 md:h-16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">

            <g fill="none" fill-rule="evenodd">

                <path d="m0 0h32v32h-32z" />

                <path d="m16 0c6.0751322 0 11 4.92486775 11 11v19h4c.5522847 0 1 .4477153 1 1s-.4477153 1-1 1h-30c-.55228475 0-1-.4477153-1-1s.44771525-1 1-1h4v-19c0-6.07513225 4.92486775-11 11-11zm5 13c-.5522847 0-1 .4477153-1 1v6c0 .5522847.4477153 1 1 1s1-.4477153 1-1v-6c0-.5522847-.4477153-1-1-1z" fill={props.color} />

            </g>

        </svg>
    );
}

export default CameraIcon;