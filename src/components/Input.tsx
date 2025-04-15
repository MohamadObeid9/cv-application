type props = {
  title: string;
  value: string;
  type: string;
  name: string;
  placeHolder: string;
  required: boolean;
};
export const Input = ({
  title,
  value,
  type,
  name,
  placeHolder,
  required,
}: props) => {
  return (
    <div className="mt-2">
      <label htmlFor={value} className="font-bold tracking-wide">
        {title}
      </label>
      <input
        type={type}
        value={value}
        id={value}
        name={name}
        className={`border my-1 w-full rounded-lg border-slate-400 placeholder:text-sm p-1 ${
          type === "date" ? "text-slate-600" : ""
        }`}
        placeholder={placeHolder}
        required={required}
      />
    </div>
  );
};
