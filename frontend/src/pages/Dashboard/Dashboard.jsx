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

                {/* Always show a final card */}
                {!loading && (
                    <FormCard
                        form={{
                            formName:
                                forms.length > 0
                                    ? "Create New One"
                                    : "No Forms Found",
                            description:
                                forms.length > 0
                                    ? "Start creating a new form."
                                    : "Create a form to get started.",
                        }}
                        isCreateNew={true}
                    />
                )}

                {loading &&
                    [...Array(3)].map((_, i) => <FormSkeleton key={i} />)}
            </div>
            <LogoutButton />
        </>
    );
}

const FormCard = ({ form, isCreateNew }) => {
    return (
        <div className="relative flex w-96 flex-col rounded-xl bg-accent bg-clip-border shadow-md shadow-accent/20 transition-all hover:shadow-lg hover:shadow-accent/40 focus:shadow-none active:shadow-none">
            <div className="p-6">
                <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                    {form.formName}
                </h5>
                <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                    {form.description}
                </p>
            </div>
            <div className="p-6 pt-0">
                <button
                    className={`select-none rounded-lg ${
                        isCreateNew ? "bg-green-600" : "bg-gray-600"
                    } py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md transition-all hover:shadow-lg focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none`}
                    type="button"
                    data-ripple-light="true"
                    onClick={() => {
                        if (isCreateNew) {
                            window.location.href = "/create-form";
                        } else {
                            window.location.href = `/form/${form._id}`;
                        }
                    }}
                >
                    {isCreateNew ? "Create Form" : "View Form"}
                </button>
            </div>
        </div>
    );
};

export default Dashboard;
