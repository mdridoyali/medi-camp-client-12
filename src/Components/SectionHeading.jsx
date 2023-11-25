

const SectionHeading = ({heading}) => {
    return (
        <div className="flex">
            <h2 className="text-4xl uppercase font-bold text-center my-10 border-b inline-block min-w-min mx-auto">{heading}</h2>
        </div>
    );
};

export default SectionHeading;