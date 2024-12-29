
const SectionTitle = ({heading, subheading}) => {
    return (
        <div className="text-center m-4 space-y-4 md:w-4/12 mx-auto mb-10 mt-10">
            <h3 className="text-orange-600 italic">--- {subheading} ---</h3>
            <h1 className="text-3xl  border-y-4 p-2">{heading}</h1>
        </div>
    );
};

export default SectionTitle;