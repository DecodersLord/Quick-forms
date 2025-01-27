import useGetForms from "../../hooks/useGetForms";
import FormSkeleton from "../../skeleton/FormSkeleton";
import LogoutButton from "../Dashboard/LogoutButton";

function Dashboard() {
    const { forms, loading } = useGetForms();

    return (
        <>
            <div className="flex flex-row m-16 p-8 gap-4 justify-center items-center text-gray-600">
                {!loading &&
                    forms.map((form) => (
                        <FormCard key={form._id} form={form} />
                    ))}
                {!loading && <FormCard form={null} />}
                {loading &&
                    [...Array(3)].map((_, i) => <FormSkeleton key={i} />)}
            </div>
            <LogoutButton />
        </>
    );
}

const FormCard = ({ form }) => {
    return (
        <div className="relative flex w-96 flex-col rounded-xl bg-accent bg-clip-border shadow-md shadow-accent/20 transition-all hover:shadow-lg hover:shadow-accent/40 focus:shadow-none active:shadow-none">
            <div className="p-6">
                <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                    {form ? form.formName : "No Forms Found"}
                </h5>
                <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                    {form ? form.description : "Create a form to get started."}
                </p>
            </div>
            <div className="p-6 pt-0">
                <button
                    className="select-none rounded-lg bg-gray-600 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-500/20 transition-all hover:shadow-lg hover:shadow-gray-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                    data-ripple-light="true"
                >
                    {form ? "View Form" : "Create Form"}
                </button>
            </div>
        </div>
    );
};

export default Dashboard;
