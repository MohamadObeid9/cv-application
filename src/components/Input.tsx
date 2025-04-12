export const Input = ({ value, type, placeHolder, required }: props) => {
  return (
    <div className="mt-2">
      <label htmlFor={value} className="font-semibold tracking-wide">
        {value}
        <input
          type={type}
          value=""
          id={value}
          className={`border my-1 w-full rounded-lg border-slate-400 placeholder:text-xs p-1 ${
            type === "date" ? "text-slate-600" : ""
          }`}
          placeholder={placeHolder}
          required={required}
        />
      </label>
    </div>
  );
};
type props = {
  value: string;
  type: string;
  placeHolder: string;
  required: boolean;
};
